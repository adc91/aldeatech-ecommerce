import { ECommerceHeader } from "@/components/e-commerce-header"
import { CategoryPageTemplate } from "@/components/category-page-template"

const categories = [
  { name: "iPhone", icon: "📱", href: "/celulares" },
  { name: "Samsung", icon: "📲", href: "/celulares" },
  { name: "Android", icon: "🤖", href: "/celulares" },
  { name: "Xiaomi", icon: "📞", href: "/celulares" },
  { name: "Accesorios", icon: "🔌", href: "/celulares" },
  { name: "Fundas", icon: "🛡️", href: "/celulares" },
]

const products = [
  {
    id: 301,
    name: "iPhone 15 Pro Max 256GB",
    price: "$1,199",
    originalPrice: "$1,399",
    image: "/iphone-15-pro-max.png",
    category: "iPhone",
    brand: "Apple",
    color: "black",
    priceValue: 1199,
  },
  {
    id: 302,
    name: "Samsung Galaxy S24 Ultra",
    price: "$1,099",
    originalPrice: "$1,299",
    image: "/samsung-galaxy-s24.png",
    category: "Samsung",
    brand: "Samsung",
    color: "black",
    priceValue: 1099,
  },
  {
    id: 303,
    name: "Google Pixel 8 Pro",
    price: "$899",
    originalPrice: "$1,099",
    image: "/google-pixel-8-pro.png",
    category: "Android",
    brand: "Google",
    color: "blue",
    priceValue: 899,
  },
  {
    id: 304,
    name: "Xiaomi 14 Pro 512GB",
    price: "$799",
    originalPrice: "$999",
    image: "/xiaomi-14-pro-512gb.png",
    category: "Xiaomi",
    brand: "Xiaomi",
    color: "white",
    priceValue: 799,
  },
  {
    id: 305,
    name: "iPhone 14 128GB",
    price: "$699",
    originalPrice: "$899",
    image: "/iphone-14-128gb.png",
    category: "iPhone",
    brand: "Apple",
    color: "blue",
    priceValue: 699,
  },
  {
    id: 306,
    name: "OnePlus 12 256GB",
    price: "$649",
    originalPrice: "$799",
    image: "/oneplus-12-256gb.png",
    category: "Android",
    brand: "OnePlus",
    color: "green",
    priceValue: 649,
  },
]

const brands = ["Apple", "Samsung", "Google", "Xiaomi", "OnePlus", "Huawei"]
const colors = [
  { name: "Negro", value: "black", color: "bg-black" },
  { name: "Blanco", value: "white", color: "bg-white border-2 border-gray-300" },
  { name: "Azul", value: "blue", color: "bg-blue-600" },
  { name: "Verde", value: "green", color: "bg-green-600" },
  { name: "Rojo", value: "red", color: "bg-red-600" },
]

export default function CelularesPage() {
  return (
    <div>
      <ECommerceHeader />
      <CategoryPageTemplate
        title="Celulares"
        breadcrumb="Celulares"
        heroTitle="Los mejores smartphones del mercado"
        heroSubtitle="Encuentra el celular perfecto con la última tecnología y mejores precios"
        categories={categories}
        products={products}
        brands={brands}
        colors={colors}
      />
    </div>
  )
}
