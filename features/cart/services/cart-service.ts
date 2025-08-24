import type { CartItem } from '../types'

export class CartService {
	/**
	 * Calculate subtotal for cart items
	 */
	static calculateSubtotal(items: CartItem[]): number {
		return items.reduce((total, item) => total + (item.priceValue * item.quantity), 0)
	}

	/**
	 * Calculate tax amount (10% default)
	 */
	static calculateTax(subtotal: number, taxRate: number = 0.10): number {
		return subtotal * taxRate
	}

	/**
	 * Calculate shipping cost (free if over threshold)
	 */
	static calculateShipping(subtotal: number, freeShippingThreshold: number = 100000): number {
		return subtotal >= freeShippingThreshold ? 0 : 5000
	}

	/**
	 * Calculate total cost including tax and shipping
	 */
	static calculateTotal(items: CartItem[]): {
		subtotal: number
		tax: number
		shipping: number
		total: number
	} {
		const subtotal = this.calculateSubtotal(items)
		const tax = this.calculateTax(subtotal)
		const shipping = this.calculateShipping(subtotal)
		const total = subtotal + tax + shipping

		return {
			subtotal,
			tax,
			shipping,
			total
		}
	}

	/**
	 * Get total item count in cart
	 */
	static getItemCount(items: CartItem[]): number {
		return items.reduce((total, item) => total + item.quantity, 0)
	}

	/**
	 * Format price for display
	 */
	static formatPrice(price: number): string {
		return new Intl.NumberFormat('es-PY', {
			style: 'currency',
			currency: 'PYG',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(price)
	}
}