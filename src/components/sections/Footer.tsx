export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-semibold">LOGO</span>
            </div>
            <p className="text-gray-600">
              Criando experiências digitais excepcionais com design minimalista e funcionalidade premium.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <p className="text-gray-600 mb-2">onnovasolutions@gmail.com</p>
            <p className="text-gray-600 mb-2">+55 (51) 98029-4496</p>
            <p className="text-gray-600">Porto Alegre, RS</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Desenvolvimento Web</li>
              <li>Design UI/UX</li>
              <li>Otimização SEO</li>
              <li>Suporte online</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>Todos os direitos reservados &copy; 2025 Onnova.</p>
        </div>
      </div>
    </footer>
  );
}