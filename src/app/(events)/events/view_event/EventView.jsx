"use client";
import HeroCard from "@/components/event/HeroCard";
import EventTabs from "@/components/event/EventTabs";
import HostCard from "@/components/event/HostCard";
import ShareBar from "@/components/event/ShareBar";
import { CommentWithIcon } from "@/components/ui/AddComment";
import CommentCard from "@/components/ui/CommentCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/Spinner";
import jwt from "jsonwebtoken";

export default function EventView() {
    // Get the search params directly from window
    const [id, setId] = useState(null);
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [eventData, setEventData] = useState(null);
    const [eventHost, setEventHost] = useState(null);

    // Effect to get ID from URL
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const eventId = searchParams.get("id");
        setId(eventId);
    }, []);

    // Effect to fetch data
    useEffect(() => {
        const fetchData = async () => {
            if (!id) return;
            
            try {
                setIsLoading(true);
                const token = localStorage.getItem("userToken");

                if (token) {
                    try {
                        const userId = jwt.decode(token).id;
                        const userResponse = await axios.get(
                            `${process.env.NEXT_PUBLIC_API_SERVER_URL}/user/${userId}`,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        );
                        const userData = userResponse.data;
                        setUser(userData);
                    } catch (userError) {
                        console.error("Error fetching user:", userError);
                    }
                }

                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/events/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "userToken"
                            )}`,
                        },
                    }
                );
                setEventData(response.data);

                const hostResponse = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/user/${response.data.userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "userToken"
                            )}`,
                        },
                    }
                );
                setEventHost(hostResponse.data);
            } catch (error) {
                console.error("Error:", error);
                // Handle error appropriately - maybe show error message
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [refreshKey, id]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <section>
                {/* hero section */}
                <HeroCard event={eventData}></HeroCard>
            </section>

            <main>
                {/* main content */}
                <EventTabs event={eventData}></EventTabs>
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