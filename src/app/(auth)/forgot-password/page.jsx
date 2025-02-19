import Image from "next/image";
import ForgotPasswordForm from "@/components/ui/ForgotPasswordForm";
export default function ForgotPassword() {
    return (
        <div className="flex flex-col lg:flex-row justify-around">
            <div className="flex justify-center items-center">
                <Image
                    src='./../assets/img/world-hands.png'
                    alt="logo with a world behind the supportive hands"
                    width={580}
                    height={575}
                    className="lg:border-black lg:border-2"
                ></Image>
            </div>
            <div>
                <div className="flex justify-center items-center z-10">
                    <Image
                        src='./../assets/img/givewell-logo.png'
                        alt="givewell logo"
                        width={382}
                        height={382}
                    ></Image>
                </div>
                <div className="flex flex-col justify-center items-center px-4 mt-[-60px] mb-14 ">
                    <p className="text-center text-lg font-[510] mb-10">
                        Enter Email to send verification code
                    </p>
                    <ForgotPasswordForm></ForgotPasswordForm>
                </div>
            </div>
        </div>
    );
}
