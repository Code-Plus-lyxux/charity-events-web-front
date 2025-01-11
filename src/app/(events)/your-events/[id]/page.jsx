"use client";
import HeroCardEditable from "@/components/event/HeroCardEditable";
import EventTabsEditable from "@/components/event/EventTabsEditable";
import HostCard from "@/components/event/HostCard";
import ShareBar from "@/components/event/ShareBar";
import { CommentWithIcon } from "@/components/ui/AddComment";
import CommentCard from "@/components/ui/CommentCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import Spinner from "@/components/ui/Spinner";

export default function HostedEventPage({ params }) {
    const id = useParams().id;
    const router = useRouter();

    const [refreshKey, setRefreshKey] = useState(0);

    const [eventData, setEventData] = useState(null);

    const [eventHost, setEventHost] = useState({
        id,
        userId: "1",
        eventName: `Support Animal Welfare`,
        location: "Kandy",
        startDate: "21 December 2024",
        status: "Upcoming",
        attendUsers: ["2", "3", "4"],
        aboutEvent:
            "Join us for a meaningful day at the local animal shelter...",
        comments: [
            {
                userId: "2",
                comment: "Such an amazing event!",
                createdAt: "22 December 2024",
            },
            {
                userId: "3",
                comment: "This event is a perfect opportunity",
                createdAt: "22 December 2024",
            },
            {
                userId: "4",
                comment: "I'm so grateful for events like thi",
                createdAt: "22 December 2024",
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("userToken");
            if (!token) {
                router.push("/");
                return;
            }
            const tokenUserId = jwt.decode(token).id;
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/events/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setEventData(response.data);

                const hostResponse = await axios.get(
                    `http://localhost:5000/api/user/${response.data.userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "userToken"
                            )}`,
                        },
                    }
                );

                if (tokenUserId !== response.data.userId) {
                    router.push("/");
                    return;
                }

                setEventHost(hostResponse.data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, [refreshKey]);

    return (
        <>
            <section>
                {/* hero section */}
                <HeroCardEditable event={eventData}></HeroCardEditable>
            </section>

            <main>
                {/* main content */}
                <EventTabsEditable event={eventData}></EventTabsEditable>
            </main>

            <section>
                {/* host details section */}
                <HostCard host={eventHost}></HostCard>
            </section>

            <section>
                {/* share bar section */}
                <ShareBar
                    setRefreshKey={setRefreshKey}
                    event={eventData}
                ></ShareBar>
            </section>

            <div className="px-9 mt-9">
                {/* add a comment */}
                <CommentWithIcon eventId={id} setRefreshKey={setRefreshKey} />
            </div>

            <section className="px-9 mt-5">
                {/* comment section */}
                <div className="flex">
                    <p className="font-semibold">Comments</p>
                    <p className="ml-5 bg-mint-500 px-2 text-white rounded-full">
                        {eventData?.comments && eventData.comments?.length}
                    </p>
                </div>
                <div className="flex flex-col">
                    {eventData?.comments &&
                        eventData.comments?.map((comment, index) => (
                            <CommentCard
                                key={index}
                                comment={comment}
                            ></CommentCard>
                        ))}
                </div>
            </section>
        </>
    );
}
