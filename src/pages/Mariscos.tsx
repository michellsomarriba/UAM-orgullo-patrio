import { Link } from "react-router";

function Mariscos() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Mariscos</h1>
      <img
        src="/images/mariscos.webp"
        alt="Mariscos"
        className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
      />
      <p className="text-lg leading-relaxed text-gray-300 mb-4">
        Los mariscos de la Costa Caribe Sur de Nicaragua son frescos y
        deliciosos. Esta región es conocida por su abundancia en mariscos como
        camarones, langostas, cangrejos y una variedad de pescados. Los
        pescadores locales capturan estos mariscos diariamente, asegurando su
        frescura y calidad. Los mariscos son una parte integral de la
        gastronomía nicaragüense y se utilizan en una variedad de platos
        tradicionales que reflejan la rica herencia cultural de la región.
      </p>
      {/* Add more content about Mariscos here */}
      <Link
        to="/specialties"
        className="bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-xl"
      >
        Volver
      </Link>
    </div>
  );
}

export default Mariscos;
