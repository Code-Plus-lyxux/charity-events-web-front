import { Suspense } from "react";
import Spinner from "@/components/ui/Spinner";
import HostedEventView from "./HostedEventView";

// Main page component with Suspense
export default function Page() {
    return (
        <Suspense fallback={<Spinner />}>
            <HostedEventView />
        </Suspense>
    );
}