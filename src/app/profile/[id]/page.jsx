export default async function Profile({ params }) {
    const id = (await params).id;

    const user = {
        id,
        name: "Lucifer Barret",
        email: "luciferbarret@gmail.com",
        profilePicture: "lucifer-barret.png",
        bio: "I like charity events",
        eventsAttended: [1, 2, 3], //event ids
        eventsCreated: [4, 5],
        eventsAttending: [6, 7, 8],
    };

    return (
        <>
            <section>{"add profile card"}</section>
            <section>{"add tabs component"}</section>
        </>
    );
}
