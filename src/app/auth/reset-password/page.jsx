"use client";
import Image from "next/image";
import loginImg from "@/assets/img/world-hands.png";
import givewellLogo from "@/assets/img/givewell-logo.png";
import ResetPasswordForm from "@/components/ui/resetPasswordForm";
import { Button } from "@/components/ui/button";
import googleColorIcon from "@/assets/img/google-color.png";

export default function ResetPassword() {
    const handleGoogleLogin = () => {
        console.log("Sign in with Google"); //TODO: add changes here to redirect to google
    };

    return (
        <div className="flex flex-col lg:flex-row justify-around">
            <div className="lg:flex justify-center items-center hidden">
                <Image
                    src={loginImg}
                    width={580}
                    height={575}
                    alt="logo with a world behind the supportive hands"
                    className="border-black border-2 "
                ></Image>
            </div>
            <div>
                <div className="lg:flex justify-center items-center z-10 hidden">
                    <Image
                        src={givewellLogo}
                        width={382}
                        height={382}
                        alt="givewell logo"
                    ></Image>
                </div>
                <div className="lg:flex lg:justify-center lg:mt-[-60px] lg:pb-4 mt-40">
                    <p className="flex justify-center items-center text-2xl font-semibold mb-20 lg:mb-0 lg:pb-10">
                        Reset Your Password
                    </p>
                </div>
                <div className="flex justify-center items-center px-4">
                    <ResetPasswordForm></ResetPasswordForm>
                </div>

                <div className="flex flex-col justify-center items-center w-full px-4 mb-9">
                    <Button
                        onClick={handleGoogleLogin}
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
