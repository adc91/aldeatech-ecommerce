"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: 1,
    title: "Electronics",
    image: "/modern-electronics.png",
    description: "Latest tech gadgets",
    href: "/electronics",
  },
  {
    id: 2,
    title: "Fashion",
    image: "/placeholder-47rjg.png",
    description: "Trendy apparel",
    href: "/fashion",
  },
  {
    id: 3,
    title: "Home & Garden",
    image: "/placeholder-e4k49.png",
    description: "Decor & essentials",
    href: "/home-garden",
  },
  {
    id: 4,
    title: "Sports",
    image: "/assorted-fitness-gear.png",
    description: "Fitness & outdoor",
    href: "/sports",
  },
  {
    id: 5,
    title: "Books",
    image: "/placeholder-fwjby.png",
    description: "Knowledge & stories",
    href: "/books",
  },
  {
    id: 6,
    title: "Beauty",
    image: "/beauty-cosmetics-skincare.png",
    description: "Skincare & makeup",
    href: "/beauty",
  },
]

export function FeaturedCategories() {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Featured Categories</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover our most popular product categories and find exactly what you're looking for
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={category.href}>
            <Card
              className={cn(
                "group cursor-pointer overflow-hidden border-border",
                "transition-all duration-300 ease-in-out",
                "hover:scale-105 hover:shadow-lg hover:shadow-primary/10",
              )}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-accent mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
