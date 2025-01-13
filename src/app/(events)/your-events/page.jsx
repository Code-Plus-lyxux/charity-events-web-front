"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import YourEventsCard from "@/components/event/YourEventsCard";
import YourEventsTabs from "@/components/event/YourEventsTabs";
import Spinner from "@/components/ui/Spinner";
import { useRouter } from "next/navigation";

export default function YourEvents() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                // Get user token from localStorage
                const token = localStorage.getItem("userToken");
                if (!token) {
                    if (!token) {
                        router.push("/");
                        return;
                    }
                }

                // Decode token to get user ID
                let userId;
                try {
                    userId = JSON.parse(atob(token.split(".")[1])).id;
                } catch (err) {
                    router.push("/");
                    console.error("Error:", error);
                }

                const response = await axios.get(
                    `http://localhost:5000/api/user/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setUser(response.data);
            } catch (err) {
                router.push("/");
                setError(err.message || "Failed to fetch user data");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [router]);

    // if (loading) return <Spinner />;
    // if (error) return <p>Error: {error}</p>;

    if (!user) {
        <Spinner />;
        router.push("/");
    }

    return (
        <>
            {loading && <Spinner />}
            {!loading && (
                <>
                    <section>
                        <YourEventsCard user={user} />
                    </section>
                    <section>
                        <YourEventsTabs user={user} />
                    </section>
                </>
            )}
        </>
    );
}
