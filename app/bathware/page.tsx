'use client';

import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function BathwareCatalogue() {
  const categories = [
    {
      name: 'Wash Basins',
      description: 'Modern and classic wash basins in various styles, materials, and finishes for every bathroom aesthetic.',
      items: ['Ceramic Basins', 'Stone Basins', 'Glass Basins', 'Wall-mounted', 'Countertop'],
    },
    {
      name: 'Faucets',
      description: 'Premium quality faucets with innovative designs, smooth operation, and water-efficient technology.',
      items: ['Chrome Finish', 'Matte Black', 'Brushed Nickel', 'Single Handle', 'Double Handle'],
    },
    {
      name: 'Sanitary Ware',
      description: 'High-quality toilets, bidets, and related fixtures designed for comfort and durability.',
      items: ['Water Closets', 'Bidets', 'Urinals', 'Cisterns', 'Seats & Covers'],
    },
    {
      name: 'Bathroom Fittings',
      description: 'Complete range of accessories and fittings to complete your bathroom setup.',
      items: ['Towel Racks', 'Soap Dispensers', 'Mirrors', 'Shelving', 'Hooks & Holders'],
    },
  ];

  const features = [
    { title: 'Premium Quality', description: 'Top-grade materials for durability and longevity' },
    { title: 'Modern Design', description: 'Contemporary styles that complement any bathroom aesthetic' },
    { title: 'Water Efficiency', description: 'Eco-friendly fixtures that reduce water consumption' },
    { title: 'Easy Installation', description: 'Designed for straightforward installation and maintenance' },
    { title: 'Warranty Coverage', description: 'Comprehensive warranties on all products' },
    { title: 'Expert Support', description: 'Professional guidance for selection and installation' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Bathware Catalogue
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Transform your bathroom with our comprehensive selection of premium bathware products. From sinks to
            fixtures, discover quality solutions for modern living.
          </p>
          <div className="mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Bathware Catalogue
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Product Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg border border-border p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{category.description}</p>

                <div className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white rounded-lg w-full bg-transparent"
                >
                  View {category.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Image */}
      <section className="py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 overflow-hidden rounded-lg mb-12 bg-gray-200">
            <Image
              src="/category-bathware.jpg"
              alt="Premium bathware collection"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Complete Bathroom Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create your perfect bathroom with our curated selection of fixtures and accessories that combine style,
              functionality, and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Why Our Bathware
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg border border-border p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 text-center">
            Plan Your Bathroom
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Contact our experts for personalized recommendations based on your space and preferences.
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
            <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="">Select Product Category of Interest</option>
              <option value="basins">Wash Basins</option>
              <option value="faucets">Faucets</option>
              <option value="sanitary">Sanitary Ware</option>
              <option value="fittings">Bathroom Fittings</option>
              <option value="complete">Complete Bathroom Solution</option>
            </select>
            <textarea
              placeholder="Describe your bathroom project and requirements"
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            <Button className="w-full bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold py-3">
              Request Consultation
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
