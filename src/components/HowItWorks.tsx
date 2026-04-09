"use client";
import { motion } from 'framer-motion';
import { Store, ShoppingCart, DollarSign, Send } from 'lucide-react';

const steps = [
  {
    icon: <Store className="w-6 h-6" />,
    title: 'Sua Loja',
    description: 'Você cria sua loja virtual e anuncia nossos produtos com sua própria margem de lucro.',
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'O Cliente Compra',
    description: 'O cliente entra na sua loja, escolhe o produto e finaliza a compra pagando o valor final.',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Repasse Automático',
    description: 'Split de pagamento automatizado: você recebe sua margem de lucro na hora e o fornecedor recebe o valor de custo + frete.',
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: 'Nós Enviamos',
    description: 'Embalamos com carinho (sem nossa marca) e enviamos direto para o endereço do seu cliente.',
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-neutral-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Simples e Lucrativo</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Como funciona a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">parceria</span>
          </h3>
          <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
            Um modelo de negócios inteligente onde você ganha dinheiro conectando produtos de qualidade aos clientes certos.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-amber-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-amber-400 flex items-center justify-center text-amber-600 mb-6 shadow-[0_0_20px_rgba(251,191,36,0.3)] group-hover:scale-110 transition-transform relative">
                  {step.icon}
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 mb-3">{step.title}</h4>
                <p className="text-neutral-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white rounded-3xl shadow-xl border border-amber-100 max-w-4xl mx-auto w-full justify-between">
            <div className="text-left">
              <h5 className="text-2xl font-bold text-neutral-900 mb-2">Pronto para começar?</h5>
              <p className="text-neutral-600">Não perca tempo, cadastre-se agora e tenha acesso ao catálogo completo.</p>
            </div>
            <button className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black rounded-full font-bold text-lg transition-all transform hover:scale-105 whitespace-nowrap shadow-[0_0_20px_rgba(251,191,36,0.4)]">
              Criar Minha Conta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
