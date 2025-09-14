import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
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
  )
}