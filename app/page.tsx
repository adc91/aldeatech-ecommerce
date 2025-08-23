import { ECommerceHeader } from '@/components/e-commerce-header';
import { HeroCarousel } from '@/components/hero-carousel';
import { FeaturedCategories } from '@/components/featured-categories';
import { FeaturedProducts } from '@/components/featured-products';
import { PromotionalBlocks } from '@/components/promotional-blocks';
import { CustomerTestimonials } from '@/components/customer-testimonials';
import { FAQSection } from '@/components/faq-section';
import { ECommerceFooter } from '@/components/e-commerce-footer';

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
