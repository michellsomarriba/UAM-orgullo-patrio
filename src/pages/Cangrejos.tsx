import { Link } from "react-router";

export default function Cangrejos() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Cangrejos</h1>
      <img
        src="/images/cangrejos.jpg"
        alt="Cangrejos"
        className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
      />
      <p className="text-lg leading-relaxed text-gray-300 mb-4">
        Los cangrejos son una parte esencial de la dieta en la Costa Caribe Sur
        de Nicaragua. Se preparan en una variedad de formas, incluyendo sopas,
        guisos y frituras, y se combinan con ingredientes como coco y especias
        locales para crear platos deliciosos y nutritivos.
      </p>
      <p className="text-base text-gray-400 mb-6">
        La riqueza marina de la región ofrece una variedad de platillos que
        deleitan tanto a locales como a visitantes. Los mariscos no solo son
        deliciosos, sino también una fuente importante de nutrientes.
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
