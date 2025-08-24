export interface User {
	id: string
	email: string
	name: string
	avatar?: string
	createdAt: Date
	updatedAt: Date
	preferences: UserPreferences
	addresses: UserAddress[]
}

export interface UserPreferences {
	theme: 'light' | 'dark' | 'system'
	language: 'es' | 'en'
	currency: 'PYG' | 'USD'
	notifications: {
		email: boolean
		push: boolean
		sms: boolean
	}
}

export interface UserAddress {
	id: string
	type: 'shipping' | 'billing'
	name: string
	street: string
	city: string
	state: string
	postalCode: string
	country: string
	phone?: string
	isDefault: boolean
}