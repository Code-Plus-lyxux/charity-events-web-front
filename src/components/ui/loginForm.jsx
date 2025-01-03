"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import emailIcon from "@/assets/img/email-icon.png";
import { InputWithIcon } from "@/components/ui/InputWithIcon";
import { Button } from "@/components/ui/Button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/Form";
import { PasswordInput } from "@/components/ui/PasswordInput";

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
                <div className="flex justify-end">
                    <Link
                        href="/auth/forgot-password"
                        className="text-sm font-bold text-mint-800 hover:text-mint-600  dark:text-mint-500 dark:hover:text-mint-300 "
                    >
                        Forgot password?
                    </Link>
                </div>
                <Button
                    type="submit"
                    className="w-full rounded-3xl py-6 text-lg bg-mint-500 hover:bg-mint-700"
                >
                    LOGIN
                </Button>
            </form>
        </Form>
    );
}
