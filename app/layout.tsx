import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/index";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import SmoothScrolling from "@/components/SmoothScrolling";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dicky ― Web Developer & Designer",
  description: "Web Developer & Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ paddingLeft: "1px", paddingRight: "1px" }}
      >
        <AnimatedCursor outerSize={10} innerSize={10} />
        <Navbar />
        <SmoothScrolling>{children}</SmoothScrolling>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
