import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-sky-500/50 transition-all duration-300">
                A
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Arctic<span className="text-sky-500">Air</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Premium HVAC solutions for Arizona homes. We're dedicated to your comfort, 24/7.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'About Us', 'Financing', 'Reviews', 'Careers', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-sky-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['AC Installation', 'AC Repair', 'Heating Services', 'Maintenance Plans', 'Indoor Air Quality', 'Commercial HVAC'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-sky-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sky-500 shrink-0" />
                <span>1234 Cool Breeze Lane,<br />Phoenix, AZ 85001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-sky-500 shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-sky-500 shrink-0" />
                <a href="mailto:info@arcticairaz.com" className="hover:text-white transition-colors">info@arcticairaz.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Arctic Air Arizona. All rights reserved.</p>
          <p>Designed with ❤️ in Arizona.</p>
        </div>
      </div>
    </footer>
  );
}
