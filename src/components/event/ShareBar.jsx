"use client";
import { Button } from "@/components/ui/Button";
import { IoHandLeft } from "react-icons/io5";
import { CircleX } from "lucide-react";
import ShareIcon from "@/components/icon/ShareIcon";
import { useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
export default function ShareBar() {
    const [isGoing, setIsGoing] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const { id } = useParams();

    async function handleGoingToggle() {
        try {
            //prev state:isGoing false means user marked it from not attending to attending
            //after clicking next state will be true
            if (!isGoing) {
                const response = await axios.post(
                    `http://localhost:5001/api/events/${id}/attend`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "userToken"
                            )}`,
                        },
                    }
                );
                if (response.status === 200) {
                    setIsGoing(true);
                    console.log("Event marked: attending successfully");
                }
            } else {
                const response = await axios.delete(
                    `http://localhost:5001/api/events/${id}/attend`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "userToken"
                            )}`,
                        },
                    }
                );
                if (response.status === 200) {
                    setIsGoing(false);
                    console.log("Event marked: not attending successfully");
                }
            }
        } catch (error) {
            console.error("Error toggling attendance", error);
        }
    }

    return (
        <div className="flex px-9 mt-8 gap-5">
            <Button
                onClick={handleGoingToggle}
                variant="outline"
                className={`w-full rounded-3xl py-6 text-lg ${
                    isGoing
                        ? `${
                              isHovering
                                  ? "bg-red-500 border-red-500 text-white hover:bg-red-600 hover:text-white"
                                  : "bg-mint-500 border-mint-500 text-white"
                          }`
                        : "bg-white border-mint-500 hover:text-mint-500"
                } border-2`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {isGoing && isHovering ? "I'm Out!" : "I'm In!"}
                <IoHandLeft
                    style={{
                        width: "20px",
                        height: "20px",
                        color: isGoing ? "white" : "currentColor",
                        display: isGoing && isHovering ? "none" : "block",
                    }}
                />
                <CircleX
                    style={{
                        width: "20px",
                        height: "20px",
                        color: "white",
                        display: isGoing && isHovering ? "block" : "none",
                    }}
                />
            </Button>
            <Button
                onClick={() => console.log("I'm sharing this event!")}
                variant="outline"
                className="w-2/5 lg:w-full rounded-3xl px-4 py-6 text-lg bg-white border-mint-500 border-2 hover:text-mint-500 shrink"
            >
                Share
                <ShareIcon strokeWidth={2} size={42} />
            </Button>
        </div>
    );
}
