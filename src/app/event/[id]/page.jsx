import HeroCard from "@/components/event/heroCard";
import EventTabs from "@/components/event/eventTabs";
import HostCard from "@/components/event/hostCard";
import ShareBar from "@/components/event/shareBar";
import { CommentWithIcon } from "@/components/ui/addComment";
import CommentCard from "@/components/ui/commentCard";
export default async function EventPage({ params }) {
    const id = (await params).id;

    //retrieve event details here with api call from the backend with event_id
    //this is a sample event details from the design
    const event = {
        id,
        title: `Support Animal Welfare: Spend a Day Volunteering at the Local 
        Shelter and Make a Difference`,
        location: "Haven Paws Animal Shelter, Kandy",
        date: "21 December 2024",
        time: "09:00 AM to 04:00 PM",
        imageSrc: "/images/dog home.jpeg",
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
            avatar: "/host-avatar.png",
        },
        comments: [
            {
                author: "Lucifer Barret",
                avatar: "/lucifer-barret.png",
                content: `Such an amazing event! Excited to participate and 
                contribute. Thank you for organizing this. Let's make a positive 
                impact together!`,
            },
            {
                author: "Ayesha Perera",
                avatar: "/ayesha-perera.png",
                content: `This event is a perfect opportunity to give back to 
                the community while also spending time with like-minded people. 
                Excited to participate!`,
            },
            {
                author: "Nuwan Silva",
                avatar: "/nuwan-silva.png",
                content: `I'm so grateful for events like this that bring people 
                together to support a good cause. Can't wait to join in!`,
            },
            {
                author: "Kavindi Jayasekara",
                avatar: "/kavindi-jayasekara.png",
                content: `I'm so excited to participate in this event. It's a 
                great opportunity to give back to the community and also learn 
                more about animal welfare.`,
            },
            {
                author: "Amal Fernando",
                avatar: "/amal-fernando.png",
                content: `This event is a perfect way to spend a day while doing 
                something meaningful. Can't wait to join in and make a difference!`,
            },
        ],
    };

    return (
        <>
            <section>
                {/* hero section */}
                <HeroCard event={event}></HeroCard>
            </section>

            <main>
                {/* main content */}
                <EventTabs event={event}></EventTabs>
            </main>

            <section>
                {/* host details section */}
                <HostCard host={event.host}></HostCard>
            </section>

            <section>
                {/* share bar section */}
                <ShareBar></ShareBar>
            </section>

            <div className="px-9 mt-9">
                {/* add a comment */}
                <CommentWithIcon />
            </div>

            <section className="px-9 mt-5">
                {/* comment section */}
                <div className="flex">
                    <p className="font-semibold">Comments</p>
                    <p className="ml-5 bg-mint-500 px-2 text-white rounded-full">
                        {event.comments.length}
                    </p>
                </div>
                <div className="flex flex-col">
                    {event.comments.map((comment, index) => (
                        <CommentCard
                            key={index}
                            comment={comment}
                        ></CommentCard>
                    ))}
                </div>
            </section>
        </>
    );
}
