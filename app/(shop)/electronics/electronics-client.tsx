"use client"

import { CategoryPageTemplate } from "@/features/products/components/category-page-template"
import { useEffect, useState } from "react"
import type { ProductDisplay, Color, ApiResponse } from "@/src/types"

const categories = [
	{ name: "Smartphones", icon: "📱", href: "/electronics" },
	{ name: "Laptops", icon: "💻", href: "/electronics" },
	{ name: "Audio", icon: "🎧", href: "/electronics" },
	{ name: "Gaming", icon: "🎮", href: "/electronics" },
	{ name: "Cámaras", icon: "📷", href: "/electronics" },
	{ name: "Otros", icon: "⚡", href: "/electronics" },
]

const sizes = ["Pequeño", "Mediano", "Grande", "Extra Grande"]

export function ElectronicsClient() {
	const [products, setProducts] = useState<ProductDisplay[]>([])
	const [brands, setBrands] = useState<string[]>([])
	const [colors, setColors] = useState<Color[]>([])
	const [loading, setLoading] = useState(true)
	const [loadingMore, setLoadingMore] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [hasMore, setHasMore] = useState(false)
	const [currentOffset, setCurrentOffset] = useState(0)
	const [totalProducts, setTotalProducts] = useState(0)

	useEffect(() => {
		const fetchInitialData = async () => {
			try {
				setLoading(true)

				// Fetch initial products (limit 9), brands, and colors in parallel
				const [productsRes, brandsRes, colorsRes] = await Promise.all([
					fetch('/api/products?category=electronics&limit=9&offset=0'),
					fetch('/api/brands?category=electronics'),
					fetch('/api/colors?category=electronics')
				])

				if (!productsRes.ok || !brandsRes.ok || !colorsRes.ok) {
					throw new Error('Failed to fetch data')
				}

				const [productsData, brandsData, colorsData] = await Promise.all([
					productsRes.json() as Promise<ApiResponse<ProductDisplay[]>>,
					brandsRes.json() as Promise<ApiResponse<string[]>>,
					colorsRes.json() as Promise<ApiResponse<Color[]>>
				])

				if (!productsData.success || !brandsData.success || !colorsData.success) {
					throw new Error('API returned error response')
				}

				setProducts(productsData.data)
				setBrands(brandsData.data)
				setColors(colorsData.data)
				setHasMore(productsData.hasMore)
				setCurrentOffset(9) // Next offset will be 9
				setTotalProducts(productsData.total)
			} catch (err) {
				console.error('Error fetching electronics data:', err)
				setError(err instanceof Error ? err.message : 'Unknown error occurred')
			} finally {
				setLoading(false)
			}
		}

		fetchInitialData()
	}, [])

	const loadMoreProducts = async () => {
		try {
			setLoadingMore(true)

			const response = await fetch(`/api/products?category=electronics&limit=6&offset=${currentOffset}`)
			
			if (!response.ok) {
				throw new Error('Failed to fetch more products')
			}

			const data = await response.json() as ApiResponse<ProductDisplay[]>

			if (!data.success) {
				throw new Error('API returned error response')
			}

			setProducts(prev => [...prev, ...data.data])
			setHasMore(data.hasMore)
			setCurrentOffset(prev => prev + 6)
		} catch (err) {
			console.error('Error loading more products:', err)
			setError(err instanceof Error ? err.message : 'Error loading more products')
		} finally {
			setLoadingMore(false)
		}
	}

	if (loading) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="text-center">
					<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
					<p className="mt-4 text-lg text-gray-600">Cargando productos de electrónica...</p>
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="text-center">
					<p className="text-lg text-red-600">Error: {error}</p>
					<button
						onClick={() => window.location.reload()}
						className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
					>
						Reintentar
					</button>
				</div>
			</div>
		)
	}

	return (
		<CategoryPageTemplate
			title="Electrónica"
			breadcrumb="Electrónica"
			heroTitle="Descubre nuestra variedad de productos de electrónica"
			heroSubtitle="Encuentra la tecnología más avanzada al mejor precio"
			categories={categories}
			products={products}
			brands={brands}
			colors={colors}
			sizes={sizes}
			showSizes={true}
			hasMore={hasMore}
			loadingMore={loadingMore}
			onLoadMore={loadMoreProducts}
			totalProducts={totalProducts}
		/>
	)
}
