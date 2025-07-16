import React from "react";
import "./App.css";

const App = () => {
  // Generar array de 60 productos con placeholders
  const products = Array.from({ length: 60 }, (_, index) => ({
    id: index + 1,
    name: `Franela ${index + 1}`,
    image: `https://via.placeholder.com/300x400/4F46E5/FFFFFF?text=Imagen+${index + 1}`,
    price: "$35"
  }));

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Estoy interesado en las franelas de Football Locker. ¿Podrían darme más información?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-2">
              ⚽ Football Locker
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Bienvenidos aficionados al fútbol - Calidad premium en cada franela
            </p>
            
            {/* WhatsApp Contact */}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.512z"/>
              </svg>
              WhatsApp
            </button>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Nuestros Precios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center shadow-lg">
              <h3 className="font-semibold text-lg">Camisetas de temporada</h3>
              <p className="text-2xl font-bold">$35</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg text-center shadow-lg">
              <h3 className="font-semibold text-lg">Temporada pasada</h3>
              <p className="text-2xl font-bold">$30</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center shadow-lg">
              <h3 className="font-semibold text-lg">Suéters de entrenamiento</h3>
              <p className="text-2xl font-bold">$40</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg text-center shadow-lg">
              <h3 className="font-semibold text-lg">Retros</h3>
              <p className="text-2xl font-bold">$40</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-lg text-center shadow-lg">
              <h3 className="font-semibold text-lg">Entrenamiento sin mangas</h3>
              <p className="text-2xl font-bold">$30</p>
            </div>
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-lg text-center shadow-lg">
              <h3 className="font-semibold text-lg">Entrenamiento con mangas</h3>
              <p className="text-2xl font-bold">$35</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestro Catálogo
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                <p className="text-2xl font-bold text-blue-600">{product.price}</p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¡Gracias por visitar Football Locker!
          </h2>
          <p className="text-xl mb-8">
            Contáctanos por WhatsApp para más información sobre nuestras franelas
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center bg-white text-green-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.512z"/>
            </svg>
            Contactar por WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2025 Football Locker - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;