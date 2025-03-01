import React, { useState } from "react";
import { FaMapMarkerAlt, FaHandPaper } from "react-icons/fa";
import '../Home/Home.css';

const EventCard = ({ imageSrc, location, date, title, description }) => {
  const [isHandIconActive, setIsHandIconActive] = useState(false);

  const toggleHandIcon = () => {
    setIsHandIconActive(!isHandIconActive);
  };


  return (
    <div className="event-card-container relative flex flex-wrap md:flex-nowrap w-full md:w-[1223px] h-[219px] mt-10 gap-[61px]">
      <div className="relative">
        <img
          src={imageSrc}
          alt="Event"
          className="event-image w-full md:w-[390px] h-[219px] rounded-[23.53px] object-cover"
        />
        <div
            className={`hand-icon absolute top-4 right-5 p-2 rounded-full shadow cursor-pointer ${
            isHandIconActive ? "bg-greenhand" : "bg-white"
            }`}
           onClick={toggleHandIcon}
          >
             <FaHandPaper className={isHandIconActive ? "text-white" : "text-greenhand"} />
         </div>

      </div>
      <div className="event-info border border-gray-300 rounded-[20px] p-[24px] shadow-sm w-full md:w-[772px] h-[219px]">
        <div className="event-details flex items-center gap-2 text-[16px] leading-[18.75px] text-gray-600">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-600" />
            {location}
          </span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <h3 className="event-title text-[24px] leading-[28.13px] font-semibold text-black mt-[20px]">
          {title}
        </h3>
        <p className="event-description mt-[14px] text-[18px] leading-[21.09px] text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};
export default EventCard;