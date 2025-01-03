import ProfileCard from "@/components/user/UserProfileCard";
import UserEvents from "@/components/user/UserEvents";
export default async function Profile({ params }) {
    const id = (await params).id;

    const user = {
        id: 1,
        name: "Lucifer Barret",
        email: "luciferbarret@gmail.com",
        profilePicture: "/lucifer-barret.png",
        bio: "I like charity events",
        eventsAttended: [1, 2, 3], //event ids
        eventsCreated: [4, 5],
        eventsAttending: [2],
    };

    return (
        <>
            <section>
                {/* {"add profile card"} */}
                <ProfileCard user={user} />
            </section>
            <section>
                {/* {"add tabs component"} */}
                <UserEvents user={user} />
            </section>
        </>
    );
}
