import * as React from "react";
import Image from "next/image";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import sendIcon from "@/assets/img/send-icon.png";

export const CommentWithIcon = React.forwardRef(
    ({ className, iconSrc, alt, type, ...props }, ref) => {
        return (
            <div className="relative flex">
                <Input
                    className={cn(
                        "pl-10 pr-12 placeholder:text-gray-500 py-6 rounded-full",
                        className
                    )}
                    placeholder="Add a comment"
                    type={type}
                    {...props}
                    ref={ref}
                />
                <button
                    type="button"
                    className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full hover:bg-mint-600"
                >
                    <Image
                        src={sendIcon}
                        alt={"send icon"}
                        width={16}
                        height={16}
                        className="object-contain"
                    />
                </button>
            </div>
        );
    }
);

CommentWithIcon.displayName = "CommentWithIcon";
