"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { ChevronDown, ChevronUp, Filter, Grid, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: string
  originalPrice: string
  image: string
  category: string
  brand: string
  color: string
  size?: string
  priceValue: number
}

interface CategoryConfig {
  name: string
  icon: string
  href: string
}

interface CategoryPageProps {
  title: string
  breadcrumb: string
  heroTitle: string
  heroSubtitle: string
  categories: CategoryConfig[]
  products: Product[]
  brands: string[]
  colors: { name: string; value: string; color: string }[]
  sizes?: string[]
  showSizes?: boolean
}

export function CategoryPageTemplate({
  title,
  breadcrumb,
  heroTitle,
  heroSubtitle,
  categories,
  products,
  brands,
  colors,
  sizes = [],
  showSizes = false,
}: CategoryPageProps) {
  const [openFilters, setOpenFilters] = useState({
    price: true,
    categories: true,
    colors: true,
    brands: true,
    sizes: true,
  })

  const [filters, setFilters] = useState({
    category: null as string | null,
    brands: [] as string[],
    colors: [] as string[],
    sizes: [] as string[],
    priceRange: [0, 3000] as [number, number],
  })

  const toggleFilter = (filter: keyof typeof openFilters) => {
    setOpenFilters((prev) => ({ ...prev, [filter]: !prev[filter] }))
  }

  const updateFilter = (key: keyof typeof filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const toggleArrayFilter = (key: "brands" | "colors" | "sizes", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value) ? prev[key].filter((item) => item !== value) : [...prev[key], value],
    }))
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (filters.category && product.category !== filters.category) return false

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false

      // Color filter
      if (filters.colors.length > 0 && !filters.colors.includes(product.color)) return false

      // Size filter
      if (filters.sizes.length > 0 && product.size && !filters.sizes.includes(product.size)) return false

      // Price range filter
      if (product.priceValue < filters.priceRange[0] || product.priceValue > filters.priceRange[1]) return false

      return true
    })
  }, [products, filters])

  const { dispatch } = useCart()

  const addToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        priceValue: product.priceValue,
        image: product.image,
      },
    })
    dispatch({ type: "OPEN_CART" })
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground cursor-pointer transition-colors">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground font-medium">{breadcrumb}</span>
          </nav>
        </div>
      </div>

      {/* Category Icons */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => updateFilter("category", filters.category === category.name ? null : category.name)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200 border border-border group-hover:scale-105 ${
                    filters.category === category.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-background group-hover:bg-muted/50"
                  }`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <span
                  className={`mt-2 text-sm font-medium transition-colors duration-200 ${
                    filters.category === category.name
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {category.name}
                </span>
              </div>
            ))}
          </div>
          {filters.category && (
            <div className="mt-4 text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary text-primary-foreground">
                Filtrando por: {filters.category}
                <button
                  onClick={() => updateFilter("category", null)}
                  className="ml-2 hover:bg-primary/80 rounded-full p-1 transition-colors"
                >
                  ×
                </button>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{heroTitle}</h1>
          <p className="text-xl opacity-90">{heroSubtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold text-card-foreground">Filtros</h2>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter("price")}
                  className="flex items-center justify-between w-full text-left font-medium text-card-foreground mb-3 hover:text-primary transition-colors"
                >
                  Rango de Precio
                  {openFilters.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openFilters.price && (
                  <div className="space-y-4">
                    <Slider
                      value={filters.priceRange}
                      onValueChange={(value) => updateFilter("priceRange", value as [number, number])}
                      max={3000}
                      min={0}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex gap-2">
                      <Input
                        placeholder="Mín"
                        className="text-sm"
                        value={filters.priceRange[0]}
                        onChange={(e) =>
                          updateFilter("priceRange", [Number.parseInt(e.target.value) || 0, filters.priceRange[1]])
                        }
                      />
                      <Input
                        placeholder="Máx"
                        className="text-sm"
                        value={filters.priceRange[1]}
                        onChange={(e) =>
                          updateFilter("priceRange", [filters.priceRange[0], Number.parseInt(e.target.value) || 3000])
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter("categories")}
                  className="flex items-center justify-between w-full text-left font-medium text-card-foreground mb-3 hover:text-primary transition-colors"
                >
                  Categorías
                  {openFilters.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openFilters.categories && (
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.name}
                          checked={filters.category === category.name}
                          onCheckedChange={(checked) => updateFilter("category", checked ? category.name : null)}
                        />
                        <label
                          htmlFor={category.name}
                          className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Colors */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter("colors")}
                  className="flex items-center justify-between w-full text-left font-medium text-card-foreground mb-3 hover:text-primary transition-colors"
                >
                  Colores
                  {openFilters.colors ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openFilters.colors && (
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => toggleArrayFilter("colors", color.value)}
                        className={`w-8 h-8 rounded-full ${color.color} hover:scale-110 transition-all cursor-pointer shadow-sm hover:shadow-md border-2 ${
                          filters.colors.includes(color.value) ? "border-primary" : "border-transparent"
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Brands */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter("brands")}
                  className="flex items-center justify-between w-full text-left font-medium text-card-foreground mb-3 hover:text-primary transition-colors"
                >
                  Marcas
                  {openFilters.brands ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openFilters.brands && (
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={filters.brands.includes(brand)}
                          onCheckedChange={() => toggleArrayFilter("brands", brand)}
                        />
                        <label
                          htmlFor={brand}
                          className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sizes */}
              {showSizes && sizes.length > 0 && (
                <div className="mb-6">
                  <button
                    onClick={() => toggleFilter("sizes")}
                    className="flex items-center justify-between w-full text-left font-medium text-card-foreground mb-3 hover:text-primary transition-colors"
                  >
                    Tamaños
                    {openFilters.sizes ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openFilters.sizes && (
                    <div className="space-y-2">
                      {sizes.map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <Checkbox
                            id={size}
                            checked={filters.sizes.includes(size)}
                            onCheckedChange={() => toggleArrayFilter("sizes", size)}
                          />
                          <label
                            htmlFor={size}
                            className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                          >
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">Mostrando {filteredProducts.length} productos</p>
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Vista de cuadrícula</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]"
                >
                  <Link href={`/product/${product.id}`}>
                    <div className="aspect-square bg-muted overflow-hidden cursor-pointer">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-medium text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-card-foreground">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    <Button
                      onClick={(e) => addToCart(product, e)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 transition-colors duration-200">
                Mostrar más productos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
