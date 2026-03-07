import { motion } from 'motion/react';
import { ArrowRight, ThermometerSnowflake, Wrench, Fan, Flame } from 'lucide-react';

const services = [
  {
    title: "AC Installation",
    description: "Upgrade to a high-efficiency system and beat the heat for good.",
    icon: ThermometerSnowflake,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Repair & Diagnostics",
    description: "Fast, accurate repairs for all makes and models. We fix it right the first time.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Maintenance Plans",
    description: "Prevent breakdowns and extend the life of your system with regular tune-ups.",
    icon: Fan,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Heating Services",
    description: "Keep warm during chilly desert nights with our expert heating solutions.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sky-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 leading-tight">
              Comprehensive Climate Solutions for Your Home
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 transition-colors group">
            View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-white border border-white/20">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">{service.title}</h3>
                <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 transition-colors">
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
