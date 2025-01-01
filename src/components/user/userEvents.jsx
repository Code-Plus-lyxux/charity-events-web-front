"use client";
import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import AllEventsIcon from "@/components/icon/allEventsIcon";
import { IoHandLeft } from "react-icons/io5";
import UserEventCard from "@/components/user/userEventCard";

export default function UserEvents({ user }) {
    const [eventStates, setEventStates] = useState({
        1: false,
        2: false,
        3: false,
    });

    const toggleGoing = (id) => {
        setEventStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const {
        id,
        name,
        email,
        profilePicture,
        bio,
        eventsAttended,
        eventsCreated,
        eventsAttending,
    } = user;

    // const allEvents = eventsAttended.concat(eventsAttending);

    const allEvents = [
        {
            id: 1,
            title: `Support Animal Welfare: Spend a Day Volunteering at the Local 
        Shelter and Make a Difference`,
            location: "Haven Paws Animal Shelter, Kandy",
            date: "21 December 2024",
            time: "09:00 AM to 04:00 PM",
            imageSrc: "/images/dog home.jpeg",
            status: "Upcoming",
            attendeeCount: 500,
            description: [
                `Join us for a meaningful day at the local animal shelter 
        in Kandy, where you'll have the opportunity to support animal welfare 
        by directly engaging with the animals in need. Spend time feeding, 
        cleaning, and playing with the sheltered animals to help them feel loved 
        and cared for. Your efforts will contribute to the overall well-being 
        of the animals and help raise awareness about the importance of adoption.`,
                `Whether you're an animal enthusiast or someone looking to give back, 
        this event will make a lasting impact on the lives of many animals. 
        Together, we can make a real difference in the community and help create 
        a brighter future for these deserving animals.`,
                `By volunteering, you'll also have the chance to connect with other 
        like-minded individuals who share your passion for animal welfare. 
        It's an excellent opportunity to learn more about the needs of animals 
        in our community while making new friends and strengthening the bond 
        we all share for a cause greater than ourselves. Your presence matters, 
        and together, we can create lasting change.`,
            ],
            host: {
                name: "Haven Paws Animal Shelter",
                avatar: "/host-avatar.png",
            },
            comments: [
                {
                    author: "Lucifer Barret",
                    avatar: "/lucifer-barret.png",
                    content: `Such an amazing event! Excited to participate and 
                contribute. Thank you for organizing this. Let's make a positive 
                impact together!`,
                },
                {
                    author: "Ayesha Perera",
                    avatar: "/ayesha-perera.png",
                    content: `This event is a perfect opportunity to give back to 
                the community while also spending time with like-minded people. 
                Excited to participate!`,
                },
                {
                    author: "Nuwan Silva",
                    avatar: "/nuwan-silva.png",
                    content: `I'm so grateful for events like this that bring people 
                together to support a good cause. Can't wait to join in!`,
                },
                {
                    author: "Kavindi Jayasekara",
                    avatar: "/kavindi-jayasekara.png",
                    content: `I'm so excited to participate in this event. It's a 
                great opportunity to give back to the community and also learn 
                more about animal welfare.`,
                },
                {
                    author: "Amal Fernando",
                    avatar: "/amal-fernando.png",
                    content: `This event is a perfect way to spend a day while doing 
                something meaningful. Can't wait to join in and make a difference!`,
                },
            ],
        },
        {
            id: 2,
            title: `Help Reduce Waste: Join the Clean-up Initiative at the Kandy Lake`,
            location: "Kandy Lake, Kandy",
            date: "15 January 2024",
            time: "08:00 AM to 12:00 PM",
            imageSrc: "/images/frame 11.png",
            status: "Upcoming",
            attendeeCount: 200,
            description: [
                `Join us for a morning of cleaning up the Kandy Lake! We'll be providing gloves, trash bags, and water, so all you need to bring is your enthusiasm and energy. We'll be picking up trash and debris from the lake and surrounding areas, and making a real difference in our community.`,
                `This event is a great opportunity to meet like-minded people who care about the environment and want to make a positive impact. We'll also be providing educational materials and resources on how to reduce waste and live a more sustainable lifestyle.`,
            ],
            host: {
                name: "Kandy Lake Clean-up Initiative",
                avatar: "/kavindi-jayasekara.png",
            },
            comments: [
                {
                    author: "Ayesha Perera",
                    avatar: "/ayesha-perera.png",
                    content: `I'm so excited to participate in this event! It's a great way to give back to the community and make a real difference. Thanks for organizing this!`,
                },
                {
                    author: "Amal Fernando",
                    avatar: "/amal-fernando.png",
                    content: `This event is a great opportunity to learn more about waste reduction and sustainability. Can't wait to participate!`,
                },
            ],
        },
    ];

    return (
        <div className="flex justify-center px-4">
            <Tabs.Root className="flex w-full flex-col" defaultValue="tab1">
                <Tabs.List
                    className="flex shrink-0"
                    aria-label="Event Details and Media"
                >
                    <Tabs.Trigger
                        className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:border-b-[3px] data-[state=active]:border-mint-500"
                        value="tab1"
                    >
                        <AllEventsIcon />
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:border-b-[3px] data-[state=active]:border-mint-500"
                        value="tab2"
                    >
                        <IoHandLeft style={{ width: "20px", height: "20px" }} />
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                    className="grow rounded-b-md bg-white p-5 outline-none "
                    value="tab1"
                >
                    <div className="flex flex-col mb-5">
                        {allEvents.map((event, index) => {
                            const {
                                id,
                                imageSrc,
                                title,
                                date,
                                location,
                                description,
                            } = event;
                            return (
                                <div key={id}>
                                    <UserEventCard
                                        isGoing={eventStates[id]}
                                        toggleGoing={toggleGoing}
                                        id={id}
                                        title={title}
                                        date={date}
                                        location={location}
                                        description={description}
                                        imageSrc={imageSrc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Tabs.Content>
                <Tabs.Content
                    className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-mint-500"
                    value="tab2"
                >
                    <div>
                        {/* Add going events */}
                        {eventsAttending.length === 0 ? (
                            <p>No upcoming events found</p>
                        ) : (
                            eventsAttending.map((id, index) => {
                                //pull from backend db and fill the events
                                return (
                                    //ignore this section, this is for frontend demo only
                                    <div key={`user-event-${id}`}>
                                        <UserEventCard
                                            isGoing={eventStates[id]}
                                            toggleGoing={toggleGoing}
                                            id={id}
                                            title={allEvents[index].title}
                                            date={allEvents[index].date}
                                            location={allEvents[index].location}
                                            description={
                                                allEvents[index].description
                                            }
                                            imageSrc={allEvents[index].imageSrc}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
}
