import React, { useState, useEffect } from "react";
import "./App.css";

const ConsultoresTecnologia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHxibHVlfDE3NTI3OTUxMTZ8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTI3MzgxMTJ8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NTI3MzgxMTJ8MA&ixlib=rb-4.1.0&q=85",
    "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const tecnologias = [
    { categoria: "Lenguajes", items: ["Python", "JavaScript", "TypeScript", "Java", "C#", "Go", "Rust"] },
    { categoria: "Frameworks", items: ["React", "Next.js", "Angular", "Vue.js", "Django", "FastAPI", "Spring Boot"] },
    { categoria: "Bases de Datos", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Neo4j"] },
    { categoria: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
    { categoria: "IA & ML", items: ["TensorFlow", "PyTorch", "OpenAI", "Langchain", "Hugging Face", "Anthropic Claude"] }
  ];

  const aliados = [
    { nombre: "Best Vision Group", ubicacion: "Suiza", logo: "🇨🇭" },
    { nombre: "Time to Mind", ubicacion: "Suiza", logo: "🇨🇭" },
    { nombre: "Banismo", ubicacion: "Panamá", logo: "🇵🇦" },
    { nombre: "UBS", ubicacion: "Suiza", logo: "🇨🇭" },
    { nombre: "Best Vision Venezuela", ubicacion: "Venezuela", logo: "🇻🇪" },
    { nombre: "Avon Cosmetics", ubicacion: "Venezuela", logo: "🇻🇪" },
    { nombre: "Bancamiga", ubicacion: "Venezuela", logo: "🇻🇪" }
  ];

  const sistemas = [
    { nombre: "Corp Bancario", descripcion: "Sistema integral de gestión bancaria", icono: "🏦" },
    { nombre: "Control y Riesgo de Seguros", descripcion: "Plataforma de análisis de riesgos", icono: "🛡️" },
    { nombre: "Historias Médicas", descripcion: "Sistema de gestión hospitalaria", icono: "🏥" },
    { nombre: "Sistema de Trading", descripcion: "Plataforma de trading financiero", icono: "📈" }
  ];

  const testimonios = [
    { nombre: "Paolo Arioli", cargo: "CEO", comentario: "Excelente trabajo y profesionalismo en cada proyecto." },
    { nombre: "David Soto", cargo: "CTO", comentario: "Su experiencia en tecnología es incomparable." },
    { nombre: "Francisco Dales", cargo: "Director", comentario: "Resultados excepcionales en tiempo récord." },
    { nombre: "Armando Ottaviano", cargo: "Manager", comentario: "Calidad superior en desarrollo de software." },
    { nombre: "Grecia Muños", cargo: "Coordinadora", comentario: "Atención personalizada y soluciones innovadoras." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-30" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Technology ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <img src="/logo-final.png" alt="Consultores de Tecnología" className="h-24 mx-auto mb-6" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Consultores de Tecnología
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            20 años constituida • 15 años de experiencia en desarrollo de software
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 border border-blue-500/30">
              Desarrollo de Software
            </span>
            <span className="px-4 py-2 bg-green-600/20 rounded-full text-green-300 border border-green-500/30">
              Inteligencia Artificial
            </span>
            <span className="px-4 py-2 bg-orange-600/20 rounded-full text-orange-300 border border-orange-500/30">
              Consultoría Tecnológica
            </span>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Conoce Nuestros Servicios
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Historia Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Con 20 años de constitución y 15 años de experiencia especializada en desarrollo de software, 
              hemos construido una trayectoria sólida en el mercado tecnológico.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">🏢 Constitución</h3>
                <p className="text-gray-300">
                  Fundada hace 20 años con la visión de transformar la industria tecnológica 
                  mediante soluciones innovadoras y de calidad superior.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">💻 Experiencia</h3>
                <p className="text-gray-300">
                  15 años especializados en desarrollo de software, acumulando experiencia 
                  en proyectos complejos y tecnologías de vanguardia.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/418285/pexels-photo-418285.jpeg" 
                alt="Oficina moderna" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas Aliadas */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empresas Aliadas
            </h2>
            <p className="text-xl text-gray-300">
              Trabajamos con empresas líderes a nivel internacional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {aliados.map((aliado, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">{aliado.logo}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{aliado.nombre}</h3>
                  <p className="text-gray-300">{aliado.ubicacion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistemas Desarrollados */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sistemas Desarrollados
            </h2>
            <p className="text-xl text-gray-300">
              Soluciones tecnológicas innovadoras para diferentes industrias
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sistemas.map((sistema, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{sistema.icono}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{sistema.nombre}</h3>
                    <p className="text-gray-300">{sistema.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tecnologías de Vanguardia
            </h2>
            <p className="text-xl text-gray-300">
              Utilizamos las herramientas más modernas del mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tecnologias.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{tech.categoria}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm border border-blue-500/30">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestra Filosofía
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-4">Excelencia</h3>
              <p className="text-gray-300">
                Comprometidos con la calidad superior en cada proyecto que desarrollamos.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovación</h3>
              <p className="text-gray-300">
                Adoptamos las últimas tecnologías para ofrecer soluciones de vanguardia.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-4">Colaboración</h3>
              <p className="text-gray-300">
                Trabajamos de la mano con nuestros clientes para lograr sus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Clientes Satisfechos
            </h2>
            <p className="text-xl text-gray-300">
              La confianza de nuestros clientes es nuestro mayor logro
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-4xl mb-4">👤</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{testimonio.nombre}</h3>
                  <p className="text-blue-300 mb-4">{testimonio.cargo}</p>
                  <p className="text-gray-300 italic">"{testimonio.comentario}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA y Futuro */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visión de Inteligencia Artificial
            </h2>
            <p className="text-xl text-gray-300">
              Incorporamos IA en desarrollos y operatividad CRM
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">🤖 IA en Desarrollo</h3>
                <p className="text-gray-300">
                  Integramos inteligencia artificial en nuestros desarrollos para crear 
                  soluciones más inteligentes y eficientes.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">📊 CRM Inteligente</h3>
                <p className="text-gray-300">
                  Implementamos IA en sistemas CRM para mejorar la gestión de clientes 
                  y automatizar procesos operativos.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg" 
                alt="IA Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Disponibilidad */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Disponibilidad
            </h2>
            <p className="text-xl text-gray-300">
              Recursos disponibles en la zona metropolitana
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Guarenas</h3>
              <p className="text-gray-300">Equipo disponible en Guarenas para proyectos locales</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Guatire</h3>
              <p className="text-gray-300">Recursos técnicos disponibles en Guatire</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Caracas</h3>
              <p className="text-gray-300">Oficina principal en Centro Plaza, Chacao</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contacto
            </h2>
            <p className="text-xl text-gray-300">
              Estamos listos para trabajar en su próximo proyecto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">📞 Teléfonos</h3>
                <div className="space-y-2 text-gray-300">
                  <p>+58 212 369-0555</p>
                  <p>+58 412 020-9520</p>
                  <p>+58 212 369-5089</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">📧 Email</h3>
                <p className="text-gray-300">m.ortiz@consultoresdetecnologia.com</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">📍 Dirección</h3>
                <p className="text-gray-300">Centro Plaza PH Torre A, Chacao, Caracas</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Solicitar Información</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <textarea 
                  placeholder="Mensaje" 
                  rows="4" 
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img src="/logo-final.png" alt="Consultores de Tecnología" className="h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Consultores de Tecnología</h3>
            <p className="text-gray-400 mb-6">
              Transformando ideas en soluciones tecnológicas innovadoras
            </p>
            <div className="text-gray-500">
              <p>&copy; 2025 Consultores de Tecnología. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ConsultoresTecnologia />
    </div>
  );
}

export default App;