'use client';

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RootNavbar = () => {
    const pathname = usePathname();

    if (pathname.startsWith('/panel')) {
        return null;
    }

    return (
        <div className="border-b border-base-100 sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto sticky top-0 z-50 bg-base-100">
                <Navbar fluid rounded className="px-4 2xl:px-0 py-2.5 sm:py-5">
                    <Navbar.Brand as={Link} href="/">
                        <img src="/logo.svg" className="mr-3 h-8 sm:h-8" alt="Sokraf Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">So<span className="text-primary-700">kraf</span></span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Button href="https://wa.me/6282269789818?text=Halo+min+saya+mau+jual+karya+di+Sokraf" color="blue">Show Yours</Button>
                        <Navbar.Toggle className="ms-3" />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link as={Link} href="/">Home</Navbar.Link>
                        <Navbar.Link as={Link} href="/products">Products</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default RootNavbar;