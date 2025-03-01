"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailIcon from "@/assets/img/email-icon.png";
import { InputWithIcon } from "@/components/ui/inputWithIcon";
import userIcon from "@/assets/img/user-icon.png";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "./passwordInput";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/authContext";

// Define the form schema
const formSchema = z
    .object({
        email: z.string().email(),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(
                /[!@#$%^&*(),.?":{}|<>]/,
                "Password must contain at least 1 special character"
            )
            .regex(
                /(?=.*[a-z])(?=.*[A-Z])/,
                "Password must contain at least 1 uppercase and 1 lowercase letter"
            ),
        fullName: z.string().min(3, {
            message: "Full Name must be at least 3 characters.",
        }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match.",
        path: ["confirmPassword"],
    });

export default function signupForm() {
    const { setEmail } = useAuth();
    const router = useRouter();
    // Initialize useForm
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            fullName: "",
            password: "",
            confirmPassword: "",
        },
    });

    // Handle form submission
    const onSubmit = (values) => {
        setEmail(values.email);
        router.push("/auth/verify");
        console.log("Form submitted with values:", values); //TODO: add changes here to sign up
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full max-w-sm"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputWithIcon
                                    className="pl-10 placeholder:text-gray-500"
                                    type="email"
                                    iconSrc={emailIcon}
                                    alt="email icon"
                                    placeholder="E-mail"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputWithIcon
                                    className="pl-10 placeholder:text-gray-500"
                                    type="text"
                                    iconSrc={userIcon}
                                    alt="user icon"
                                    placeholder="Full Name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <PasswordInput
                                    className="pl-10 placeholder:text-gray-500 appearance-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <PasswordInput
                                    className="pl-10 placeholder:text-gray-500 appearance-none"
                                    placeholder="Confirm Password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="py-6">
                    <Button
                        type="submit"
                        className="w-full rounded-3xl py-6 text-lg bg-mint-500 hover:bg-mint-700"
                    >
                        SIGN UP
                    </Button>
                </div>
            </form>
        </Form>
    );
}
