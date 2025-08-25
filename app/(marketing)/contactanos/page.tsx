"use client"

import { ECommerceFooter } from '@/components/common/footer';
import { ECommerceHeader } from '@/components/common/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Clock,
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const contactSchema = z.object({
	name: z
		.string()
		.min(1, "El nombre es requerido")
		.min(3, "El nombre debe tener al menos 3 caracteres"),
	email: z
		.string()
		.min(1, "El correo electrónico es requerido")
		.email("El correo electrónico no es válido"),
	phone: z
		.string()
		.optional()
		.refine((val) => {
			if (!val) return true; // Optional
			const phoneRegex = /^\+595\d{9}$/;
			return phoneRegex.test(val);
		}, "El formato debe ser +5959 XX XXX XXX (sin espacios)"),
	message: z
		.string()
		.min(1, "El mensaje es requerido")
		.min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		try {
			// Simulate form submission
			console.log('Datos del formulario:', data);
			await new Promise(resolve => setTimeout(resolve, 2000));

			// Reset form after successful submission
			reset();
			toast.success('Mensaje enviado correctamente');
		} catch (error) {
			console.error('Error al enviar el formulario:', error);
		}
	};
	return (
		<div className="min-h-screen bg-gray-50">
			<ECommerceHeader />

			{/* Breadcrumb */}
			<div className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
					<nav className="text-sm text-gray-600">
						<span>Inicio</span> <span className="mx-2">{'>'}</span>{' '}
						<span className="text-gray-900">Contactanos</span>
					</nav>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Contactanos
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Estamos aquí para ayudarte. Ponte en contacto con
						nosotros y te responderemos lo antes posible.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="bg-white rounded-lg shadow-lg p-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-6">
							Envíanos un mensaje
						</h2>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Nombre completo
								</label>
								<Input
									id="name"
									type="text"
									placeholder="Tu nombre completo"
									{...register('name')}
									className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
								)}
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Correo electrónico
								</label>
								<Input
									id="email"
									type="email"
									placeholder="tu@email.com"
									{...register('email')}
									className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
								)}
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Teléfono (opcional)
								</label>
								<Input
									id="phone"
									type="tel"
									placeholder="+595971746382"
									{...register('phone')}
									className={errors.phone ? 'border-red-500 focus:border-red-500' : ''}
								/>
								{errors.phone && (
									<p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
								)}
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Mensaje
								</label>
								<Textarea
									id="message"
									rows={5}
									placeholder="Cuéntanos cómo podemos ayudarte..."
									{...register('message')}
									className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
								/>
								{errors.message && (
									<p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
								)}
							</div>
							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
							</Button>
						</form>
					</div>

					{/* Contact Information */}
					<div className="space-y-8">
						<div className="bg-white rounded-lg shadow-lg p-8">
							<h2 className="text-2xl font-semibold text-gray-900 mb-6">
								Información de contacto
							</h2>
							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<Phone className="h-5 w-5 text-emerald-600" />
									<span className="text-gray-700">
										+595 21 XXX XXX
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<Mail className="h-5 w-5 text-emerald-600" />
									<span className="text-gray-700">
										hola@aldeatech.co
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<MapPin className="h-5 w-5 text-emerald-600" />
									<span className="text-gray-700">
										Asunción, Paraguay
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<Clock className="h-5 w-5 text-emerald-600" />
									<div className="text-gray-700">
										<div>Lunes - Viernes: 8:00 - 18:00</div>
										<div>Sábados: 8:00 - 12:00</div>
									</div>
								</div>
							</div>
						</div>

						{/* Map Placeholder */}
						<div className="bg-white rounded-lg shadow-lg p-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Nuestra ubicación
							</h3>
							<div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
								<div className="text-center text-gray-500">
									<MapPin className="h-12 w-12 mx-auto mb-2" />
									<p>Mapa interactivo</p>
									<p className="text-sm">
										Asunción, Paraguay
									</p>
								</div>
							</div>
						</div>

						{/* Social Media */}
						<div className="bg-white rounded-lg shadow-lg p-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Síguenos
							</h3>
							<div className="flex space-x-4">
								<a
									href="#"
									className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
								>
									<Facebook className="h-5 w-5" />
								</a>
								<a
									href="#"
									className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
								>
									<Instagram className="h-5 w-5" />
								</a>
								<a
									href="#"
									className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
								>
									<Twitter className="h-5 w-5" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ECommerceFooter />
		</div>
	);
}

