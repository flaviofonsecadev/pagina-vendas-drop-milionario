
import { motion } from 'framer-motion';
import { Shirt, Watch, ScanEye } from 'lucide-react';

const categories = [
  {
    name: 'Camisetas Premium',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    icon: <Shirt className="w-6 h-6" />
  },
  {
    name: 'Camisas Sociais',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    icon: <Shirt className="w-6 h-6" />
  },
  {
    name: 'Calças e Bermudas',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    icon: <ScanEye className="w-6 h-6" />
  },
  {
    name: 'Acessórios e Relógios',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80',
    icon: <Watch className="w-6 h-6" />
  }
];

export default function Categories() {
  return (
    <section id="categorias" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-amber-400 uppercase mb-3">Catálogo Atualizado</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Os nichos mais <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">lucrativos</span>
            </h3>
            <p className="mt-6 text-xl text-neutral-400 leading-relaxed">
              Trabalhamos apenas com produtos validados e de alta demanda. Roupas e acessórios que os homens querem comprar agora.
            </p>
          </div>
          <button className="hidden md:inline-flex px-8 py-4 border-2 border-white/20 hover:border-amber-400 hover:text-amber-400 rounded-full font-bold text-lg transition-all items-center gap-2">
            Ver Todos os Produtos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
              
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-400 mb-4">
                  {cat.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{cat.name}</h4>
                <p className="text-sm text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Explore a coleção →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="md:hidden mt-12 w-full px-8 py-4 border-2 border-white/20 hover:border-amber-400 hover:text-amber-400 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
          Ver Todos os Produtos
        </button>
      </div>
    </section>
  );
}
