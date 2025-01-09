"use client";
import React, { useEffect, useState } from "react";
import "@/app/(events)/your-events/[id]/edit/edit-event.css";
import Swal from "sweetalert2";
import { Trash2 } from "lucide-react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useParams } from "next/navigation";

const Page = () => {
    const params = useParams();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [event, setEvent] = useState(null);
    const [imagePreview, setImagePreview] = useState("/images/dog home.jpeg");
    const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({
        eventId: params.id,
        eventName:
            "Support Animal Welfare: Spend a Day Volunteering at the Local Shelter and Make a Difference",
        startDateTime: "2025-12-21T09:00",
        endDateTime: "2025-12-21T16:00",
        location: "Haven Paws Animal Shelter, Kandy",
        aboutEvent:
            "Join us for a meaningful day at the local animal shelter in Kandy...",
        backgroundImage: "/images/dog home.jpeg",
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem("userToken");
                if (token) {
                    setIsLoggedIn(true);
                    const userId = jwt.decode(token).id;
                    const userResponse = await axios.get(
                        `http://localhost:5000/api/user/${userId}`,
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    );
                    setUser((prev) => userResponse.data);

                    console.log("user", userResponse.data);

                    const event = userResponse.data.eventsCreated.find(
                        (event) => event._id === params.id
                    );
                    setEvent(() => event);
                    console.log("event", event);
                    setFormData((prev) => ({
                        eventId: event._id,
                        eventName: event.eventName,
                        startDate: event.startDateTime,
                        endDate: event.endDateTime,
                        location: event.location,
                        aboutEvent: event.aboutEvent,
                        images: event.images,
                        backgroundImage: event.backgroundImage,
                    }));
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchData();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // upload image if new one is selected
            if (selectedImage) {
                const imageFormData = new FormData();
                imageFormData.append("images", selectedImage);

                const imageResponse = await axios.post(
                    "http://localhost:5000/api/events/upload-images",
                    imageFormData,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "userToken"
                            )}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                if (imageResponse.data.files && imageResponse.data.files[0]) {
                    setFormData((prev) => ({
                        ...prev,
                        imageUrl: imageResponse.data.files[0].url,
                    }));
                }
            }

            // update event

            const eventFormData = {
                eventId: formData.eventId,
                eventName: formData.eventName,
                startDate: formData.startDate,
                endDate: formData.endDate,
                location: formData.location,
                aboutEvent: formData.aboutEvent,
                images: formData.images,
                backgroundImage: formData.imageUrl,
            };

            console.log("Event FormData:", eventFormData);

            const response = await axios.put(
                `http://localhost:5000/api/events/update`,
                eventFormData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "userToken"
                        )}`,
                    },
                }
            );

            if (response.status === 200) {
                Swal.fire({
                    title: "Success!",
                    text: "Event updated successfully",
                    icon: "success",
                    confirmButtonColor: "#00B894",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to update event",
                icon: "error",
                confirmButtonColor: "#00B894",
            });
        }
    };

    const handleDelete = async () => {
        const { isConfirmed } = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#00B894",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/api/events/delete`, {
                    data: { eventId: params.id },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "userToken"
                        )}`,
                    },
                });
                await Swal.fire(
                    "Deleted!",
                    "Your event has been deleted.",
                    "success"
                );
            } catch (error) {
                await Swal.fire("Error!", "Failed to delete event.", "error");
            }
        }
    };

    return (
        <div className="edit-events-section font-roboto flex flex-col items-center w-full h-full bg-gray-50 p-7">
            <div className="edit-events-form-section mt-4 w-full max-w-5xl">
                <div className="edit-events-header w-full max-w-5xl mt-16 flex items-start">
                    <h1 className="text-[32px] leading-[37.5px] font-semibold">
                        Edit Event
                    </h1>
                    <Trash2
                        size={40}
                        className="ml-auto cursor-pointer hover:stroke-red-500"
                        onClick={handleDelete}
                    />
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
                                <p className="text-gray-500">
                                    No Image Selected
                                </p>
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
                            onChange={handleImageChange}
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
                        className="edit-events-form-submit w-full bg-greenbutton text-white font-medium rounded-[50px] h-[54px] text-[18px] leading-[21.09px] text-fc p-2 mt-4"
                    >
                        Update Event
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
