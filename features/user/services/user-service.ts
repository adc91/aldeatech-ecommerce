import type { User, UserAddress, UserPreferences } from '../types'

export class UserService {
	/**
	 * Get default shipping address for user
	 */
	static getDefaultShippingAddress(user: User): UserAddress | undefined {
		return user.addresses.find(address => 
			address.type === 'shipping' && address.isDefault
		)
	}

	/**
	 * Get default billing address for user
	 */
	static getDefaultBillingAddress(user: User): UserAddress | undefined {
		return user.addresses.find(address => 
			address.type === 'billing' && address.isDefault
		)
	}

	/**
	 * Get all addresses of specific type
	 */
	static getAddressesByType(user: User, type: 'shipping' | 'billing'): UserAddress[] {
		return user.addresses.filter(address => address.type === type)
	}

	/**
	 * Format address for display
	 */
	static formatAddress(address: UserAddress): string {
		return `${address.street}, ${address.city}, ${address.state} ${address.postalCode}, ${address.country}`
	}

	/**
	 * Update user preferences
	 */
	static updatePreferences(currentPrefs: UserPreferences, updates: Partial<UserPreferences>): UserPreferences {
		return {
			...currentPrefs,
			...updates,
			notifications: {
				...currentPrefs.notifications,
				...updates.notifications
			}
		}
	}

	/**
	 * Validate email format
	 */
	static isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	/**
	 * Get user display name
	 */
	static getDisplayName(user: User): string {
		return user.name || user.email.split('@')[0]
	}
}