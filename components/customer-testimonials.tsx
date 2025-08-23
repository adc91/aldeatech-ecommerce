'use client';

import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        rating: 5,
        comment:
            '¡Me encanta mi nuevo smartphone! La entrega fue súper rápida y la calidad del producto superó mis expectativas. Definitivamente volveré a comprar aquí.',
        avatar: '/professional-woman-smiling.png',
    },
    {
        id: 2,
        name: 'Michael Chen',
        rating: 5,
        comment:
            'El televisor inteligente que pedí llegó perfectamente empaquetado. La configuración fue fácil y la calidad de imagen es increíble. ¡Excelente servicio al cliente también!',
        avatar: '/professional-man-smiling.png',
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        rating: 4,
        comment:
            'Gran selección de productos y precios competitivos. El sitio web es fácil de navegar y el proceso de pago fue perfecto. ¡Muy recomendable!',
        avatar: '/young-woman-smiling.png',
    },
    {
        id: 4,
        name: 'David Thompson',
        rating: 5,
        comment:
            'Una experiencia excepcional de principio a fin. El producto llegó exactamente como se describía y la calidad es de primera. ¡Cinco estrellas!',
        avatar: '/middle-aged-man-smiling.png',
    },
];

export function CustomerTestimonials() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <p className="font-source text-lg text-gray-600 max-w-2xl mx-auto">
                        No solo confíes en nuestra palabra. Esto es lo que
                        nuestros clientes satisfechos tienen que decir sobre su
                        experiencia de compra.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.id}
                            className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={
                                            testimonial.avatar ||
                                            '/placeholder.svg'
                                        }
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-source font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        <div className="flex items-center mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${
                                                        i < testimonial.rating
                                                            ? 'text-yellow-400 fill-current'
                                                            : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="font-source text-gray-600 text-sm leading-relaxed">
                                    "{testimonial.comment}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
