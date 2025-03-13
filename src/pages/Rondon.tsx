import { Link } from "react-router";

export default function Rondon() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Rondon</h1>
      <img
        src="/images/rondon.jpg"
        alt="Rondon"
        className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
      />
      <p className="text-lg leading-relaxed text-gray-300 mb-4">
        El Rondon es un plato tradicional de la Costa Caribe Sur de Nicaragua,
        preparado con mariscos frescos como camarones y langostas, junto con
        tubérculos, plátanos y leche de coco. Este guiso es una muestra de la
        rica herencia culinaria de la región, combinando sabores únicos y
        especias locales.
      </p>
      <Link
        to="/specialties"
        className="bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-xl"
      >
        Volver
      </Link>
    </div>
  );
}
