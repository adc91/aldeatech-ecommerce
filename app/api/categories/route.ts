import jsonDbService from '@/src/lib/json-database'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const categories = jsonDbService.getCategories()

		return NextResponse.json({
			success: true,
			data: categories
		})
	} catch (error) {
		console.error('Error fetching categories:', error)

		return NextResponse.json({
			success: false,
			error: 'Failed to fetch categories'
		}, { status: 500 })
	}
}
