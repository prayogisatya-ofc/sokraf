'use client';

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const PanelNavbar = () => {
    const { data: session, status } = useSession();

    const handleLogout = async () => {
        signOut({
            callbackUrl: "/panel/login",
        });
    };

    return (
        <div className={`border-b border-base-300 sticky top-0 z-50 ${status === "unauthenticated" ? "hidden" : ""}`}>
            <div className="max-w-screen-xl mx-auto">
                <Navbar fluid rounded>
                    <Navbar.Brand href="/">
                        <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">So<span className="text-primary-700">kraf</span> Panel</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2 md:gap-0 gap-2">
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img={`https://ui-avatars.com/api/?background=1A56DB&color=fff&name=${session?.user?.name || "Jhon Doe"}`} rounded />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">{session?.user?.name || "Jhon Doe"}</span>
                                <span className="block truncate text-sm font-medium">{session?.user?.email || "jhondoe@gmail.com"}</span>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link as={Link} href="/panel">Dashboard</Navbar.Link>
                        <Navbar.Link as={Link} href="/panel/categories">Categories</Navbar.Link>
                        <Navbar.Link as={Link} href="/panel/products">Products</Navbar.Link>
                        <Navbar.Link as={Link} href="/panel/admins">Admins</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default PanelNavbar;