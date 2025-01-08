import "../globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { Metadata } from "next";

const poppinsSans = Poppins({
    weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
    style: "normal",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
	title: "Sokraf Panel",
	description: "Panel for sokraf management",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
	}
};

export default function PanelLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppinsSans} antialiased`}>
                <div className="border-b border-base-300 sticky top-0 z-50">
                    <div className="max-w-screen-xl mx-auto">
                        <Navbar fluid rounded>
                            <NavbarBrand href="/">
                                <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">So<span className="text-primary-700">kraf</span> Panel</span>
                            </NavbarBrand>
                            <div className="flex md:order-2 md:gap-0 gap-2">
                                <Dropdown
                                    arrowIcon={false}
                                    inline
                                    label={
                                        <Avatar alt="User settings" img={`https://ui-avatars.com/api/?background=1A56DB&color=fff&name=Aspita+Fitri`} rounded />
                                    }
                                >
                                    <DropdownHeader>
                                        <span className="block text-sm">Aspita Fitri</span>
                                        <span className="block truncate text-sm font-medium">aspita@gmail.com</span>
                                    </DropdownHeader>
                                    <DropdownDivider />
                                    <DropdownItem>Sign out</DropdownItem>
                                </Dropdown>
                                <NavbarToggle />
                            </div>
                            <NavbarCollapse>
                                <Link href={"/panel"}>
                                    <NavbarLink href="/panel">Dashboard</NavbarLink>
                                </Link>
                                <Link href="/panel/categories">
                                    <NavbarLink href="/panel/categories">Categories</NavbarLink>
                                </Link>
                                <Link href="/panel/products">
                                    <NavbarLink href="/panel/products">Products</NavbarLink>
                                </Link>
                                <Link href="/panel/admins">
                                    <NavbarLink href="/panel/admins">Admins</NavbarLink>
                                </Link>
                            </NavbarCollapse>
                        </Navbar>
                    </div>
                </div>

                <div className="max-w-screen-xl px-4 pt-4 mx-auto">
                    {children}
                </div>

            </body>
        </html>
    );
}
