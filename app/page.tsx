'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Instagram } from 'lucide-react';

export default function Home() {
  const categories = [
    {
      id: 'tiles',
      name: 'Tiles',
      description: 'Explore our premium collection of ceramic, porcelain, and decorative tiles',
      image: '/category-tiles.jpg',
      link: '/tiles',
    },
    {
      id: 'stone',
      name: 'Stone',
      description: 'Natural stone products for elegant home and commercial spaces',
      image: '/category-stone.jpg',
      link: '/stone',
    },
    {
      id: 'bathware',
      name: 'Bathware',
      description: 'Complete bathroom solutions with premium fixtures and fittings',
      image: '/category-bathware.jpg',
      link: '/bathware',
    },
  ];

  const contacts = [
    { name: 'Rajesh Gedhar', phone: '9782717511' },
    { name: 'Anil Gedhar', phone: '9772391616' },
    { name: 'Rahul Gedhar', phone: '9587800110' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Video */}
      <section className="w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Video */}
            <div className="w-full">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/phauCwD_Hrk"
                  title="Gedhar Steel Showroom Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Hero Text and CTA */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-primary mb-4 text-balance">
                Premium Tiles & Bathware Collection
              </h1>
              <p className="text-lg md:text-lg text-gray-600 mb-8 leading-relaxed text-balance">
                Welcome to Gedhar Steel Sturring & Building Material Store - your one-stop destination for premium tiles, natural stone, and luxury bathware. Watch our showroom tour and discover the finest quality products for your dream home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tiles">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold"
                  >
                    View Catalogue
                  </Button>
                </Link>
                <a href="https://wa.me/919587800110" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-accent hover:bg-gray-100 border-accent rounded-lg font-semibold border-2"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Featured Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections of premium products for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={category.link}>
                <div className="group cursor-pointer">
                  <div className="relative h-64 md:h-72 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-4 inline-block">
                    <span className="text-accent font-semibold text-sm hover:underline">
                      Explore {category.name} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Why Choose Gedhar Steel Sturring & Building Material Store
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Only the finest materials sourced from trusted manufacturers across India
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Expert Consultation</h3>
              <p className="text-gray-600">
                Our experienced team provides personalized guidance for your project needs
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Best prices without compromising on quality or service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Quick Access */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-primary mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
                <Button className="w-full bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-primary text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent" />
                    Phone Numbers
                  </h4>
                  <div className="space-y-2 text-sm text-gray-100">
                    {contacts.map((contact) => (
                      <a
                        key={contact.phone}
                        href={`tel:+91${contact.phone}`}
                        className="block hover:text-accent transition-colors"
                      >
                        {contact.name}: {contact.phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-accent" />
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/919587800110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-accent transition-colors"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Instagram className="w-5 h-5 text-accent" />
                    Instagram
                  </h4>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-accent transition-colors"
                  >
                    @gedharsteel
                  </a>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-300">
                    Located in Bikaner, India - Serving quality products across the region
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/CTA */}
      <section className="py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our complete catalogues and discover the perfect products for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tiles">
              <Button className="bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold px-8">
                View All Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold px-8 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
