'use client';
import React, { useState, useEffect } from "react";
import ProfileCard from "@/components/user/ProfileCard";
import { useRouter } from "next/navigation";
import axios from 'axios';

const Page = () => {
    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");
    const [location, setLocation] = useState("");
    const [mobile, setPhoneNumber] = useState("");
    const [profileImage, setProfileImage] = useState(""); 
    const [isEditMode, setIsEditMode] = useState(false);
    const [imageFile, setImageFile] = useState(null); 
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('userToken');

            if (!token) {
                console.error('User token not found in localStorage');
                router.push('/'); 
                return;
            }

            let userId;
            try {
                userId = JSON.parse(atob(token.split(".")[1])).id; 
            } catch (error) {
                console.error('Error decoding token', error);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:5000/api/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const userData = response.data;
                //console.log('Fetched user data:', userData);
                setName(userData.fullName);
                setEmail(userData.email);
                setAbout(userData.about);
                setLocation(userData.location);
                setPhoneNumber(userData.mobile);
                setProfileImage(userData.profileImage || "/images/Frame 54.png");
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, []);

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };

    const handleSaveChanges = async () => {
        setIsEditMode(false);

        const token = localStorage.getItem('userToken');

        if (!token) {
            console.error('User token not found in localStorage');
            return;
        }

        let userId;
        try {
            userId = JSON.parse(atob(token.split(".")[1])).id; 
        } catch (error) {
            console.error('Error decoding token', error);
            return;
        }

        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('about', about);
        formData.append('location', location);
        formData.append('mobile', mobile);
        if (imageFile) {
            formData.append('profileImage', imageFile); 
        }

        try {
            const response = await axios.put(
                `http://localhost:5000/api/user/profile`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data' 
                    }
                }
            );

            console.log('Changes saved', response.data);
            setProfileImage(response.data.profileImage || "/images/Frame 54.png"); 
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    // Function passed to ProfileCard
    const onUpdateProfile = (newProfileImage, email) => {
        setProfileImage(newProfileImage);
        setEmail(email);
    };

    return (
        <div className="profile-settings-section font-roboto w-full h-auto mt-[-50px] bg-cover flex flex-col md:flex-row justify-between items-start gap-6 p-4 md:p-8">
            <div className="profile-card-container w-full md:w-[392px] h-auto md:h-[539px] mt-6 md:mt-[146px] flex-shrink-0">
                <ProfileCard
                    ProfileImage={profileImage}
                    name={fullName}
                    email={email} 
                    onUpdateProfile={onUpdateProfile} 
                />
            </div>
            <div className="profile-personal-info-section p-4 md:p-6 rounded-lg bg-white w-full h-auto mt-6 md:mt-[140px] flex flex-col">
                <div className="profile p-info flex items-center justify-between w-full h-[20px]">
                    <h1 className="profile-heading items-start text-lg md:text-[24px] font-semibold ml-[5px]">
                        {isEditMode
                            ? "Edit Personal Information"
                            : "Personal Information"}
                    </h1>
                    <div className="cursor-pointer flex justify-end">
                        <img
                            src={isEditMode ? "/icons/X.png" : "/icons/edit.png"}
                            alt="Edit"
                            className="p-edit-icon w-6 h-6 md:w-[30px] md:h-[30px] items-baseline"
                            onClick={handleEditClick}
                        />
                    </div>
                </div>
                <div className="profile-personal-inputs mt-6 gap-6">
                    <div className="w-full">
                        <label className="text-base md:text-[20px] leading-[23.44px] font-semibold">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full h-10 md:h-[44px] mt-2 p-2 border border-gray-300"
                            value={fullName}
                            onChange={(e) => setName(e.target.value)}
                            readOnly={!isEditMode}
                        />
                    </div>
                    <div className="w-full mt-3">
                        <label className="text-base md:text-[20px] leading-[23.44px] font-semibold">
                            About
                        </label>
                        <input
                            type="text"
                            className="w-full h-10 md:h-[44px] mt-2 p-2 border border-gray-300"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            readOnly={!isEditMode}
                        />
                    </div>
                    <div className="w-full mt-3">
                        <label className="text-base md:text-[20px] leading-[23.44px] font-semibold">
                            Location
                        </label>
                        <input
                            type="text"
                            className="w-full h-10 md:h-[44px] mt-2 p-2 border border-gray-300"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            readOnly={!isEditMode}
                        />
                    </div>
                    <div className="w-full mt-3">
                        <label className="text-base md:text-[20px] leading-[23.44px] font-semibold">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            className="w-full h-10 md:h-[44px] mt-2 p-2 border border-gray-300"
                            value={mobile}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            readOnly={!isEditMode}
                        />
                    </div>

                    {isEditMode && (
                        <div className="mt-6 flex justify-start">
                            <button
                                className="bg-white text-black px-6 py-2 w-full md:w-auto text-base md:text-[20px] font-semibold rounded-[50px] border border-secondary hover:bg-greenbutton hover:text-white"
                                onClick={handleSaveChanges}
                            >
                                Save Details
                            </button>
                        </div>
                    )}
                </div>
                <div>
                    <h1 className="text-lg md:text-[24px] font-semibold mt-6">
                        Change Your Password
                    </h1>
                    <h2 className="text-base md:text-[20px] mt-3">
                        Update your password to keep your account safe. Enter
                        your current password and choose a new one to proceed.
                    </h2>
                    <button
                        className="bg-white text-black px-6 py-2 w-full md:w-[243px] h-10 md:h-[52px] text-base md:text-[20px] font-semibold rounded-[50px] border border-secondary hover:bg-greenbutton hover:text-white mt-6"
                        onClick={() => router.push(`/reset-password`)}
                    >
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
