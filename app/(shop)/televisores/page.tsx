import { CategoryPageTemplate } from "@/features/products/components/category-page-template"
import { ECommerceHeader } from "@/components/common/header"

const categories = [
	{ name: "Smart TV", icon: "📺", href: "/televisores" },
	{ name: "4K Ultra HD", icon: "🎬", href: "/televisores" },
	{ name: "OLED", icon: "✨", href: "/televisores" },
	{ name: "QLED", icon: "🌈", href: "/televisores" },
	{ name: "Gaming TV", icon: "🎮", href: "/televisores" },
	{ name: "Portátiles", icon: "📱", href: "/televisores" },
]

const products = [
	{
		id: 101,
		name: 'Samsung QLED 65" 4K Smart TV',
		price: "$1,299",
		originalPrice: "$1,599",
		image: "/samsung-qled-65-inch.png",
		category: "QLED",
		brand: "Samsung",
		color: "black",
		priceValue: 1299,
	},
	{
		id: 102,
		name: 'LG OLED C3 55" 4K Smart TV',
		price: "$1,199",
		originalPrice: "$1,499",
		image: "/lg-oled-c3-55-inch-tv.png",
		category: "OLED",
		brand: "LG",
		color: "black",
		priceValue: 1199,
	},
	{
		id: 103,
		name: 'Sony Bravia XR 75" 4K TV',
		price: "$2,299",
		originalPrice: "$2,799",
		image: "/sony-bravia-xr-75-inch.png",
		category: "4K Ultra HD",
		brand: "Sony",
		color: "black",
		priceValue: 2299,
	},
	{
		id: 104,
		name: 'TCL 43" Smart TV Android',
		price: "$399",
		originalPrice: "$499",
		image: "/tcl-43-inch-smart-tv.png",
		category: "Smart TV",
		brand: "TCL",
		color: "black",
		priceValue: 399,
	},
	{
		id: 105,
		name: 'Hisense 50" 4K ULED TV',
		price: "$599",
		originalPrice: "$799",
		image: "/hisense-50-inch-uled.png",
		category: "4K Ultra HD",
		brand: "Hisense",
		color: "black",
		priceValue: 599,
	},
	{
		id: 106,
		name: 'Roku 32" Smart TV HD',
		price: "$249",
		originalPrice: "$329",
		image: "/roku-32-inch-smart-tv.png",
		category: "Smart TV",
		brand: "Roku",
		color: "black",
		priceValue: 249,
	},
]

const brands = ["Samsung", "LG", "Sony", "TCL", "Hisense", "Roku"]
const colors = [
	{ name: "Negro", value: "black", color: "bg-black" },
	{ name: "Plata", value: "silver", color: "bg-gray-400" },
	{ name: "Blanco", value: "white", color: "bg-white border-2 border-gray-300" },
]

export default function TelevisoresPage() {
	return (
		<div>
			<ECommerceHeader />
			<CategoryPageTemplate
				title="Televisores"
				breadcrumb="Televisores"
				heroTitle="Descubre nuestra colección de televisores"
				heroSubtitle="Desde Smart TV hasta tecnología OLED y QLED de última generación"
				categories={categories}
				products={products}
				brands={brands}
				colors={colors}
			/>
		</div>
	)
}
