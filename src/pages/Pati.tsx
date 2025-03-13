import { Link } from "react-router";

export default function Pati() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Pati</h1>
      <img
        src="/images/pati.jpg"
        alt="Pati"
        className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
      />
      <p className="text-lg leading-relaxed text-gray-300 mb-4">
        El Pati es una empanada típica de la Costa Caribe Sur de Nicaragua,
        rellena de carne sazonada con una mezcla de especias locales. Este
        delicioso bocadillo es una muestra de la influencia afrocaribeña en la
        gastronomía de la región.
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
