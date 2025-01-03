'use client'
import React, { useState } from "react";

const ProfileCard = ({ ProfileImage, name, email }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editEmail, setEmail] = useState(email);
  const [editProfileImage, setProfileImage] = useState(ProfileImage);
  const [tempProfileImage, setTempProfileImage] = useState(ProfileImage);

  const handleEditClick = () => {
    if (isEditMode) {
      setTempProfileImage(editProfileImage); 
    }
    setIsEditMode(!isEditMode);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfileImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = () => {
    setProfileImage(tempProfileImage); 
    setIsEditMode(false);
  };

  return (
    <div className="profile-card-container relative  flex flex-col items-center w-full max-w-sm md:max-w-md lg:max-w-lg mt-5 border-2 border-gray-300 bg-white font-roboto shadow-md mx-auto">
      <div className="absolute flex justify-center items-center top-5 right-5">
        <div
          className="edit-icon w-6 h-6 cursor-pointer"
          onClick={handleEditClick}
        >
          <img
            src={isEditMode ? '/icons/X.png' : '/icons/edit.png'}
            alt="Edit"
            className="w-6 h-6"
          />
        </div>
      </div>
      <div className="profile-card-content w-full mt-2 px-4 md:px-6 lg:px-8 flex flex-col items-center">
        {isEditMode ? (
          <div className="relative">
            <label
              htmlFor="profileImage"
              className="cursor-pointer relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center bg-transparent"
            >
              <img
                src={tempProfileImage} 
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
            <input
              type="email"
              value={editEmail}
              onChange={(e) => setEmail(e.target.value)}
              className="profile-email-input w-full mt-4 p-2 border border-gray-300 rounded text-sm md:text-base"
            />
          </div>
        ) : (
          <>
            <img
              src={editProfileImage} 
              alt="Profile"
              className="profile-image w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto"
            />
            <h2 className="profile-name text-lg md:text-xl lg:text-2xl font-medium text-black mt-4">
              {name}
            </h2>
            <p className="profile-email text-sm md:text-base lg:text-lg text-gray-600 mt-2">
              {editEmail}
            </p>
          </>
        )}
        <button
          onClick={isEditMode ? handleSaveClick : null}
          className={`profile-logout ${
            isEditMode ? "bg-green-500" : "bg-red-500"
          } mt-4 w-32 md:w-36 lg:w-40 h-12 text-white text-sm md:text-base font-semibold rounded-full mb-6`}
        >
          {isEditMode ? "Save" : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
