'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const categories = [
    {
        id: 1,
        title: 'Electrónica',
        image: '/modern-electronics.png',
        description: 'Los últimos gadgets tecnológicos',
        href: '/electronics',
    },
    {
        id: 2,
        title: 'Moda',
        image: '/placeholder-47rjg.png',
        description: 'Ropa a la moda',
        href: '/fashion',
    },
    {
        id: 3,
        title: 'Hogar y Jardín',
        image: '/placeholder-e4k49.png',
        description: 'Decoración y esenciales',
        href: '/home-garden',
    },
    {
        id: 4,
        title: 'Deportes',
        image: '/assorted-fitness-gear.png',
        description: 'Fitness y actividades al aire libre',
        href: '/sports',
    },
    {
        id: 5,
        title: 'Libros',
        image: '/placeholder-fwjby.png',
        description: 'Conocimiento e historias',
        href: '/books',
    },
    {
        id: 6,
        title: 'Belleza',
        image: '/beauty-cosmetics-skincare.png',
        description: 'Cuidado de la piel y maquillaje',
        href: '/beauty',
    },
];

export function FeaturedCategories() {
    return (
        <section className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    Categorías Destacadas
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Descubre nuestras categorías de productos más populares y
                    encuentra exactamente lo que buscas
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <Link key={category.id} href={category.href}>
                        <Card
                            className={cn(
                                'group cursor-pointer overflow-hidden border-border',
                                'transition-all duration-300 ease-in-out',
                                'hover:scale-105 hover:shadow-lg hover:shadow-primary/10'
                            )}
                        >
                            <CardContent className="p-0">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={
                                            category.image || '/placeholder.svg'
                                        }
                                        alt={category.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-accent mb-2 group-hover:text-primary transition-colors duration-300">
                                        {category.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {category.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
