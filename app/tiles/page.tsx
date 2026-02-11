'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function TilesCatalogue() {
  const collections = [
    {
      id: 'petrozza',
      name: 'Petrozza Collection',
      description: 'Elegant marble-effect tiles with sophisticated grey and white tones. Perfect for modern and contemporary spaces.',
      image: '/petrozza-collection.jpg',
    },
    {
      id: 'monochroma',
      name: 'Monochroma Collection',
      description: 'Minimalist black and white tiles for bold, contemporary design statements. Ideal for creating visual impact.',
      image: '/monochroma-collection.jpg',
    },
    {
      id: 'mini',
      name: 'Mini Collection',
      description: 'Compact and versatile tiles perfect for detailed work and accent pieces in any space.',
      image: '/category-tiles.jpg',
    },
    {
      id: 'forma',
      name: 'Forma Collection',
      description: 'Geometric patterns and modern designs for contemporary interior spaces.',
      image: '/category-tiles.jpg',
    },
    {
      id: 'combina',
      name: 'Combina Collection',
      description: 'Mixed textures and patterns that combine seamlessly for unique design possibilities.',
      image: '/category-tiles.jpg',
    },
  ];

  const sizeCategories = [
    {
      title: 'Large Format',
      description: 'Statement-making oversized tiles for modern minimalist designs',
      sizes: [
        '800×3200 Applicco',
        '800×2600 (Fullbody, Matt, Glossy, Colorbody)',
      ],
      image: '/large-format-tiles.jpg',
    },
    {
      title: 'Standard Sizes',
      description: 'Versatile and popular sizes for bathrooms, kitchens, and living spaces',
      sizes: [
        '600×1200 (Gloss, High Gloss, Rocker, Rustic, Matt)',
        '800×1600 (Gloss, High Gloss, Uniglow)',
        '1200×1800 (Dura, Reflecto, Feather, Orra, Matt)',
      ],
      image: '/standard-size-tiles.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Tiles Catalogue
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore our extensive collection of premium ceramic and porcelain tiles. From classic designs to contemporary
            statements, find the perfect tiles for your project.
          </p>
          <div className="mt-6">
            <a href="https://varmora.com/tiles-catalogue/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Catalogue on Varmora.com
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Featured Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="group">
                <div className="relative h-72 overflow-hidden rounded-lg mb-4 bg-gray-200">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{collection.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white rounded-lg bg-transparent"
                >
                  View Brochure
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Categories */}
      <section className="py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Tile Sizes & Finishes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sizeCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-border">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{category.description}</p>
                  <div className="space-y-3">
                    {category.sizes.map((size, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span className="text-gray-700">{size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg border border-border p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 text-center">
            Interested in Our Tiles?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Contact us for samples, pricing, and detailed specifications for your project.
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
              placeholder="Collection / Product of Interest"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            <Button className="w-full bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold py-3">
              Send Enquiry
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
