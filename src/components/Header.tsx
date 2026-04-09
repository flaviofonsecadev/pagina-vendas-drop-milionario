"use client";
import { Crown, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="w-8 h-8 text-amber-400" />
          <span className="text-white text-xl font-bold tracking-tight">
            Dropshipping <span className="text-amber-400">Milionário</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#como-funciona" className="hover:text-amber-400 transition-colors">Como Funciona</a>
          <a href="#beneficios" className="hover:text-amber-400 transition-colors">Benefícios</a>
          <a href="#categorias" className="hover:text-amber-400 transition-colors">Catálogo</a>
          <button className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            Quero Revender
          </button>
        </nav>
        
        <button className="md:hidden text-white p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
