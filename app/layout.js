import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Foooter from "@/components/Foooter";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fund The Future - Tomorrow starts with you",
  description: "A platform that lets you support creators, students, and innovators with small contributions — helping fund the future, one dream at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white"
      >
        <SessionWrapper>
        <Navbar/>
        <div className="min-h-full  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
          {children}
        </div>
        <Foooter />
        </SessionWrapper>
      </body>
    </html>
  );
}
