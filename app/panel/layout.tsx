'use client';

import "../globals.css";
import { SessionProvider } from "next-auth/react";
import PanelNavbar from "@/components/PanelNavbar";

export default function PanelLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            <PanelNavbar />

            <div className="max-w-screen-xl px-4 mx-auto">
                {children}
            </div>
        </SessionProvider>
    );
}
