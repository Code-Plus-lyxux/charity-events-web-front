"use client";
import * as Tabs from "@radix-ui/react-tabs";
import AllEventsIcon from "../icon/allEventsIcon";
import { IoHandLeft } from "react-icons/io5";
import UserEventCard from "./userEventCard";

export default function UserEvents({ user }) {
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
                                imageSrc,
                                title,
                                date,
                                location,
                                description,
                            } = event;
                            return (
                                <div key={event.id}>
                                    <UserEventCard
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
                    <p className="mb-5 text-[15px] leading-normal text-mauve11">
                        Add media here
                    </p>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
}
