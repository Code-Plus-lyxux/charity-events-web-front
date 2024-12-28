import React from 'react';
import { FaMapMarkerAlt, FaCalendarPlus } from 'react-icons/fa';
// import './Home.css';

const EventCard = ({ imageSrc, location, date, title, description }) => {
  return (
    <div className="event-card-container flex w-full ml-[148px] mt-10 gap-[61px] flex-wrap md:flex-nowrap">
      <div>
        <img
          src={imageSrc}
          alt="Event"
          className="event-image w-[390px] h-[219px] rounded-[23.53px] object-cover"
        />
      </div>
      <div className="event-info border border-gray-300 rounded-[20px] p-[24px] shadow-sm w-[772px] h-[219px]">
        <div className="event-details flex items-center gap-2 text-[16px] leading-[18.75px] text-gray-500">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-400" />
            {location}
          </span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <h3 className="event-title text-[24px] leading-[28.13px] font-semibold text-gray-800 mt-[20px]">
          {title}
        </h3>
        <p className="event-description mt-[14px] text-[18px] leading-[21.09px] text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const events = [
    {
      imageSrc: '/images/dog home.jpeg',
      location: 'Haven Paws Animal Shelter, Kandy',
      date: '21 December 2024',
      title: 'Support Animal Welfare: Spend a Day Volunteering at the Local Shelter and Make a Difference',
      description: "Join us for a meaningful day at the local animal shelter in Kandy, where you'll have the opportunity to support animal welfare by directly engaging with the animals in need.",
    },
    {
      imageSrc: '/images/dog home.jpeg',
      location: 'Haven Paws Animal Shelter, Kandy',
      date: '21 December 2024',
      title: 'Support Animal Welfare: Spend a Day Volunteering at the Local Shelter and Make a Difference',
      description: "Join us for a meaningful day at the local animal shelter in Kandy, where you'll have the opportunity to support animal welfare by directly engaging with the animals in need.",
    },
    {
      imageSrc: '/images/dog home.jpeg',
      location: 'Haven Paws Animal Shelter, Kandy',
      date: '21 December 2024',
      title: 'Support Animal Welfare: Spend a Day Volunteering at the Local Shelter and Make a Difference',
      description: "Join us for a meaningful day at the local animal shelter in Kandy, where you'll have the opportunity to support animal welfare by directly engaging with the animals in need.",
    },
  ];

  return (
    <div className="home-page-container overflow-x-hidden">
      <section className="hero-section w-full max-w-full h-[1001px]">
        <div className="hero-bg bg-cover" style={{ backgroundImage: 'url(/images/GridHero.png)' }}>
          <div className="hero-text-container flex justify-center">
          <div className="hero-text-container flex justify-center">
           <div className="hero-heading p-5 font-roboto font-bold text-[56px] leading-[72px] text-center mt-24 text-black h-36 w-full max-w-4xl">
            <h1>Be the Change You Wish to See Volunteer Today!</h1>
            </div>
          </div>
          </div>
          <div className="hero-subheading p-0 font-roboto font-normal text-xl leading-7 text-center mt-10 text-gray-600">
            <h2 className="first-h2">Discover impactful events near you, connect with your</h2>
            <h2 className="second-h2">community, and make a difference where it matters most.</h2>
          </div>
        </div>
        <button className="host-event-btn bg-greenbutton text-white font-roboto font-medium text-lg leading-9 text-center py-4 px-8 mx-auto block border-none rounded-full mt-6 w-[222px] h-[70px]">
          Host your event
        </button>
        <div className="image-gallery flex justify-center items-end mt-5 gap-6 w-full max-w-5xl h-132 mx-auto">
          <img
            src="/images/Frame 11.png"
            alt="Image 1"
            className="gallery-image w-72 h-132 rounded-lg"
          />
          <img
            src="/images/Frame 12.jpg"
            alt="Image 2"
            className="gallery-image w-72 h-112 rounded-lg"
          />
          <img
            src="/images/Frame 13.png"
            alt="Image 3"
            className="gallery-image w-72 h-112 rounded-lg"
          />
          <img
            src="/images/Frame 14.png"
            alt="Image 4"
            className="gallery-image w-72 h-132 rounded-lg"
          />
        </div>
      </section>
      <section className="events-section w-full max-w-full h-[1046px]">
        <div>
          <div>
            <h3 className="location-title text-lg leading-6 font-roboto text-gray-600 flex items-center w-40 h-5 mt-24 ml-[148px]">
              <FaMapMarkerAlt className="text-gray-600 mr-2" />
              Kandy, Sri Lanka
            </h3>
          </div>
          <div className="events-header w-full max-w-full h-[723px] mt-0 ml-[148px]">
            <h2 className="events-heading font-roboto font-bold text-[40px] leading-[72px] text-black">
              Upcoming Events in your area
            </h2>
          </div>
          <div className="explore-button-container w-44 h-14 mt-[-725px]">
            <button className="explore-events-btn bg-greenbutton text-white font-roboto font-medium text-[16px] leading-[32px] text-center py-1.5 px-4 border-none rounded-[50px] w-[174px] h-[54px] ml-[1199px]">
              Explore Events
            </button>
          </div>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>


    </div>
  );
};

export default HomePage;
