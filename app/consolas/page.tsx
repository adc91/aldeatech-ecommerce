import { CategoryPageTemplate } from "@/components/category-page-template"
import { ECommerceHeader } from "@/components/e-commerce-header"

const categories = [
	{ name: "PlayStation", icon: "🎮", href: "/consolas" },
	{ name: "Xbox", icon: "🎯", href: "/consolas" },
	{ name: "Nintendo", icon: "🕹️", href: "/consolas" },
	{ name: "PC Gaming", icon: "💻", href: "/consolas" },
	{ name: "Accesorios", icon: "🎧", href: "/consolas" },
	{ name: "Juegos", icon: "💿", href: "/consolas" },
]

const products = [
	{
		id: 201,
		name: "PlayStation 5 Console",
		price: "$499",
		originalPrice: "$599",
		image: "/playstation-5-console.png",
		category: "PlayStation",
		brand: "Sony",
		color: "white",
		priceValue: 499,
	},
	{
		id: 202,
		name: "Xbox Series X",
		price: "$499",
		originalPrice: "$599",
		image: "/xbox-series-x-console.png",
		category: "Xbox",
		brand: "Microsoft",
		color: "black",
		priceValue: 499,
	},
	{
		id: 203,
		name: "Nintendo Switch OLED",
		price: "$349",
		originalPrice: "$399",
		image: "/nintendo-switch-oled.png",
		category: "Nintendo",
		brand: "Nintendo",
		color: "red",
		priceValue: 349,
	},
	{
		id: 204,
		name: "Steam Deck 512GB",
		price: "$649",
		originalPrice: "$749",
		image: "/steam-deck-512gb.png",
		category: "PC Gaming",
		brand: "Valve",
		color: "black",
		priceValue: 649,
	},
	{
		id: 205,
		name: "PlayStation 5 DualSense Controller",
		price: "$69",
		originalPrice: "$79",
		image: "/ps5-dualsense-controller.png",
		category: "Accesorios",
		brand: "Sony",
		color: "white",
		priceValue: 69,
	},
	{
		id: 206,
		name: "Xbox Wireless Controller",
		price: "$59",
		originalPrice: "$69",
		image: "/xbox-wireless-controller.png",
		category: "Accesorios",
		brand: "Microsoft",
		color: "black",
		priceValue: 59,
	},
]

const brands = ["Sony", "Microsoft", "Nintendo", "Valve", "Razer", "Logitech"]
const colors = [
	{ name: "Negro", value: "black", color: "bg-black" },
	{ name: "Blanco", value: "white", color: "bg-white border-2 border-gray-300" },
	{ name: "Rojo", value: "red", color: "bg-red-600" },
	{ name: "Azul", value: "blue", color: "bg-blue-600" },
]

export default function ConsolasPage() {
	return (
		<div>
			<ECommerceHeader />
			<CategoryPageTemplate
				title="Consolas"
				breadcrumb="Consolas"
				heroTitle="Explora el mundo del gaming"
				heroSubtitle="Consolas de última generación, accesorios y juegos para todos los gustos"
				categories={categories}
				products={products}
				brands={brands}
				colors={colors}
			/>
		</div>
	)
}
