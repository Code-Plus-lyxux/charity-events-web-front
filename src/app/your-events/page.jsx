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
        eventsAttended: [1, 2, 3], //event ids
        eventsCreated: [4, 5],
        eventsAttending: [2],
    };
    return (
        <>
            <section>
                {/* {"add your events card"} */}
                <YourEventsCard />
            </section>
            <section>
                {/* {"add tabs component with events"} */}
                <YourEventsTabs user={user} />
            </section>
        </>
    );
}
