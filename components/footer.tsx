import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  const contacts = [
    { name: 'Rajesh Gedhar', phone: '9782717511' },
    { name: 'Anil Gedhar', phone: '9772391616' },
    { name: 'Rahul Gedhar', phone: '9587800110' },
    { name: 'Ramlal Brawar', phone: '9309458523' },
    { name: 'Vinod Kumar', phone: '9783019396' },
    { name: 'Ramchandar Dhundhara', phone: '8949495833' },
    { name: 'Rajesh Khudia', phone: '8696130170' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="font-bold text-sm">V</span>
              </div>
              <span className="font-serif text-lg font-semibold">Gedhar Steel</span>
            </div>
            <p className="text-sm text-gray-300">
              Premium tiles, stone, and bathware for your perfect home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/tiles" className="hover:text-accent transition-colors">
                  Tiles Catalogue
                </Link>
              </li>
              <li>
                <Link href="/stone" className="hover:text-accent transition-colors">
                  Stone Catalogue
                </Link>
              </li>
              <li>
                <Link href="/bathware" className="hover:text-accent transition-colors">
                  Bathware Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:gedharsteel@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  gedharsteel@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1" />
                <div className="space-y-1">
                  {contacts.slice(0, 3).map((contact) => (
                    <div key={contact.phone}>
                      <a
                        href={`tel:+91${contact.phone}`}
                        className="hover:text-accent transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social & Location */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @gedharsteel
              </a>
              <p className="text-sm text-gray-300">Bikaner, India</p>
            </div>
          </div>
        </div>

        {/* Our Dealerships Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <h3 className="font-semibold text-lg mb-6 text-accent">OUR DEALERSHIPS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Tiles & Bathware */}
            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Tiles & Bathware</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Gedhar Steel Tiles</li>
                <li>• Gedhar Steel Bathware</li>
              </ul>
            </div>

            {/* Cement & Construction */}
            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Cement & Construction</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• JK Super Cement</li>
                <li>• JK Profix</li>
                <li>• Dr Fixit</li>
                <li>• Birla Putty</li>
                <li>• Roff By Pidilite</li>
                <li>• Myk Latikret</li>
              </ul>
            </div>

            {/* Water Solutions */}
            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Water Solutions & Fittings</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Ashirwad Water Fittings</li>
                <li>• Ashirwad Water Tanks</li>
                <li>• Vectus Water Tanks</li>
                <li>• Plasto Water Tanks</li>
              </ul>
            </div>

            {/* Kitchen & Hardware */}
            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Kitchen & Hardware</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Galley Sinks</li>
                <li>• Nirali Sinks</li>
                <li>• Redbay By Redon</li>
                <li>• Total Hardware</li>
              </ul>
            </div>
          </div>

          {/* Building Materials */}
          <div className="bg-secondary rounded-lg p-6 mb-8">
            <h4 className="font-semibold mb-4 text-white">All Types of Building Materials</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Sand</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Concrete</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Bricks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Adhesives</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © 2024 Gedhar Steel Sturring & Building Material Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
