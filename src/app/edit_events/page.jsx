'use client'
import React, { useState } from 'react';
import './edit_events.css';

const Page = () => {
  const [imagePreview, setImagePreview] = useState('/images/dog home.jpeg');
  const [formData, setFormData] = useState({
    eventName: "Support Animal Welfare: Spend a Day Volunteering at the Local Shelter and Make a Difference",
    startDateTime: "2025-12-21T09:00",
    endDateTime: "2025-12-21T16:00",
    location: "Haven Paws Animal Shelter, Kandy",
    aboutEvent: "Join us for a meaningful day at the local animal shelter in Kandy, where you’ll have the opportunity to support animal welfare by directly engaging with the animals in need. Spend time feeding, cleaning, and playing with the sheltered animals to help them feel loved and cared for. Your efforts will contribute to the overall well-being of the animals and help raise awareness about the importance of adoption. Whether you're an animal enthusiast or someone looking to give back, this event will make a lasting impact on the lives of many animals. Together, we can make a real difference in the community and help create a brighter future for these deserving animals. By volunteering, you'll also have the chance to connect with other like-minded individuals who share your passion for animal welfare. It's an excellent opportunity to learn more about the needs of animals in our community while making new friends and strengthening the bond we all share for a cause greater than ourselves. Your presence matters, and together, we can create lasting change.",
  });

  //image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-events-section font-roboto flex flex-col items-center w-full h-full bg-gray-50 p-7">
      <div className="edit-events-form-section mt-4 w-full max-w-5xl">
      <div className="edit-events-header w-full max-w-5xl mt-16  flex items-start ">
        <h1 className="text-[32px] leading-[37.5px] font-semibold ">Edit Event</h1>
      </div>
        <form onSubmit={handleSubmit} className="edit-events-form mt-8">
          <div className="edit-events-form-image relative w-full h-[616px] border border-gray-300 rounded-[6px] overflow-hidden mb-4">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Event"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full bg-gray-100">
                <p className="text-gray-500">No Image Selected</p>
              </div>
            )}
            <label
              htmlFor="file-upload"
              className="absolute bottom-[16px] right-[16px] px-[12px] py-[6px] gap-1 bg-white text-black border border-gray-300 rounded-[4px] flex items-center shadow-md cursor-pointer"
            >
              Upload
              <img
                src="/icons/document-upload.png"
                alt="export"
                className="doc-icon w-[18px] h-[18px]"
              />
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            placeholder="Event Name"
            className="w-full h-[44px] border border-gray-300 mb-4 p-4 rounded-[6px] text-[18px]"
          />
          <input
            type="datetime-local"
            name="startDateTime"
            value={formData.startDateTime}
            onChange={handleInputChange}
            placeholder="Start date and time"
            className="w-full h-[44px] border border-gray-300 mb-4 p-3 rounded-[6px] text-[18px]"
          />
          <input
            type="datetime-local"
            name="endDateTime"
            value={formData.endDateTime}
            onChange={handleInputChange}
            placeholder="End date and time"
            className="w-full h-[44px] border border-gray-300 mb-4 p-3 rounded-[6px] text-[18px]"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full h-[44px] border border-gray-300 mb-4 p-3 rounded-[6px] text-[18px]"
          />
          <textarea
            name="aboutEvent"
            value={formData.aboutEvent}
            onChange={handleInputChange}
            placeholder="About Event"
            className="w-full border border-gray-300 mb-4 p-3 rounded-[6px] text-[18px] text-gray-700"
            rows="7"
          ></textarea>
          <button
            type="submit"
            className=" edit-events-form-submit w-full bg-greenbutton text-white font-medium rounded-[50px] h-[54px] text-[18px] leading-[21.09px] text-fc p-2 mt-4"
          >
            Update Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;