import { Suspense } from "react";
import Spinner from "@/components/ui/Spinner";
import EventView from "./EventView";

// Main page component with Suspense
export default function Page() {
    return (
        <Suspense fallback={<Spinner />}>
            <EventView />
        </Suspense>
    );
}