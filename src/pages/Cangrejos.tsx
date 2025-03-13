import { Link } from "react-router";

export default function Cangrejos() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Cangrejos</h1>
      <img
        src="images/cangrejos.jpg"
        alt="Cangrejos"
        className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
      />
      <p className="text-lg leading-relaxed text-gray-300 mb-4 text-justify">
        Los cangrejos son una parte esencial de la dieta en la Costa Caribe Sur
        de Nicaragua. Se preparan en una variedad de formas, incluyendo sopas,
        guisos y frituras, y se combinan con ingredientes como coco y especias
        locales para crear platos deliciosos y nutritivos.
      </p>
      <p className="text-base text-gray-400 mb-6 text-justify">
        La riqueza marina de la región ofrece una variedad de platillos que
        deleitan tanto a locales como a visitantes. Los mariscos no solo son
        deliciosos, sino también una fuente importante de nutrientes.
      </p>
      {/* Rating section */}
      <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
        Califica este plato
      </h2>
      <p className="text-lg text-yellow-400 mb-4">
        Si ya has probado este plato, ¡danos tu calificación!
      </p>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="text-3xl cursor-pointer hover:text-yellow-500"
          >
            ⭐
          </span>
        ))}
      </div>
      <Link
        to="/specialties"
        className="bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-xl"
      >
        Volver
      </Link>
    </div>
  );
}
