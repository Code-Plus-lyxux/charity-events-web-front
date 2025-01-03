"use client";
import React, { useState } from "react";
import "@/app/(events)/host-events/host-events.css";
const page = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleEventImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="Host-Events-Page">
            <section className="hero-section w-full max-w-full h-[310px] font-roboto flex justify-center items-center">
                <div
                    className="hero-bg bg-cover w-full h-full"
                    style={{ backgroundImage: "url(/images/GridHero.png)" }}
                >
                    <div className="hero-text-container flex justify-center w-full h-auto">
                        <div className="hero-heading p-5 font-bold text-[56px] leading-[72px] text-center mt-24 text-black w-full max-w-4xl sm-w-3xl ">
                            <h1 className="hidden sm:block">
                                Host Your Events
                            </h1>
                            <h1 className="sm:hidden">Add Events</h1>
                        </div>
                    </div>
                    <div className="hero-subheading p-0 font-normal text-xl leading-7 text-center flex justify-center items-center text-gray-600 max-w-4xl mx-auto">
                        <h2>Create Your Own Volunteer Event</h2>
                    </div>
                </div>
            </section>

            <section className="host-events-section w-full max-w-full h-[937px] font-roboto flex justify-center px-4">
                <div className="host-event-upload-container flex justify-center w-full max-w-5xl h-[206px] border rounded-[6px] border-dashed mt-6">
                    <form>
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer flex flex-col items-center text-gray-600 w-full h-full max-w-full"
                        >
                            <div className="mb-2">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="preview-image w-full h-[206px] object-cover rounded-[6px]"
                                    />
                                ) : (
                                    <img
                                        src="/icons/gallery-import.png"
                                        alt="Upload"
                                        className="upload-icon w-[24px] h-[24px] mt-[68px]"
                                    />
                                )}
                            </div>
                            {!imagePreview && (
                                <div>
                                    <p className="text-[18px] leading-[21px] font-[400] text-gray-500">
                                        Select cover photo
                                    </p>
                                    <p className="text-sm text-gray-500 flex text-wrap gap-[10px] justify-center">
                                        Upload
                                        <img
                                            src="/icons/export.png"
                                            alt="export"
                                            className="camera-icon w-[18px] h-[18px]"
                                        />
                                    </p>
                                </div>
                            )}
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleEventImageUpload}
                            />
                        </label>

                        <div className="host-form-input mt-6 text-[18px] leading-[21px] font-[400] text-gray-500 w-full ">
                            <input
                                type="text"
                                placeholder="Event Name"
                                className="w-full border border-gray-300 mb-4 p-2 rounded-[6px]"
                            />
                            <input
                                type="datetime-local"
                                placeholder="Start date and time"
                                className="w-full border border-gray-300 mb-4 p-2 rounded-[6px]"
                            />
                            <input
                                type="datetime-local"
                                placeholder="End date and time"
                                className="w-full border border-gray-300 mb-4 p-2 rounded-[6px]"
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full border border-gray-300 mb-4 p-2 rounded-[6px]"
                            />
                            <textarea
                                placeholder="About Event"
                                className="w-full border border-gray-300 mb-4 p-2 rounded-[6px]"
                                rows="5"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full h-[54px] bg-greenbutton text-white font-medium rounded-[50px] p-2 text-[18px] leading-[38px] mt-[10px]"
                            >
                                Create Event
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default page;
