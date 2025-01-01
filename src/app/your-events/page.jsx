import YourEventsCard from "@/components/event/yourEventsCard";
import YourEventsTabs from "@/components/event/yourEventsTabs";
export default function YourEvents() {
    //user should be added as a prop here, then it should be passed down
    const user = {
        id: 1,
        name: "Lucifer Barret",
        email: "luciferbarret@gmail.com",
        profilePicture: "/lucifer-barret.png",
        bio: "I like charity events",
        eventsAttended: [0, 2], //event ids
        eventsCreated: [3, 4],
        eventsAttending: [1],
    };
    return (
        <>
            <section>
                <YourEventsCard />
            </section>
            <section>
                <YourEventsTabs user={user} />
            </section>
        </>
    );
}
