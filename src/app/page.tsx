'use client';

import Cta from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import Testimonials from '@/components/sections/Testimonials';
import { ArrowRight, Code, Palette, Zap, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MinimalistWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Placeholder */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-semibold">LOGO</span>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors">Início</a>
              <a href="#services" className="text-gray-600 hover:text-black transition-colors">Serviços</a>
              <a href="#projects" className="text-gray-600 hover:text-black transition-colors">Projetos</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contato</a>
            </nav>

            {/* CTA Button */}
            <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Começar Projeto
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-gray-600 hover:text-black">Início</a>
              <a href="#services" className="block text-gray-600 hover:text-black">Serviços</a>
              <a href="#projects" className="block text-gray-600 hover:text-black">Projetos</a>
              <a href="#contact" className="block text-gray-600 hover:text-black">Contato</a>
              <button className="w-full bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Começar Projeto
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Criamos sites que
              <span className="block font-normal italic">impressionam</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Desenvolvemos experiências digitais minimalistas e luxuosas que convertem visitantes em clientes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group">
                Ver Nossos Projetos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para sua presença digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Projetos Recentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada projeto é único e desenvolvido com atenção aos detalhes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      <Cta />

      <Footer />
    </div>
  );
}