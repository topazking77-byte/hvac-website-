import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "Absolutely incredible service. Our AC went out on a Sunday in July, and they were here within an hour. The technician was professional, clean, and fixed the issue immediately.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Michael Torres",
    location: "Phoenix, AZ",
    rating: 5,
    text: "I've used several HVAC companies over the years, but Arctic Air is by far the best. Their upfront pricing meant no surprises, and the new system they installed has lowered our electric bill significantly.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Emily Chen",
    location: "Gilbert, AZ",
    rating: 5,
    text: "Professional, courteous, and efficient. They explained everything clearly and didn't try to upsell me on things I didn't need. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-current" /> 5-Star Rated Service
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-slate-600">
            Join hundreds of satisfied homeowners across the Valley who trust Arctic Air for their comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative group"
            >
              <Quote className="absolute top-8 right-8 text-slate-100 w-12 h-12 group-hover:text-sky-100 transition-colors" />
              
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <span className="text-sm text-slate-500">{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
