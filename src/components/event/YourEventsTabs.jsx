'use client';
import { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import UserEventCard from "@/components/user/UserEventCard";
import { useRouter } from "next/navigation";

export default function YourEventsTab({ user }) {
    const [eventStates, setEventStates] = useState({});
    const [allEvents, setAllEvents] = useState({
        eventsCreated: [],
        eventsAttending: [],
        eventsAttended: [],
    });

    const router = useRouter();

    useEffect(() => {
        if (user) {
            const categorizedEvents = {
                eventsCreated: user.eventsCreated || [],
                eventsAttending: user.eventsAttending || [],
                eventsAttended: user.eventsAttended || [],
            };

            setAllEvents(categorizedEvents);
        }
    }, [user]);

    const toggleGoing = (id) => {
        setEventStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className="flex justify-center px-4">
            <Tabs.Root className="flex w-full flex-col" defaultValue="tab1">
                <Tabs.List className="flex shrink-0" aria-label="Event Details and Media">
                    <Tabs.Trigger
                        className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:border-b-[3px] data-[state=active]:border-mint-500"
                        value="tab1"
                    >
                        Hosting
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:border-b-[3px] data-[state=active]:border-mint-500"
                        value="tab2"
                    >
                        Upcoming Events
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:border-b-[3px] data-[state=active]:border-mint-500"
                        value="tab3"
                    >
                        Past Events
                    </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-mint-500" value="tab1">
                    <div>
                        {allEvents.eventsCreated.length === 0 ? (
                            <p>No events created</p>
                        ) : (
                            allEvents.eventsCreated.map((event) => {
                                return (
                                    <div
                                        key={event._id.$oid}
                                        className="hover:cursor-pointer"
                                        onClick={() => router.push(`/your-events/${event._id.$oid}`)}
                                    >
                                        <UserEventCard
                                            isGoing={eventStates[event._id.$oid]}
                                            toggleGoing={toggleGoing}
                                            id={event._id.$oid}
                                            title={event.eventName}
                                            date={new Date(event.startDate).toLocaleDateString()}
                                            location={event.location}
                                            imageSrc={event.backgroundImage}
                                            description={event.aboutEvent}
                                            
                                        />
                                    </div>
                                );
                            })
                        )}
                    </div>
                </Tabs.Content>

                <Tabs.Content className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-mint-500" value="tab2">
                    <div>
                        {allEvents.eventsAttending.length === 0 ? (
                            <p>No upcoming events</p>
                        ) : (
                            allEvents.eventsAttending.map((event) => {
                                return (
                                    <div
                                        key={event._id.$oid}
                                        className="hover:cursor-pointer"
                                        onClick={() => router.push(`/your-events/${event._id.$oid}`)}
                                    >
                                        <UserEventCard
                                            isGoing={eventStates[event._id.$oid]}
                                            toggleGoing={toggleGoing}
                                            id={event._id.$oid}
                                            title={event.eventName}
                                            date={new Date(event.startDate).toLocaleDateString()}
                                            location={event.location}
                                            imageSrc={event.backgroundImage}
                                            description={event.aboutEvent}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </div>
                </Tabs.Content>

                <Tabs.Content className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-mint-500" value="tab3">
                    <div>
                        {allEvents.eventsAttended.length === 0 ? (
                            <p>No past events</p>
                        ) : (
                            allEvents.eventsAttended.map((event) => {
                                return (
                                    <div
                                        key={event._id.$oid}
                                        className="hover:cursor-pointer"
                                        onClick={() => router.push(`/your-events/${event._id.$oid}`)}
                                    >
                                        <UserEventCard
                                            isGoing={eventStates[event._id.$oid]}
                                            toggleGoing={toggleGoing}
                                            id={event._id.$oid}
                                            title={event.eventName}
                                            date={new Date(event.startDate).toLocaleDateString()}
                                            location={event.location}
                                            imageSrc={event.backgroundImage}
                                            description={event.aboutEvent}
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

