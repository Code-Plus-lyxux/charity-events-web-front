"use client";

import { Suspense } from "react";
import Spinner from "@/components/ui/Spinner";
import EditEventContent from "./EditEventContent";

// Main page component with Suspense
export default function Page() {
    return (
        <Suspense fallback={<Spinner />}>
            <EditEventContent />
        </Suspense>
    );
}