import { Link } from "react-router";

export default function PanDeCoco() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Pan de Coco</h1>
      <img
        src="/images/pan-de-coco.webp"
        alt="Pan de Coco"
        className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
      />
      <p className="text-lg leading-relaxed text-gray-300 mb-4">
        El Pan de Coco es un pan dulce tradicional de la Costa Caribe Sur de
        Nicaragua, hecho con harina de trigo y leche de coco. Este pan es
        perfecto para acompañar cualquier comida o disfrutar como un delicioso
        bocadillo.
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
