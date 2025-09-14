export default function MobileMenu({ isMenuOpen }: { isMenuOpen: boolean }) {
  return isMenuOpen ? (
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
  ) : null;
}