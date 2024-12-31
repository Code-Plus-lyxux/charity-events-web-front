"use client";
import GearIcon from "../icon/gearIcon";
import Image from "next/image";
export default function ProfileCard({ user }) {
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

    return (
        <div className="flex flex-col">
            <div
                className="self-end py-3 px-4"
                onClick={() => console.log("href to profile settings page")}
            >
                <GearIcon className="self-end hover:cursor-pointer hover:stroke-mint-500" />
            </div>
            <Image
                src={profilePicture}
                alt={name}
                width={100}
                height={100}
                className="rounded-full flex self-center"
            />
            <p className="text-center font-bold pt-2">{name}</p>
            <p className="text-center text-sm">{email}</p>
        </div>
    );
}
