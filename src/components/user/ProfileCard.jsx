"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks/authContext";
import axios from "axios";

const ProfileCard = ({ name, email, onUpdateProfile }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [editProfileImage, setEditProfileImage] = useState(null);
    const [tempProfileImage, setTempProfileImage] = useState(null);

   
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem("userToken");
                if (!token) {
                    throw new Error("Token not found");
                }

                const userId = JSON.parse(atob(token.split(".")[1])).id;

                const response = await axios.get(`http://localhost:5000/api/user/${userId}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = response.data;
               // console.log("Fetched profile data:", data);
                if (data.user && data.user.profileImage) {
                    setProfileImage(data.user.profileImage);
                    setEditProfileImage(data.user.profileImage);
                    setTempProfileImage(data.user.profileImage);
                }
            } catch (err) {
                console.error("Error fetching profile:", err);
            }
        };

        fetchProfileData();
    }, []);

    const handleEditClick = () => {
        if (isEditMode) {
            setTempProfileImage(editProfileImage); 
        }
        setIsEditMode(!isEditMode);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
           
            setTempProfileImage(URL.createObjectURL(file)); 
            setEditProfileImage(file); 
        }
    };

    const handleSaveClick = async () => {
        if (!editProfileImage) return; 

        const formData = new FormData();
        formData.append("profileImage", editProfileImage); 

        try {
            console.log("Uploading image to server..."); 
            const response = await axios.put("http://localhost:5000/api/user/profile", formData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
                    "Content-Type": "multipart/form-data", 
                },
            });

            const data = response.data;
           // console.log("Profile update response:", data); 
            if (data.user) {
                setProfileImage(data.user.profileImage); 
                onUpdateProfile(data.user.profileImage, email); 
            }
            
        } catch (error) {
           // console.error("Error saving profile image:", error); 
        }

        setIsEditMode(false);
    };

    const handleLogoutClick = () => {
        localStorage.removeItem("userToken");
        window.location.href = "/";
    };

    return (
        <div className="profile-card-container relative flex flex-col items-center w-full max-w-sm md:max-w-md lg:max-w-lg mt-5 border-2 border-gray-300 bg-white font-roboto shadow-md mx-auto">
            <div className="absolute flex justify-center items-center top-5 right-5">
                <div className="edit-icon w-6 h-6 cursor-pointer" onClick={handleEditClick}>
                    <img src={isEditMode ? "/icons/X.png" : "/icons/edit.png"} alt="Edit" className="w-6 h-6" />
                </div>
            </div>
            <div className="profile-card-content w-full mt-2 px-4 md:px-6 lg:px-8 flex flex-col items-center">
                {isEditMode ? (
                    <div className="relative">
                        <label htmlFor="profileImage" className="cursor-pointer relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center bg-transparent">
                            <img
                                src={tempProfileImage || profileImage}
                                alt="Profile"
                                className="absolute w-full h-full object-cover rounded-full z-10"
                            />
                            <div className="profile-image-edit absolute w-full h-full bg-black opacity-50 rounded-full z-20" />
                            <span className="absolute z-30 text-white font-semibold text-sm md:text-base">
                                Click to Change
                            </span>
                            <input
                                id="profileImage"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                ) : (
                    <>
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="profile-image w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto"
                        />
                        <h2 className="profile-name text-lg md:text-xl lg:text-2xl font-medium text-black mt-4">{name}</h2>
                        <p className="profile-email text-sm md:text-base lg:text-lg text-gray-600 mt-2">{email}</p>
                    </>
                )}
                <button
                    onClick={isEditMode ? handleSaveClick : handleLogoutClick}
                    className={`profile-logout ${isEditMode ? "bg-green-500" : "bg-red-500"} mt-4 w-32 md:w-36 lg:w-40 h-12 text-white text-sm md:text-base font-semibold rounded-full mb-6`}
                >
                    {isEditMode ? "Save" : "Logout"}
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
