import { Link } from "react-router";

export default function PanDeCoco() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Pan de Coco</h1>
      <img
        src={`${import.meta.env.BASE_URL}images/pan-de-coco.webp`}
        alt="Pan de Coco"
        className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
      />
      <p className="text-lg leading-relaxed text-gray-300 mb-4 text-justify">
        El Pan de Coco es un pan dulce tradicional de la Costa Caribe Sur de
        Nicaragua, hecho con harina de trigo y leche de coco. Este pan es
        perfecto para acompañar cualquier comida o disfrutar como un delicioso
        bocadillo.
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
