'use client'
import {useState} from 'react';
import { FaMapMarkerAlt, FaCalendarPlus, FaHandPaper } from 'react-icons/fa';
import './Home.css';


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
             <FaHandPaper className={isHandIconActive ? "text-white" : "text-gray-600"} />
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
            <div className="hero-heading p-5 font-roboto font-bold text-[56px] leading-[72px] text-center mt-24 text-black h-36 w-full max-w-4xl">
              <h1>Be the Change You Wish to See Volunteer Today!</h1>
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
      <section className="events-section w-full max-w-full h-[1046px] flex justify-center items-center mx-auto">
        <div>
          <div>
            <h3 className="location-title text-lg leading-6 font-roboto text-gray-600 flex items-center w-40 h-5 mt-24 mr-auto">
              <FaMapMarkerAlt className="text-gray-600 mr-2" />
              Kandy, Sri Lanka
            </h3>
          </div>
          <div className="events-header w-full max-w-full h-[723px] mt-0 ">
            <h2 className="events-heading font-roboto font-bold text-[40px] leading-[72px] text-black mx-auto">
              Upcoming Events in your area
            </h2>
          </div>
          <div className="explore-button-container w-44 h-14 mt-[-725px] ">
            <button className="explore-events-btn bg-greenbutton text-white font-roboto font-medium text-[16px] leading-[32px] text-center py-1.5 px-4 border-none rounded-[50px] w-[174px] h-[54px] ml-[1048px]">
              Explore Events
            </button>
          </div>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>

      <section className="whatwedo-section w-full max-w-full h-[758px] mt-[108px]">
        <div className="whatwedo-header text-center mt-[10px] gap-[24px] font-roboto w-[1016px] h-[172px] align-center mx-auto">
          <h2 className="whatwedo-title text-gray-500 text-[18px] leading-[21.09px] font-bold">
            What we do
          </h2>
          <h1 className="whatwedo-main-title text-[40px] leading-[46.88px] font-bold mt-2">
            Connect, Contribute, and Create Change Together
          </h1>
          <p className="whatwedo-description text-gray-600 mt-4 font-[400] text-[24px] leading-[28.13px]">
            We help you host impactful volunteer events and find opportunities to contribute to meaningful
            causes in your community.
          </p>
        </div>

        <div className="whatwedo-grid-container flex justify-center items-center mt-8">
          <div className="whatwedo-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="whatwedo-card bg-green-100 p-8 rounded-[20px] text-center w-[288px] h-[276px]">
              <div className="whatwedo-icon-container w-[24px] h-[24px] mx-auto mt-[20px] text-green-500">
                <FaCalendarPlus className="whatwedo-icon w-[24px] h-[24px]" />
              </div>
              <h3 className="whatwedo-card-title font-bold text-[20px] leading-[23.44px] mb-2 mt-1">Host Volunteer Events</h3>
              <p className="whatwedo-card-description text-gray-600 text-[16px] font-[400] leading-[18.75px] w-[240px] mx-auto">
                Whether you're passionate about the environment, animal welfare, or social causes, our platform
                makes it simple for you to create and host volunteer events. Engage your community, raise awareness,
                and drive change.
              </p>
            </div>

            <div className="whatwedo-card bg-green-100 p-8 rounded-[20px] text-center w-[288px] h-[276px]">
              <div className="whatwedo-icon-container w-[24px] h-[24px] mx-auto mt-[20px] text-green-500">
                <FaCalendarPlus className="whatwedo-icon w-[24px] h-[24px]" />
              </div>
              <h3 className="whatwedo-card-title font-bold text-lg mb-2">Join Events Near You</h3>
              <p className="whatwedo-card-description text-gray-600 text-[16px] font-[400] leading-[18.75px] w-[240px] mx-auto">
                Looking for ways to give back? Browse local volunteer opportunities and join events that match your interests. Every action counts in building a better community.
              </p>
            </div>

            <div className="whatwedo-card bg-green-100 p-8 rounded-[20px] text-center w-[288px] h-[276px]">
              <div className="whatwedo-icon-container w-[24px] h-[24px] mx-auto mt-[20px] text-green-500">
                <FaCalendarPlus className="whatwedo-icon w-[24px] h-[24px]" />
              </div>
              <h3 className="whatwedo-card-title font-bold text-lg mb-2">Impactful Connections</h3>
              <p className="whatwedo-card-description text-gray-600 text-[16px] font-[400] leading-[18.75px] w-[240px] mx-auto">
                Volunteerism connects people. By hosting or joining events, you meet like-minded individuals who share your vision for a better world.
              </p>
            </div>

            <div className="whatwedo-card bg-green-100 p-8 rounded-[20px] text-center w-[288px] h-[276px]">
              <div className="whatwedo-icon-container w-[24px] h-[24px] mx-auto mt-[20px] text-green-500">
                <FaCalendarPlus className="whatwedo-icon w-[24px] h-[24px]" />
              </div>
              <h3 className="whatwedo-card-title font-bold text-lg mb-2">Track Your Contributions</h3>
              <p className="whatwedo-card-description text-gray-600 text-[16px] font-[400] leading-[18.75px] w-[240px] mx-auto">
                See the difference you’re making! Our platform allows you to track the events you've hosted or participated in and share your experiences with others.
              </p>
            </div>
          </div>
        </div>

        <div className="whatwedo-button-container text-center mt-8 w-[222px] h-[70px] mx-auto">
          <button className="whatwedo-button w-[222px] h-[70px] bg-greenbutton text-white font-roboto font-medium text-[22px] leading-[38px] text-center py-4 px-8 rounded-[50px]">
            <span>Host Your Event</span>
          </button>
        </div>
      </section>

      <section className="contact-section w-full max-w-full h-[711px] mt-[108px]">
     <div className="contact-header text-center lg:text-left w-full lg:w-[1016px] mx-auto mt-[42px] gap-[24px] flex flex-col lg:flex-row lg:items-center">
    <div className="contact-image mt-8 lg:mt-0 lg:w-[50%] flex justify-center lg:justify-start">
      <img
        src="/images/Frame 77.png"
        alt="contact"
        className="gallery-image w-[496px] h-[547px] rounded-lg"
      />
    </div>
    <div className="contact-text w-full lg:w-[50%]">
      <h2 className="contact-title text-gray-500 text-[18px] leading-[21.09px] font-bold">
        Contact Us
      </h2>
      <h1 className="contact-main-title text-[40px] leading-[46.88px] font-bold mt-2">
        Get in Touch
      </h1>
      <p className="contact-description text-gray-600 mt-2 font-[400] text-[24px] leading-[28.13px]">
        We’re here to help! Have a question or feedback? Reach out to us anytime
      </p>
      <h1 className="contact-send-title text-[30px] leading-[46.88px] font-bold mt-6">
        Send us Your Message!
      </h1>
      <input
        type="email"
        placeholder="Your Email"
        className="email-input text-[18px] p-[12px] w-full lg:w-[620px] mt-4 border border-gray-300 rounded-md"
      />
      <textarea
        placeholder="Your Message"
        className="message-input text-[18px] p-[12px] w-full lg:w-[620px] mt-4 border border-gray-300 rounded-md h-[150px] resize-y"
      ></textarea>
      <div>
        <button className="send-message-btn bg-greenbutton text-white font-roboto font-medium text-[16px] leading-[32px] text-center py-1.5 px-4 border-none rounded-[50px] w-full lg:w-[174px] h-[54px] mt-4">
          Send Message
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;