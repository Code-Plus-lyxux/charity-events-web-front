"use client";

import { Suspense } from "react";
import Spinner from "@/components/ui/Spinner";
import ProfileContent from "./ProfileContent";

// Main page component with Suspense
export default function Page() {
    return (
        <Suspense fallback={<Spinner />}>
            <ProfileContent />
        </Suspense>
    );
}