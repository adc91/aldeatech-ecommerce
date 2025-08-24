import { CustomerTestimonials } from '@/components/marketing/customer-testimonials';
import { ECommerceFooter } from '@/components/common/footer';
import { ECommerceHeader } from '@/components/common/header';
import { FAQSection } from '@/components/common/faq-section';
import { FeaturedCategories } from '@/features/products/components/featured-categories';
import { FeaturedProducts } from '@/features/products/components/featured-products';
import { HeroCarousel } from '@/components/marketing/hero-carousel';
import { PromotionalBlocks } from '@/components/marketing/promotional-blocks';

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background">
			<ECommerceHeader />
			<main>
				{/* Hero Section */}
				<section className="max-w-6xl mx-auto px-4 py-8">
					<HeroCarousel />
				</section>

				{/* Featured Sections */}
				<div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
					<FeaturedCategories />
					<FeaturedProducts />
				</div>

				<PromotionalBlocks />

				<CustomerTestimonials />

				<FAQSection />
			</main>

			<ECommerceFooter />
		</div>
	);
}
