"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromotionalBlocks() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Smartphones Block */}
        <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.9)), url('/placeholder-0ft80.png')`,
            }}
          />
          <div className="relative h-full flex flex-col justify-center items-start p-8 text-white">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Latest Smartphones</h3>
            <p className="font-source text-lg mb-6 opacity-90 max-w-sm">
              Discover cutting-edge technology with our premium smartphone collection
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 transition-all duration-300 group-hover:translate-x-1"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* TVs Block */}
        <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.9)), url('/modern-smart-tv-entertainment-center.png')`,
            }}
          />
          <div className="relative h-full flex flex-col justify-center items-start p-8 text-white">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Smart TVs & Entertainment</h3>
            <p className="font-source text-lg mb-6 opacity-90 max-w-sm">
              Transform your home with our premium entertainment systems
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 group-hover:translate-x-1"
            >
              Explore TVs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
