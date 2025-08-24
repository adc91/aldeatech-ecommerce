export interface CartItem {
	id: number
	name: string
	price: string
	priceValue: number
	image: string
	quantity: number
}

export interface CartState {
	items: CartItem[]
	isOpen: boolean
}

export type CartAction =
	| { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
	| { type: "REMOVE_ITEM"; payload: number }
	| { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
	| { type: "CLEAR_CART" }
	| { type: "TOGGLE_CART" }
	| { type: "OPEN_CART" }
	| { type: "CLOSE_CART" }