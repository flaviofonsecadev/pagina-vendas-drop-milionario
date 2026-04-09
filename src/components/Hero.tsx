
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1594938298596-10fe5d63503b?q=80&w=2940&auto=format&fit=crop)] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-sm font-medium text-amber-200">O maior fornecedor de moda masculina do Brasil</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Transforme seu negócio com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">fornecedor definitivo</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-neutral-300 mb-10 max-w-2xl leading-relaxed">
              Venda roupas e acessórios masculinos premium sem precisar de estoque. Nós cuidamos de toda a logística e embalagem, você foca apenas em vender e lucrar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <button className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(251,191,36,0.4)] group">
                Quero Revender Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-neutral-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Vagas limitadas para novos parceiros
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                'Sem compra mínima',
                'Margem de lucro alta',
                'Envio white label (sua marca)'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-neutral-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
