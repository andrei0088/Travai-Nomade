import React from "react";

const Second3 = () => {
  return (
    <div
      className="w-full min-h-screen p-10 flex flex-col lg:flex-row lg:items-center lg:space-x-10"
      id="pg4"
    >
      {/* Textul */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-center lg:text-left mb-6">
          Oubliez le quotidien, explorez le monde aujourd'hui !
        </h2>
        <p className="text-gray-700">
          Travail Nomade est votre espace d’entraînement pour le voyage, et
          aussi votre bureau nomade. Conçu autour des moments culturels réels
          que vous vivrez, il vous invite à travailler où bon vous semble.
          Lancez l’application Travail Nomade, et découvrez: un café vibrant à
          Lisbonne pour une après-midi productive, un Wi‑Fi rapide dans un
          temple du design à Montréal, des conversations enrichissantes avec des
          collègues virtuels à distance. Travaillez de n’importe où, respirez
          l’inspiration, et explorez une autre application qui transforme chaque
          jour en nouvelle réalité professionnelle.
        </p>
      </div>

      {/* Imaginea */}
      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <img src="./img6.jpeg" alt="" className="w-full rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Second3;
