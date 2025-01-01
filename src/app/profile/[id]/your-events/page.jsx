export default async function YourEvents({ params }) {
    const id = (await params).id;

    return (
        <>
            <section>{/* {"add your events card"} */}</section>
            <section>{/* {"add tabs component with events"} */}</section>
        </>
    );
}
