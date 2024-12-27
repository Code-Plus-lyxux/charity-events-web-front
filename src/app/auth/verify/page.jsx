"use client";
import Image from "next/image";
import loginImg from "@/assets/img/world-hands.png";
import givewellLogo from "@/assets/img/givewell-logo.png";
import { useAuth } from "@/hooks/authContext";
import VerificationForm from "@/components/ui/verificationForm";
import { Button } from "@/components/ui/button";

export default function Verify() {
    const { email } = useAuth();
    const handleGoogleLogin = () => {
        console.log("Sign in with Google"); //TODO: add changes here to redirect to google
    };

    return (
        <div className="flex flex-col lg:flex-row justify-around">
            <div className="lg:flex lg:justify-center lg:items-center hidden">
                <Image
                    src={loginImg}
                    width={580}
                    height={575}
                    alt="logo with a world behind the supportive hands"
                    className="border-black border-2"
                ></Image>
            </div>
            <div>
                <div className="lg:flex lg:justify-center lg:items-center lg:z-10 hidden">
                    <Image
                        src={givewellLogo}
                        width={382}
                        height={382}
                        alt="givewell logo"
                    ></Image>
                </div>

                <div className="flex flex-col justify-center items-center px-4 mt-24 lg:mt-0">
                    <p className="text-2xl font-bold">
                        Enter the Verification Code
                    </p>
                    <p className="mb-6">
                        sent to{" "}
                        {email?.slice(0, email.indexOf("@") - 3) +
                            "*".repeat(3) +
                            "***" +
                            email.slice(email.indexOf("@"))}
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center w-full px-4">
                    <VerificationForm />
                </div>
                <div className="flex flex-col justify-center items-center w-full px-4 mb-9">
                    <Button
                        onClick={() => (window.location.href = "/auth/signup")}
                        className="w-full max-w-sm rounded-3xl py-6 text-lg border-mint-500"
                        variant="outline"
                    >
                        CANCEL
                    </Button>
                </div>
            </div>
        </div>
    );
}
