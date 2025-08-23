import { CartProvider } from "@/lib/cart-context"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import type React from "react"
import "./globals.css"

const playfair = Playfair_Display({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-playfair",
	weight: ["400", "700"],
})

const sourceSans = Source_Sans_3({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-source-sans",
	weight: ["400", "600"],
})

export const metadata: Metadata = {
	title: "AldeaTech E-commerce",
	description: "Tu socio de confianza para productos de calidad y un servicio excepcional",
	generator: "v0.app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
			<body className="font-sans">
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	)
}
