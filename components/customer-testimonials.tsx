"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Absolutely love my new smartphone! The delivery was super fast and the product quality exceeded my expectations. Will definitely shop here again.",
    avatar: "/professional-woman-smiling.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment:
      "The smart TV I ordered arrived perfectly packaged. Setup was easy and the picture quality is amazing. Great customer service too!",
    avatar: "/professional-man-smiling.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    comment:
      "Great selection of products and competitive prices. The website is easy to navigate and checkout was seamless. Highly recommend!",
    avatar: "/young-woman-smiling.png",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    comment:
      "Outstanding experience from start to finish. The product arrived exactly as described and the quality is top-notch. Five stars!",
    avatar: "/middle-aged-man-smiling.png",
  },
]

export function CustomerTestimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="font-source text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their shopping
            experience.
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
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-source font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-source text-gray-600 text-sm leading-relaxed">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
