import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

const poppinsSans = Poppins({
	weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
	style: "normal",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Sokraf - Showcase Your Creativity",
	description: "Platform E-Catalog for Creative Products",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppinsSans} antialiased`}>
        <div className="border-b border-base-100 sticky top-0 z-50">
					<div className="max-w-screen-xl mx-auto sticky top-0 z-50 bg-base-100">
						<Navbar fluid rounded className="px-4 2xl:px-0 py-2.5 sm:py-5">
							<NavbarBrand as={Link} href="/">
								<img src="/logo.svg" className="mr-3 h-8 sm:h-8" alt="Sokraf Logo" />
								<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">So<span className="text-primary-700">kraf</span></span>
							</NavbarBrand>
							<div className="flex md:order-2">
								<Button href="https://wa.me/6282269789818?text=Halo+min+saya+mau+jual+karya+di+Sokraf" color="blue">Show Yours</Button>
								<NavbarToggle className="ms-3" />
							</div>
							<NavbarCollapse>
								<NavbarLink as={Link} href="/">Home</NavbarLink>
								<NavbarLink as={Link} href="/products">Products</NavbarLink>
							</NavbarCollapse>
						</Navbar>
					</div>
				</div>
				<div className="max-w-screen-xl mx-auto px-4 xl:px-0">
					{children}
				</div>
			</body>
		</html>
	);
}
