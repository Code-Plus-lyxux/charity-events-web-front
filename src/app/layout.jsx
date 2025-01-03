import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/hooks/authContext";
import "@/app/globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "GIVEWELL",
    description: "Be the Change You Wish to See",
};

export default function RootLayout({ children }) {
    return (
        <AuthProvider>
            <html lang="en">
                <link
                    rel="icon"
                    href="./images/logo.png"
                    type="image"
                    sizes="<generated>"
                />
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    );
}
