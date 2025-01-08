export default function CommentCard({ comment }) {
    const { author, avatar, content } = comment;
    return (
        <div className="flex py-4">
            <div className="flex justify-center items-start min-w-14 max-w-20">
                <img
                    src={avatar || "/images/user.png"}
                    alt="comment author avatar"
                />
            </div>
            <div className="flex flex-col justify-start items-start px-5">
                <p className="font-semibold mb-1">{author}</p>
                <p>{content}</p>
            </div>
        </div>
    );
}
