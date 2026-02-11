'use client';

import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function StoneCatalogue() {
  const stoneProducts = [
    {
      id: 'granite',
      name: 'Granite',
      description: 'Natural granite stones with stunning patterns and durability for countertops and flooring.',
    },
    {
      id: 'marble',
      name: 'Marble',
      description: 'Premium marble slabs for elegant surfaces, perfect for luxury interiors and exteriors.',
    },
    {
      id: 'slate',
      name: 'Slate',
      description: 'Textured slate tiles offering rustic charm and exceptional weather resistance.',
    },
    {
      id: 'sandstone',
      name: 'Sandstone',
      description: 'Warm, natural sandstone for traditional and contemporary design applications.',
    },
    {
      id: 'limestone',
      name: 'Limestone',
      description: 'Soft, versatile limestone for creating sophisticated neutral spaces.',
    },
    {
      id: 'travertine',
      name: 'Travertine',
      description: 'Porous, warm-toned travertine perfect for patios and interior accents.',
    },
  ];

  const benefits = [
    'Natural beauty and uniqueness',
    'High durability and longevity',
    'Timeless elegance',
    'Various finishes available',
    'Sustainable choice',
    'Suitable for indoor and outdoor use',
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Stone Catalogue
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our premium selection of natural stone products. Each piece offers unique characteristics and
            timeless beauty for your home and commercial projects.
          </p>
          <div className="mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Stone Catalogue
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stone Types */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Our Stone Selection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stoneProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">#</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <Button
                  variant="outline"
                  className="mt-4 border-accent text-accent hover:bg-accent hover:text-white rounded-lg w-full bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Stone in Action
          </h2>

          <div className="relative h-96 overflow-hidden rounded-lg mb-8 bg-gray-200">
            <Image
              src="/category-stone.jpg"
              alt="Natural stone display"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Natural Stone?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Kitchen countertops and backsplashes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Bathroom flooring and walls</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Exterior cladding and landscaping</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Fireplace surrounds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Accent walls and features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Commercial installations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg border border-border p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 text-center">
            Request Stone Samples
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Interested in our stone products? Contact us to request samples and discuss your project requirements.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              placeholder="Stone Type of Interest"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Describe your project and requirements"
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            <Button className="w-full bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold py-3">
              Request Information
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
