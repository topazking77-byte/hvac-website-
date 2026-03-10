import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import QuoteModal from './components/QuoteModal';
import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors duration-200"
      >
        <span className="font-semibold font-display text-lg text-slate-900 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-slate-400 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    question: 'How quickly can you get a technician to my home?',
    answer: 'For emergencies, we offer same-day service with an average arrival time under 60 minutes in the greater Phoenix area. For routine maintenance and installations, we offer flexible scheduling with small appointment windows so you\'re not waiting around all day.',
  },
  {
    question: 'Do you offer financing for new AC installations?',
    answer: 'Yes! We offer 0% interest financing for 12 months on qualifying new installations. Apply in just minutes during your consultation. We work with multiple lenders to find the best option for your budget.',
  },
  {
    question: 'What areas do you serve in Arizona?',
    answer: 'We serve the entire East Valley including Mesa, Gilbert, Chandler, Tempe, and Scottsdale, as well as greater Phoenix. If you\'re unsure whether we service your area, give us a call — we\'re always expanding!',
  },
  {
    question: 'Are your prices really upfront with no hidden fees?',
    answer: 'Absolutely. We provide a clear, written quote before any work begins. The price you approve is the price you pay — no overtime charges, no surprise add-ons, no hidden fees. Ever.',
  },
];

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (
    <div className="font-sans antialiased text-black bg-white selection:bg-yellow-200 selection:text-yellow-900">
      <Navbar onOpenSchedule={() => setIsScheduleOpen(true)} />
      <main>
        <Hero onOpenSchedule={() => setIsScheduleOpen(true)} onOpenQuote={() => setIsQuoteOpen(true)} />
        <Features />
        <WhyChooseUs />
        <Services />

        {/* CTA Section */}
        <section className="py-24 bg-yellow-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-6xl text-white mb-8"
            >
              Ready to Feel the Difference?
            </motion.h2>
            <p className="text-xl text-yellow-100 mb-12 max-w-2xl mx-auto">
              Schedule your service today and get $50 off your first repair.
              Don't let the heat win.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                onClick={() => setIsScheduleOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-yellow-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                Schedule Now
              </motion.button>
              <motion.a
                href="tel:+16022792665"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all cursor-pointer inline-flex items-center justify-center"
              >
                Call (602) 279-2665
              </motion.a>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sky-500 font-bold tracking-wider uppercase text-sm mb-2 block">Common Questions</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-slate-600">
                  Everything you need to know about our HVAC services.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <FAQItem question={faq.question} answer={faq.answer} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* Mobile Sticky Call Button */}
      <a
        href="tel:+16022792665"
        className="fixed bottom-6 right-6 md:hidden z-50 bg-yellow-500 text-white font-bold p-4 rounded-full shadow-xl shadow-yellow-500/30 cursor-pointer"
        aria-label="Call JMAC Heating & Cooling"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
