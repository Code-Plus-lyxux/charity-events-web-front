"use client";
import React, { useState } from "react";
import "@/components/user/profile-card.css";

const ProfileCard = ({ ProfileImage, name, email }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editEmail, setEmail] = useState(email);
    const [editProfileImage, setProfileImage] = useState(ProfileImage);

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveClick = () => {
        setIsEditMode(false);
    };

    return (
        <div className="profile-card-container relative flex flex-col items-center w-full max-w-[392px]  mt-5 border-2 border-gray-300 bg-white font-roboto shadow-[0_4px_6px_#00000040] mx-auto">
            <div className="absolute flex justify-center items-center top-9 right-9">
                <div
                    className="edit-icon w-[25px] h-[25px] cursor-pointer"
                    onClick={handleEditClick}
                >
                    <img
                        src={isEditMode ? "/icons/X.png" : "/icons/edit.png"}
                        alt="Edit"
                        className="w-[25px] h-[25px]"
                    />
                </div>
            </div>
            <div className="profile-card-content w-full max-w-[296px] h-auto mt-[100px] flex flex-col items-center">
                {isEditMode ? (
                    <div className="relative">
                        <label
                            htmlFor="profileImage"
                            className="cursor-pointer relative w-[200px] h-[200px] rounded-full  flex items-center justify-center bg-transparent"
                        >
                            <img
                                src={editProfileImage}
                                alt="Profile"
                                className="absolute w-full h-full object-cover rounded-full z-10"
                            />
                            <div className="profile-image-edit absolute w-full h-full bg-black opacity-50 rounded-full z-20" />
                            <span className="absolute z-30 text-white font-semibold">
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
                        <input
                            type="email"
                            value={editEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            className="profile-email-input w-[200px] h-[40px] mt-4 p-2 border border-gray-300 rounded"
                        />
                    </div>
                ) : (
                    <>
                        <img
                            src={editProfileImage}
                            alt="Profile"
                            className="profile-image w-[200px] h-[200px] rounded-full mx-auto"
                        />
                        <h2 className="profile-name text-[28px] leading-[32.81px] font-medium text-black mt-4">
                            {name}
                        </h2>
                        <p className="profile-email text-[24px] leading-[28.13px] text-gray-600 mt-2">
                            {editEmail}
                        </p>
                    </>
                )}
                <button
                    onClick={isEditMode ? handleSaveClick : null}
                    className={`profile-logout   ${
                        isEditMode ? "bg-greenbutton" : "bg-red-500"
                    } mt-4 w-[124px] h-[52px] p-[12px 24px] text-white text-sm font-semibold rounded-[50px] mb-6`}
                >
                    {isEditMode ? "Save" : "Logout"}
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
