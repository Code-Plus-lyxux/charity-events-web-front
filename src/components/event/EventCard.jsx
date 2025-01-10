import React, { useState } from "react";
import { FaMapMarkerAlt, FaHandPaper, FaImage } from "react-icons/fa";
import "@/app/(home)/home.css";

const EventCard = ({
    id,
    backgroundImage,
    location,
    startDate,
    eventName,
    aboutEvent,
}) => {
    const [isHandIconActive] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const showNoImage = !backgroundImage || imageError;

    return (
        <div className="event-card-container relative flex flex-wrap w-full md:w-[1223px] sm:w-[800px] lg:w-[1300px] h-[219px] mt-10 gap-[61px] hover:cursor-pointer overflow-clip sm:gap-y-10">
            <div className="relative w-full md:w-[390px] h-[219px]">
                {!imageLoaded && !showNoImage && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-[23.53px]">
                        <div className="w-8 h-8 border-4 border-mint-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                )}
                {showNoImage ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-mint-100 rounded-[23.53px]">
                        <FaImage className="w-12 h-12 text-mint-400 mb-2" />
                        <span className="text-gray-500 text-sm">
                            No Image Available
                        </span>
                    </div>
                ) : (
                    <img
                        src={backgroundImage}
                        alt="Event"
                        className={`event-image w-full md:w-[390px] h-[219px] rounded-[23.53px] object-cover transition-opacity duration-300 ${
                            imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => {
                            setImageLoaded(true);
                        }}
                        onError={() => {
                            setImageError(true);
                            setImageLoaded(true);
                        }}
                    />
                )}

                <div
                    className={`hand-icon absolute top-4 right-5 p-2 rounded-full shadow ${
                        isHandIconActive ? "bg-greenhand" : "bg-white"
                    }`}
                >
                    <FaHandPaper
                        className={
                            isHandIconActive ? "text-white" : "text-greenhand"
                        }
                    />
                </div>
            </div>
            <div className="event-info border border-gray-300 rounded-[20px] p-[24px] shadow-sm w-full md:w-[772px] h-[219px]">
                <div className="event-details flex items-center gap-2 text-[16px] leading-[18.75px] text-gray-600">
                    <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-gray-600" />
                        {location}
                    </span>
                    <span>•</span>
                    <span>{startDate.slice(0, 10)}</span>
                </div>
                <h3 className="event-title text-[24px] leading-[28.13px] font-semibold text-black mt-[20px]">
                    {eventName}
                </h3>
                <p className="event-description mt-[14px] text-[18px] leading-[21.09px] text-gray-600">
                    {aboutEvent}
                </p>
            </div>
        </div>
    );
};

export default EventCard;
