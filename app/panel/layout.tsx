'use client';

import "../globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import {
    Avatar,
    Dropdown,
    Navbar,
} from "flowbite-react";

const poppinsSans = Poppins({
    weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
    style: "normal",
    subsets: ["latin"],
    display: "swap",
});

export default function PanelLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Head>
                <title>Sokraf Panel</title>
                <meta name="description" content="Panel for sokraf management" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <html lang="en">
                <body className={`${poppinsSans} antialiased`}>
                    <div className="border-b border-base-300 sticky top-0 z-50">
                        <div className="max-w-screen-xl mx-auto">
                            <Navbar fluid rounded>
                                <Navbar.Brand href="/">
                                    <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo"/>
                                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> So<span className="text-primary-700">kraf</span> Panel</span>
                                </Navbar.Brand>
                                <div className="flex md:order-2 md:gap-0 gap-2">
                                    <Dropdown
                                        arrowIcon={false}
                                        inline
                                        label={
                                            <Avatar
                                                alt="User settings"
                                                img={`https://ui-avatars.com/api/?background=1A56DB&color=fff&name=Aspita+Fitri`}
                                                rounded
                                            />
                                        }
                                    >
                                        <Dropdown.Header>
                                            <span className="block text-sm">Aspita Fitri</span>
                                            <span className="block truncate text-sm font-mediumld">aspita@gmail.com</span>
                                        </Dropdown.Header>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>Sign Out</Dropdown.Item>
                                    </Dropdown>
                                    <Navbar.Toggle />
                                </div>
                                <Navbar.Collapse>
                                    <Link href={"/panel"}>
                                        <Navbar.Link href="/panel">Dashboard</Navbar.Link>
                                    </Link>
                                    <Link href="/panel/categories">
                                        <Navbar.Link href="/panel/categories">Categories</Navbar.Link>
                                    </Link>
                                    <Link href="/panel/products">
                                        <Navbar.Link href="/panel/products">Products</Navbar.Link>
                                    </Link>
                                    <Link href="/panel/admins">
                                        <Navbar.Link href="/panel/admins">Admins</Navbar.Link>
                                    </Link>
                                </Navbar.Collapse>
                                </Navbar>
                            </div>
                        </div>

                        <div className="max-w-screen-xl px-4 pt-4 mx-auto">
                            {children}
                        </div>
                    </body>
                </html>
            </>
        );
}