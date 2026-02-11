'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const contacts = [
    { name: 'Rajesh Gedhar', phone: '9782717511', role: 'Manager' },
    { name: 'Anil Gedhar', phone: '9772391616', role: 'Sales' },
    { name: 'Rahul Gedhar', phone: '9587800110', role: 'Sales' },
    { name: 'Ramlal Brawar', phone: '9309458523', role: 'Coordinator' },
    { name: 'Vinod Kumar', phone: '9783019396', role: 'Coordinator' },
    { name: 'Ramchandar Dhundhara', phone: '8949495833', role: 'Support' },
    { name: 'Rajesh Khudia', phone: '8696130170', role: 'Support' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Get in touch with our team for product inquiries, quotes, and consultations
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white rounded-lg border border-border p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <a
                href="mailto:gedharsteel@gmail.com"
                className="text-accent hover:underline text-sm break-all"
              >
                gedharsteel@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg border border-border p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Bikaner, Rajasthan, India</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-lg border border-border p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919587800110"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline text-sm"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact) => (
              <div key={contact.phone} className="bg-white rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-1">{contact.name}</h3>
                <p className="text-sm text-accent font-semibold mb-4">{contact.role}</p>
                <div className="space-y-2">
                  <a
                    href={`tel:+91${contact.phone}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {contact.phone}
                  </a>
                  <a
                    href={`https://wa.me/91${contact.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg border border-border p-8 md:p-12">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="tiles">Tiles Catalogue</option>
                  <option value="stone">Stone Products</option>
                  <option value="bathware">Bathware Products</option>
                  <option value="quote">Price Quote</option>
                  <option value="sample">Request Sample</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
                <Button className="w-full bg-accent hover:bg-orange-600 text-white rounded-lg font-semibold py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Get in Touch</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent" />
                    Call Us
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Reach out during business hours for immediate assistance
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919782717511"
                      className="block text-accent hover:underline font-semibold"
                    >
                      +91 9782717511
                    </a>
                    <a
                      href="tel:+919772391616"
                      className="block text-accent hover:underline font-semibold"
                    >
                      +91 9772391616
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    WhatsApp Us
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Quick response and easy communication for your convenience
                  </p>
                  <a
                    href="https://wa.me/919587800110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
                  >
                    Open WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Instagram className="w-5 h-5 text-pink-600" />
                    Follow Us
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Check out our latest products and showroom updates
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-pink-600 hover:text-pink-700 font-semibold"
                  >
                    @gedharsteel
                  </a>
                </div>

                <div className="bg-secondary rounded-lg p-6 border border-border">
                  <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
            Find Us on the Map
          </h2>
          <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden border border-border">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Bikaner, Rajasthan, India</p>
                <p className="text-sm text-gray-500 mt-2">
                  Interactive map integration can be added with Google Maps API
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
