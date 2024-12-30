export default async function EventPage({ params }) {
    const id = (await params).id;

    //retrieve event details here with api call from the backend with event_id
    //this is a sample event details from the design
    const event = {
        title: `Support Animal Welfare: Spend a Day Volunteering at the Local 
        Shelter and Make a Difference`,
        location: "Haven Paws Animal Shelter, Kandy",
        date: "21 December 2024",
        status: "Upcoming",
        attendeeCount: 500,
        description: [
            `Join us for a meaningful day at the local animal shelter 
        in Kandy, where you'll have the opportunity to support animal welfare 
        by directly engaging with the animals in need. Spend time feeding, 
        cleaning, and playing with the sheltered animals to help them feel loved 
        and cared for. Your efforts will contribute to the overall well-being 
        of the animals and help raise awareness about the importance of adoption.`,
            `Whether you're an animal enthusiast or someone looking to give back, 
        this event will make a lasting impact on the lives of many animals. 
        Together, we can make a real difference in the community and help create 
        a brighter future for these deserving animals.`,
            `By volunteering, you'll also have the chance to connect with other 
        like-minded individuals who share your passion for animal welfare. 
        It's an excellent opportunity to learn more about the needs of animals 
        in our community while making new friends and strengthening the bond 
        we all share for a cause greater than ourselves. Your presence matters, 
        and together, we can create lasting change.`,
        ],
        host: {
            name: "Haven Paws Animal Shelter",
            avatar: "/api/placeholder/48/48",
        },
        comments: [
            {
                author: "Lucifer Barret",
                avatar: "/api/placeholder/40/40",
                content: `Such an amazing event! Excited to participate and 
                contribute. Thank you for organizing this. Let's make a positive 
                impact together!`,
            },
        ],
    };

    return (
        <div>
            <h1>Event {id}</h1>
        </div>
    );
}
