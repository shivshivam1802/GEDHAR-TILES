'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Instagram } from 'lucide-react';

export default function Home() {
  /* =============================
     CATEGORY DATA
  ============================= */
  const categories = [
    {
      id: 'tiles',
      name: 'Tiles',
      description:
        'Explore our premium collection of ceramic, porcelain, and decorative tiles',
      image: '/categories/tiles.jpg',
      link: '/tiles',
    },
    {
      id: 'stone',
      name: 'Stone',
      description:
        'Natural stone products for elegant home and commercial spaces',
      image: '/categories/stone.jpg',
      link: '/stone',
    },
    {
      id: 'bathware',
      name: 'Bathware',
      description:
        'Complete bathroom solutions with premium fixtures and fittings',
      image: '/categories/bathware.jpg',
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

      {/* ================= HERO ================= */}
      <section className="w-full py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Video */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/phauCwD_Hrk"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
              Premium Tiles & Bathware Collection
            </h1>

            <p className="text-gray-600 mb-8">
              Your one-stop destination for premium tiles, natural stone and luxury bathware.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/tiles">
                <Button className="bg-accent text-white">
                  View Catalogue
                </Button>
              </Link>

              <a href="https://wa.me/919587800110" target="_blank">
                <Button variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
            Featured Categories
          </h2>
          <p className="text-gray-600">
            Explore our curated collections of premium products for every need
          </p>
        </div>

        {/* 🔥 MOBILE SAFE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {categories.map((category) => (
            <Link key={category.id} href={category.link}>
              <div className="group cursor-pointer rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition">

                {/* IMAGE (Responsive fix here) */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* TEXT */}
                <div className="p-4">
                  <h3 className="text-lg md:text-2xl font-bold text-primary">
                    {category.name}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    {category.description}
                  </p>

                  <span className="text-accent font-semibold text-sm mt-3 inline-block">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-10">
            Get in Touch
          </h2>

          <div className="bg-primary text-white rounded-xl p-10">
            {contacts.map((contact) => (
              <a
                key={contact.phone}
                href={`tel:+91${contact.phone}`}
                className="block mb-2 hover:text-accent"
              >
                <Phone className="inline w-4 h-4 mr-2" />
                {contact.name}: {contact.phone}
              </a>
            ))}

            <a
              href="https://wa.me/919587800110"
              className="block mt-4 hover:text-accent"
            >
              <MessageCircle className="inline w-4 h-4 mr-2" />
              WhatsApp
            </a>

            <a href="#" className="block mt-2 hover:text-accent">
              <Instagram className="inline w-4 h-4 mr-2" />
              @gedharsteel
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
