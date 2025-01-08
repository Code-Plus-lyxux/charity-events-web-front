import React, { useState } from "react";
import { FaMapMarkerAlt, FaHandPaper } from "react-icons/fa";
import "@/app/(home)/home.css";

const EventCard = ({ images, location, eventName, aboutEvent, startDate }) => {
    const [isHandIconActive, setIsHandIconActive] = useState(false);

    const toggleHandIcon = () => {
        setIsHandIconActive(!isHandIconActive);
    };

    return (
        <div className="event-card-container relative flex flex-wrap md:flex-nowrap w-full md:w-[1223px] h-[219px] mt-10 gap-[61px]">
            <div className="relative">
                <img
                    src={images[0]}
                    alt="Event"
                    className="event-image w-full md:w-[390px] h-[219px] rounded-[23.53px] object-cover"
                />
                <div
                    className={`hand-icon absolute top-4 right-5 p-2 rounded-full shadow cursor-pointer ${
                        isHandIconActive ? "bg-greenhand" : "bg-white"
                    }`}
                    onClick={toggleHandIcon}
                >
                    <FaHandPaper
                        className={
                            isHandIconActive ? "text-white" : "text-greenhand"
                        }
                    />
                </div>
            </div>
            <div className="event-info border border-gray-300 rounded-[20px] p-[24px] shadow-sm w-full md:w-[772px] h-[219px] overflow-clip">
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
