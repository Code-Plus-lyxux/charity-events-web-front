import { Button } from "../ui/button";
import { IoHandLeft } from "react-icons/io5";
import ShareIcon from "@/components/icon/shareIcon";
export default function ShareBar() {
    return (
        <div className="flex px-9 mt-8 gap-5">
            <Button
                variant="outline"
                className="w-full rounded-3xl py-6 text-lg bg-white border-mint-500 border-2 hover:text-mint-500"
            >
                I'm In!
                <IoHandLeft style={{ width: "20px", height: "20px" }} />
            </Button>
            <Button
                variant="outline"
                className="w-full rounded-3xl py-6 text-lg bg-white border-mint-500 border-2 hover:text-mint-500"
            >
                Share
                <ShareIcon strokeWidth={2} size={42} />
            </Button>
        </div>
    );
}
