import Image from "next/image";
import loginImg from "@/assets/img/world-hands.png";
import givewellLogo from "@/assets/img/givewell-logo.png";
import LoginForm from "@/components/ui/loginForm";
import { Button } from "@/components/ui/button";

export default function Login() {
    return (
        <div className="flex flex-col md:flex-row justify-around">
            <div className="flex justify-center items-center">
                <Image
                    src={loginImg}
                    width={580}
                    height={575}
                    alt="logo with a world behind the supportive hands"
                ></Image>
            </div>
            <div>
                <div className="flex justify-center items-center z-10">
                    <Image
                        src={givewellLogo}
                        width={382}
                        height={382}
                        alt="givewell logo"
                    ></Image>
                </div>
                <div className="flex justify-center items-center px-4 mt-[-60px]">
                    <LoginForm></LoginForm>
                </div>
                <div className="flex items-center justify-center w-full my-4">
                    <div className="border-t border-gray-500 w-[180px]"></div>
                    <div className="px-4 text-gray-500">or</div>
                    <div className="border-t border-gray-500 w-[180px]"></div>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    <Button>Sign in with Google</Button>
                    <div className="mt-4 w-full text-center">
                        Don't have an account?{" "}
                        <a
                            href="/signup"
                            className="text-[#4285F4] hover:underline"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
