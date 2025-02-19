"use client";

import { Suspense } from "react";
import Spinner from "@/components/ui/Spinner";
import ProfileView from "./ProfileView";

// Main page component with Suspense
export default function Page() {
    return (
        <Suspense fallback={<Spinner />}>
            <ProfileView />
        </Suspense>
    );
}