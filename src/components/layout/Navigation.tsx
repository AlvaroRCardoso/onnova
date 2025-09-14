export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <a href="#home" className="text-gray-600 hover:text-black transition-colors">Início</a>
      <a href="#services" className="text-gray-600 hover:text-black transition-colors">Serviços</a>
      <a href="#projects" className="text-gray-600 hover:text-black transition-colors">Projetos</a>
      <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contato</a>
    </nav>
  )
}