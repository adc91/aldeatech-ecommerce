"use client"
import Link from "next/link"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

interface ShoppingCartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ShoppingCartModal({ isOpen, onClose }: ShoppingCartModalProps) {
  const { state, dispatch } = useCart()

  if (!isOpen) return null

  const categories = [
    { name: "Electrónica", image: "/electronics-components.png", href: "/electronics" },
    { name: "Televisores", image: "/vintage-television.png", href: "/televisores" },
    { name: "Consolas", image: "/modern-gaming-console.png", href: "/consolas" },
    { name: "Celulares", image: "/modern-smartphone.png", href: "/celulares" },
    { name: "Calzados Deportivos", image: "/diverse-sports-shoes.png", href: "/calzados-deportivos" },
    { name: "Muebles", image: "/assorted-living-room-furniture.png", href: "/muebles" },
    { name: "Deportes", image: "/assorted-sports-gear.png", href: "/deportes" },
    { name: "Automotriz", image: "/car-accessories-display.png", href: "/automotriz" },
  ]

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.priceValue * item.quantity, 0)
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />

      {/* Modal/Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <h2 className="font-playfair text-xl font-semibold text-foreground">Tu Carrito</h2>
              {state.items.length > 0 && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-2 hover:bg-muted rounded-full">
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar carrito</span>
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {state.items.length > 0 ? (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg">
                    <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-foreground line-clamp-2 mb-1">{item.name}</h4>
                      <p className="text-sm font-semibold text-foreground mb-2">{item.price}</p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10 ml-auto"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Cart Summary */}
                <div className="border-t border-border pt-4 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-foreground">Total:</span>
                    <span className="font-bold text-lg text-foreground">${getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty Cart State */
              <div className="text-center mb-8">
                <h3 className="font-source-sans text-lg font-medium text-foreground mb-2">Tu carrito está vacío</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  ¿No estás seguro de tu compra? Explora estas opciones interesantes.
                </p>

                {/* Category Suggestions */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {categories.map((category, index) => (
                    <Link key={index} href={category.href} onClick={onClose}>
                      <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 cursor-pointer group">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-muted border border-border group-hover:scale-105 transition-transform duration-200">
                          <img
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors duration-200">
                          {category.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border space-y-3">
            {state.items.length > 0 ? (
              <>
                <Link href="/carrito" onClick={onClose}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3">
                    Ver carrito completo
                  </Button>
                </Link>
                <Button variant="outline" onClick={onClose} className="w-full font-medium py-3 bg-transparent">
                  Continuar comprando
                </Button>
              </>
            ) : (
              <Button
                onClick={onClose}
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium py-3"
              >
                Continuar comprando
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
