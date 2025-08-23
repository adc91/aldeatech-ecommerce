"use client"

import { useState } from "react"
import { Search, User, ShoppingCart, Menu, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCartModal } from "./shopping-cart-modal"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export function ECommerceHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state, dispatch } = useCart()

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="w-full">
      {/* Main Header */}
      <header className="bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          {/* Desktop Layout */}
          <div className="flex items-center justify-between gap-8">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/aldeatech-logo-ecommerce.png"
                  alt="AldeaTech"
                  className="h-10 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Buscar productos..."
                  className="pl-10 pr-4 py-3 w-full bg-input border-border focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg text-base"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-muted">
                <User className="h-5 w-5" />
                <span className="sr-only">Cuenta</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-muted relative"
                onClick={() => dispatch({ type: "TOGGLE_CART" })}
              >
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
                <span className="sr-only">Carrito</span>
              </Button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-4">
              <Link href="/">
                <img
                  src="/aldeatech-logo-mobile.png"
                  alt="AldeaTech"
                  className="h-8 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="p-2">
                  <User className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 relative"
                  onClick={() => dispatch({ type: "TOGGLE_CART" })}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Button>
              </div>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="pl-10 pr-4 py-3 w-full bg-input border-border focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg text-base"
              />
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-center gap-8 py-3">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Tienda
            </Link>
            <Link href="/electronics" className="text-foreground hover:text-primary transition-colors font-medium">
              Electrónica
            </Link>
            <Link href="/deportes" className="text-foreground hover:text-primary transition-colors font-medium">
              Deportes
            </Link>
            <Link href="/automotriz" className="text-foreground hover:text-primary transition-colors font-medium">
              Automotriz
            </Link>
            <Link href="/muebles" className="text-foreground hover:text-primary transition-colors font-medium">
              Muebles
            </Link>
            <Link href="/ofertas" className="text-foreground hover:text-primary transition-colors font-medium">
              Ofertas
            </Link>
            <Link href="/sobre-aldeatech" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre Nosotros
            </Link>
            <Link href="/contactanos" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </Link>
            <Link
              href="/preguntas-frecuentes"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full justify-between py-3"
            >
              <span>Menú</span>
              <Menu className="h-5 w-5" />
            </Button>

            {isMenuOpen && (
              <div className="pb-4">
                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4">
                    Tienda
                  </Link>
                  <Link
                    href="/electronics"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4"
                  >
                    Electrónica
                  </Link>
                  <Link
                    href="/deportes"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4"
                  >
                    Deportes
                  </Link>
                  <Link
                    href="/automotriz"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4"
                  >
                    Automotriz
                  </Link>
                  <Link
                    href="/muebles"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4"
                  >
                    Muebles
                  </Link>
                  <Link
                    href="/ofertas"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4"
                  >
                    Ofertas
                  </Link>
                  <Link
                    href="/sobre-aldeatech"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4"
                  >
                    Sobre Nosotros
                  </Link>
                  <Link
                    href="/contactanos"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4"
                  >
                    Contacto
                  </Link>
                  <Link
                    href="/preguntas-frecuentes"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="bg-muted text-muted-foreground py-3 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <Truck className="h-4 w-4" />
          <span>Envíos a nivel local e internacional</span>
        </div>
      </div>

      <ShoppingCartModal isOpen={state.isOpen} onClose={() => dispatch({ type: "CLOSE_CART" })} />
    </div>
  )
}
