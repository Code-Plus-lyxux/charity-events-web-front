"use client";
import { Button } from "@/components/ui/Button";
import { IoHandLeft } from "react-icons/io5";
import ShareIcon from "@/components/icon/ShareIcon";
export default function ShareBar() {
    //user should be added as a prop here, then it should be passed down
    // to i'm in button to track down, due to unavailable data it is not added
    return (
        <div className="flex px-9 mt-8 gap-5">
            <Button
                onClick={() => console.log("I'm coming to this event!")}
                variant="outline"
                className="w-full rounded-3xl py-6 text-lg bg-white border-mint-500 border-2 hover:text-mint-500"
            >
                I'm In!
                <IoHandLeft style={{ width: "20px", height: "20px" }} />
            </Button>
            <Button
                onClick={() => console.log("I'm sharing this event!")}
                variant="outline"
                className="w-2/5 lg:w-full rounded-3xl px-4 py-6 text-lg bg-white border-mint-500 border-2 hover:text-mint-500 shrink"
            >
                Share
                <ShareIcon strokeWidth={2} size={42} />
            </Button>
        </div>
    );
}
