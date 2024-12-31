import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoHandLeft } from "react-icons/io5";
import { useState } from "react";
export default function UserEventCard({
    id,
    title,
    location,
    date,
    time,
    imageSrc,
    description,
    status,
}) {
    const [isGoing, setIsGoing] = useState(false);
    const handleOnClick = (id) => {
        console.log("clicked event ID: ", id); //add changes here
        setIsGoing(!isGoing);
    };

    return (
        <>
            <div className="flex flex-col lg:hidden border-2 border-slate-200 rounded-2xl p-4 mb-8">
                <p className="text-xl font-bold">{title}</p>
                <div className="flex">
                    <MapPin />
                    <p className="ml-2">{location}</p>
                    <CalendarDays className="ml-16" />
                    <p className="ml-2">{date}</p>
                </div>
                <div className="py-4">
                    <div className="relative">
                        <Image
                            src={imageSrc}
                            alt="Event Image"
                            width={500}
                            height={500}
                            className="w-full rounded-3xl"
                        />
                        <div className="absolute top-4 right-4">
                            <Button
                                onClick={() => handleOnClick(id)}
                                className={
                                    isGoing
                                        ? "rounded-full py-6 text-lg hover:text-white bg-mint-500 hover:bg-red-500 border-mint-500 border-2 hover:border-white"
                                        : "rounded-full py-6 text-lg text-mint-500 hover:bg-mint-500 bg-white border-white border-2 hover:text-white hover:border-mint-500"
                                }
                                // className="rounded-full py-6 text-lg text-mint-500 hover:bg-mint-500 bg-white border-white border-2 hover:text-white hover:border-mint-500"
                            >
                                <IoHandLeft
                                    style={{ width: "20px", height: "20px" }}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
                <p>{description}</p>
            </div>
            {/* // for large screens */}
            <div className="lg:flex hidden mb-8">
                <div className="relative min-w-[500px]">
                    <Image
                        src={imageSrc}
                        alt="Event Image"
                        width={500}
                        height={500}
                        className="w-full rounded-3xl max-h-[500px] object-cover"
                    />
                    <div className="absolute top-4 right-4">
                        <Button
                            onClick={() => handleOnClick(id)}
                            className="rounded-full py-6 text-lg text-mint-500 hover:bg-mint-500 bg-white border-white border-2 hover:text-white hover:border-mint-500"
                        >
                            <IoHandLeft
                                style={{ width: "20px", height: "20px" }}
                            />
                        </Button>
                    </div>
                </div>
                <div className="ml-8 p-4 border-2 border-slate-200 rounded-2xl">
                    <div className="flex ">
                        <MapPin />
                        <p className="ml-2">{location}</p>
                        <CalendarDays className="ml-16" />
                        <p className="ml-2">{date}</p>
                    </div>
                    <p className="px-2 text-xl font-bold my-3 ">{title}</p>
                    <p className="px-2">{description}</p>
                </div>
            </div>
        </>
    );
}
