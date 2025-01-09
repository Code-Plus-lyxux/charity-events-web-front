"use client";
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

    const resizeImage = (url, width, height) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = url;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL("image/jpeg"));
            };
        });
    };

    useEffect(() => {
        if (user) {
            const resizeEventImages = async (events) => {
                return Promise.all(
                    events.map(async (event) => {
                        if (event.backgroundImage) {
                            event.backgroundImage = await resizeImage(
                                event.backgroundImage,
                                410,
                                265
                            );
                        }
                        return event;
                    })
                );
            };

            const categorizeAndResizeEvents = async () => {
                const categorizedEvents = {
                    eventsCreated: await resizeEventImages(
                        user.eventsCreated || []
                    ),
                    eventsAttending: await resizeEventImages(
                        user.eventsAttending || []
                    ),
                    eventsAttended: await resizeEventImages(
                        user.eventsAttended || []
                    ),
                };

                setAllEvents(categorizedEvents);
            };

            categorizeAndResizeEvents();
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
                <Tabs.List
                    className="flex shrink-0"
                    aria-label="Event Details and Media"
                >
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

                <Tabs.Content
                    className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-mint-500"
                    value="tab1"
                >
                    <div>
                        {allEvents.eventsCreated.length === 0 ? (
                            <p>No events created</p>
                        ) : (
                            allEvents.eventsCreated.map((event) => {
                                return (
                                    <div
                                        key={event._id}
                                        className="hover:cursor-pointer"
                                        onClick={() =>
                                            router.push(
                                                `/your-events/${event._id}`
                                            )
                                        }
                                    >
                                        <UserEventCard
                                            isGoing={eventStates[event._id]}
                                            toggleGoing={toggleGoing}
                                            id={event._id}
                                            title={event.eventName}
                                            date={new Date(
                                                event.startDate
                                            ).toLocaleDateString()}
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

                <Tabs.Content
                    className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-mint-500"
                    value="tab2"
                >
                    <div>
                        {allEvents.eventsAttending.length === 0 ? (
                            <p>No upcoming events</p>
                        ) : (
                            allEvents.eventsAttending.map((event) => {
                                return (
                                    <div
                                        key={event._id}
                                        className="hover:cursor-pointer"
                                        onClick={() =>
                                            router.push(`/events/${event._id}`)
                                        }
                                    >
                                        <UserEventCard
                                            isGoing={eventStates[event._id]}
                                            toggleGoing={toggleGoing}
                                            id={event._id}
                                            title={event.eventName}
                                            date={new Date(
                                                event.startDate
                                            ).toLocaleDateString()}
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

                <Tabs.Content
                    className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-mint-500"
                    value="tab3"
                >
                    <div>
                        {allEvents.eventsAttended.length === 0 ? (
                            <p>No past events</p>
                        ) : (
                            allEvents.eventsAttended.map((event) => {
                                return (
                                    <div
                                        key={event._id}
                                        className="hover:cursor-pointer"
                                        onClick={() =>
                                            router.push(`/events/${event._id}`)
                                        }
                                    >
                                        <UserEventCard
                                            isGoing={eventStates[event._id]}
                                            toggleGoing={toggleGoing}
                                            id={event._id}
                                            title={event.eventName}
                                            date={new Date(
                                                event.startDate
                                            ).toLocaleDateString()}
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
