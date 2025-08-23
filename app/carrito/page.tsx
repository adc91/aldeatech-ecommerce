"use client"

import { ECommerceFooter } from "@/components/e-commerce-footer"
import { ECommerceHeader } from "@/components/e-commerce-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
	const { state, dispatch } = useCart()

	const updateQuantity = (id: number, quantity: number) => {
		dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
	}

	const removeItem = (id: number) => {
		dispatch({ type: "REMOVE_ITEM", payload: id })
	}

	const getTotalPrice = () => {
		return state.items.reduce((total, item) => total + item.priceValue * item.quantity, 0)
	}

	const getSubtotal = () => {
		return getTotalPrice()
	}

	const getShipping = () => {
		return getTotalPrice() > 100000 ? 0 : 15000 // Free shipping over $100,000
	}

	const getTaxes = () => {
		return Math.round(getTotalPrice() * 0.19) // 19% tax
	}

	const getFinalTotal = () => {
		return getSubtotal() + getShipping() + getTaxes()
	}

	return (
		<div className="min-h-screen bg-background">
			<ECommerceHeader />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Breadcrumb */}
				<nav className="text-sm text-muted-foreground mb-8">
					<Link href="/" className="hover:text-foreground cursor-pointer transition-colors">
						Home
					</Link>
					<span className="mx-2">&gt;</span>
					<span className="text-foreground font-medium">Carrito de Compras</span>
				</nav>

				<div className="flex items-center gap-3 mb-8">
					<ShoppingBag className="w-8 h-8 text-primary" />
					<h1 className="text-3xl font-bold text-foreground">Tu Carrito</h1>
				</div>

				{state.items.length === 0 ? (
					/* Empty Cart State */
					<div className="text-center py-16">
						<ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
						<h2 className="text-2xl font-semibold text-foreground mb-4">Tu carrito está vacío</h2>
						<p className="text-muted-foreground mb-8 max-w-md mx-auto">
							Parece que no has agregado ningún producto a tu carrito. ¡Explora nuestras categorías y encuentra algo
							increíble!
						</p>
						<Link href="/">
							<Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
								<ArrowLeft className="w-4 h-4 mr-2" />
								Continuar Comprando
							</Button>
						</Link>
					</div>
				) : (
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Cart Items */}
						<div className="lg:col-span-2">
							<div className="bg-card border border-border rounded-lg overflow-hidden">
								{/* Table Header */}
								<div className="bg-muted/50 px-6 py-4 border-b border-border">
									<div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
										<div className="col-span-6">Producto</div>
										<div className="col-span-2 text-center">Precio</div>
										<div className="col-span-2 text-center">Cantidad</div>
										<div className="col-span-2 text-center">Subtotal</div>
									</div>
								</div>

								{/* Cart Items */}
								<div className="divide-y divide-border">
									{state.items.map((item) => (
										<div key={item.id} className="p-6">
											<div className="grid grid-cols-12 gap-4 items-center">
												{/* Product Info */}
												<div className="col-span-6 flex gap-4">
													<div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
														<img
															src={item.image || "/placeholder.svg"}
															alt={item.name}
															className="w-full h-full object-cover"
														/>
													</div>
													<div className="flex-1 min-w-0">
														<h3 className="font-medium text-foreground line-clamp-2 mb-1">{item.name}</h3>
														<Button
															variant="ghost"
															size="sm"
															onClick={() => removeItem(item.id)}
															className="text-destructive hover:text-destructive hover:bg-destructive/10 p-0 h-auto font-normal"
														>
															<Trash2 className="w-4 h-4 mr-1" />
															Eliminar
														</Button>
													</div>
												</div>

												{/* Price */}
												<div className="col-span-2 text-center">
													<span className="font-semibold text-foreground">{item.price}</span>
												</div>

												{/* Quantity */}
												<div className="col-span-2 flex items-center justify-center gap-2">
													<Button
														variant="outline"
														size="sm"
														onClick={() => updateQuantity(item.id, item.quantity - 1)}
														className="h-8 w-8 p-0"
													>
														<Minus className="h-3 w-3" />
													</Button>
													<Input
														type="number"
														value={item.quantity}
														onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
														className="w-16 text-center h-8"
														min="1"
													/>
													<Button
														variant="outline"
														size="sm"
														onClick={() => updateQuantity(item.id, item.quantity + 1)}
														className="h-8 w-8 p-0"
													>
														<Plus className="h-3 w-3" />
													</Button>
												</div>

												{/* Subtotal */}
												<div className="col-span-2 text-center">
													<span className="font-semibold text-foreground">
														${(item.priceValue * item.quantity).toLocaleString()}
													</span>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Continue Shopping */}
							<div className="mt-6">
								<Link href="/">
									<Button variant="outline" className="flex items-center gap-2 bg-transparent">
										<ArrowLeft className="w-4 h-4" />
										Seguir Comprando
									</Button>
								</Link>
							</div>
						</div>

						{/* Cart Summary */}
						<div className="lg:col-span-1">
							<div className="bg-card border border-border rounded-lg p-6 sticky top-4">
								<h2 className="text-xl font-semibold text-foreground mb-6">Resumen del Pedido</h2>

								<div className="space-y-4 mb-6">
									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground">
											Subtotal ({state.items.reduce((total, item) => total + item.quantity, 0)} productos)
										</span>
										<span className="font-medium text-foreground">${getSubtotal().toLocaleString()}</span>
									</div>

									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground">Envío</span>
										<span className="font-medium text-foreground">
											{getShipping() === 0 ? "Gratis" : `$${getShipping().toLocaleString()}`}
										</span>
									</div>

									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground">Impuestos (19%)</span>
										<span className="font-medium text-foreground">${getTaxes().toLocaleString()}</span>
									</div>

									<div className="border-t border-border pt-4">
										<div className="flex justify-between">
											<span className="text-lg font-semibold text-foreground">Total</span>
											<span className="text-lg font-bold text-primary">${getFinalTotal().toLocaleString()}</span>
										</div>
									</div>
								</div>

								{getShipping() === 0 && (
									<div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
										<p className="text-sm text-green-800 font-medium">
											🎉 ¡Envío gratis! Has alcanzado el mínimo de $100,000
										</p>
									</div>
								)}

								<Link href="/checkout">
									<Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-medium">
										Proceder al Checkout
									</Button>
								</Link>

								<div className="mt-4 text-center">
									<p className="text-xs text-muted-foreground">Compra segura con encriptación SSL</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			<ECommerceFooter />
		</div>
	)
}
