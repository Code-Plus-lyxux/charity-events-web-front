"use client";
import ProfileCard from "@/components/user/UserProfileCard";
import UserEvents from "@/components/user/UserEvents";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();
    const [fetchedUser, setFetchedUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("userToken");

        if (!token) {
            router.push("/");
            return;
        }

        const decodeToken = (token) => {
            try {
                const payload = JSON.parse(atob(token.split(".")[1]));
                return payload;
            } catch (error) {
                console.error("Invalid token format:", error);
                return null;
            }
        };

        const fetchUser = async () => {
            try {
                const decodedToken = decodeToken(token);
                if (!decodedToken || !decodedToken.id) {
                    throw new Error("Invalid token or missing user ID");
                }

                const response = await axios.get(
                    `http://localhost:5000/api/user/${decodedToken.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setFetchedUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
                router.push("/");
            }
        };

        fetchUser();
    }, [router]);

    if (!fetchedUser) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section>
                <ProfileCard user={fetchedUser} />
            </section>
            <section>
                <UserEvents user={fetchedUser} />
            </section>
        </>
    );
}
