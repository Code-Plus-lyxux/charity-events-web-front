"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image";
import emailIcon from "@/assets/img/email-icon.png";
import passwordIcon from "@/assets/img/password-icon.png";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the form schema
const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

export default function LoginForm() {
    // Initialize useForm
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // Handle form submission
    const onSubmit = (values) => {
        console.log("Form submitted with values:", values); //TODO: add changes here
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
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                        <Image
                                            src={emailIcon}
                                            alt="input icon"
                                            width={16}
                                            height={16}
                                            className="object-contain"
                                        />
                                    </div>
                                    <Input
                                        className="pl-10 placeholder:text-gray-500"
                                        placeholder="E-mail"
                                        {...field}
                                    />
                                </div>
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
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                        <Image
                                            src={passwordIcon}
                                            alt="input icon"
                                            width={16}
                                            height={16}
                                            className="object-contain"
                                        />
                                    </div>
                                    <Input
                                        placeholder="Password"
                                        className="pl-10 placeholder:text-gray-500"
                                        type="password"
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <Link
                        href="/forgot-password"
                        className="text-sm text-[#00302b] hover:text-emerald-800  dark:text-[#25e2b7] dark:hover:text-[#a0fadd] "
                    >
                        Forgot password?
                    </Link>
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>
        </Form>
    );
}
