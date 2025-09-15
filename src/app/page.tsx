'use client';

import Cta from '@/components/sections/Cta';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import { Code, Palette, Zap } from 'lucide-react';

export default function MinimalistWebsite() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Sites modernos e responsivos com as melhores tecnologias do mercado"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design UI/UX",
      description: "Interfaces elegantes e intuitivas que convertem visitantes em clientes"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Otimização",
      description: "Performance excepcional e SEO otimizado para máxima visibilidade"
    }
  ];

  const testimonials = [
    {
      name: "Marcia Silva",
      company: "Grano Grãos",
      text: "O site ficou incrível! A equipe captou perfeitamente a essência da nossa marca.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Inovação Digital",
      text: "Profissionais excepcionais. Entregaram exatamente o que precisávamos no prazo.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Creative Agency",
      text: "O design minimalista e a funcionalidade perfeita fizeram toda a diferença.",
      rating: 5
    }
  ];

  const projects = [
    {
      title: "E-commerce Luxury",
      category: "Loja Virtual",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Portfolio Criativo",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop"
    },
    {
      title: "Dashboard Analytics",
      category: "Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <Hero />
      <Services services={services} />
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Cta />
      <Footer />
    </div>
  );
}