"use client";
import { PackageX, Zap, Layers, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <PackageX className="w-8 h-8" />,
    title: 'Venda sem estoque',
    description: 'Transforme seu CNPJ/CPF em uma loja virtual lucrativa. Você não precisa comprar mercadorias antes de vender.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Pedidos automatizados',
    description: 'Sistema inteligente. Assim que você vende, repassamos o pedido e enviamos direto para o seu cliente sem burocracia.',
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Catálogo Exclusivo',
    description: 'Acesso imediato a moda masculina premium e acessórios com fotos e vídeos profissionais prontos para uso nas suas campanhas.',
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Logística Integrada',
    description: 'Calculamos o frete e enviamos com embalagem discreta (white label). Seu cliente recebe o produto como se tivesse saído da sua loja.',
  }
];

export default function Features() {
  return (
    <section id="beneficios" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Vantagens Exclusivas</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Tudo o que você precisa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">vender sem dor de cabeça</span>
          </h3>
          <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
            Foque no marketing e nas vendas. O operacional pesado de armazenamento, separação e envio fica por nossa conta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 hover:border-amber-200 transition-all hover:shadow-xl hover:shadow-amber-100 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform group-hover:bg-amber-400 group-hover:text-black">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-neutral-900 mb-4">{feature.title}</h4>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
