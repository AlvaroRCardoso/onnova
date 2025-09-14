export default function Projects( { projects }: { projects: { title: string; category: string; image: string; }[] } ) {
  return (
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
  )
}