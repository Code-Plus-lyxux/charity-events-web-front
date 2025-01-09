"use server";
import ProfileCard from "@/components/user/UserProfileCard";
import UserEvents from "@/components/user/UserEvents";
import axios from "axios";
export default async function Profile({ params }) {
    const id = (await params).id;

    const fetchUser = async (userId) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/user/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching user:", error);
            throw error;
        }
    };

    const fetchedUser = await fetchUser(id);

    return (
        <>
            <section>
                {/* {"add profile card"} */}
                <ProfileCard user={fetchedUser} />
            </section>
            <section>
                {/* {"add tabs component"} */}
                <UserEvents user={fetchedUser} />
            </section>
        </>
    );
}
