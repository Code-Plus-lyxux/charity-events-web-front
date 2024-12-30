import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CalendarDays, MapPin, ListFilter, Image } from "lucide-react";

export default function EventTabs({ event }) {
    return (
        <div className="flex justify-center px-4">
            <Tabs.Root className="flex w-full flex-col " defaultValue="tab1">
                <Tabs.List
                    className="flex shrink-0"
                    aria-label="Event Details and Media"
                >
                    <Tabs.Trigger
                        className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:border-b-[3px] data-[state=active]:border-mint-500"
                        value="tab1"
                    >
                        <ListFilter />
                        <p className="ml-2 text-base">Event Details</p>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:border-b-[3px] data-[state=active]:border-mint-500"
                        value="tab2"
                    >
                        <Image />
                        <p className="ml-2 text-base">Media</p>
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                    className="grow rounded-b-md bg-white p-5 outline-none "
                    value="tab1"
                >
                    <div className="flex mb-5 items-center">
                        <CalendarDays />
                        <p className="ml-5  text-base leading-normal ">
                            {event.date} at {event.time}
                        </p>
                    </div>
                    <div className="flex mb-5 items-center">
                        <MapPin />
                        <p className="ml-5  text-base leading-normal ">
                            {event.location}
                        </p>
                    </div>
                    <p className="mb-5 text-2xl leading-normal font-bold">
                        About the event
                    </p>
                    {event.description.map((chapter, index) => (
                        <p key={`chapter-${index}`} className="mb-5 text-base">
                            {chapter}
                        </p>
                    ))}
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
