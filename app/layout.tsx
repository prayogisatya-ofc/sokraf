import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
				<div className="max-w-screen-xl mx-auto px-4 xl:px-0">
					{children}
				</div>
			</body>
		</html>
	);
}
