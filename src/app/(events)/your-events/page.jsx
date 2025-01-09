'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import YourEventsCard from "@/components/event/YourEventsCard";
import YourEventsTabs from "@/components/event/YourEventsTabs";
import { useRouter } from "next/navigation";

export default function YourEvents() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (!token) {
            router.push("/");
        }
    }, [router]);




    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Get user token from localStorage
                const token = localStorage.getItem("userToken");
                if (!token) {
                    throw new Error("User token not found");
                }

                // Decode token to get user ID
                let userId;
                try {
                    userId = JSON.parse(atob(token.split(".")[1])).id;
                } catch (err) {
                    throw new Error("Invalid token format");
                }

                const response = await axios.get(`http://localhost:5000/api/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });

                setUser(response.data);
            } catch (err) {
                setError(err.message || "Failed to fetch user data");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <section>
                <YourEventsCard user={user} />
            </section>
            <section>
                <YourEventsTabs user={user} />
            </section>
        </>
    );
}