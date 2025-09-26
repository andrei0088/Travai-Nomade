import Link from "next/link";
import React from "react";

const First = () => {
  return (
    <div
      className="pg1 w-full h-screen bg-cover bg-center pt-5 text-center text-white"
      id="first"
    >
      <img src="./logo2.png" alt="Logo" className="w-1/8 mx-auto block mb-6" />

      <h2 className="text-3xl font-bold mb-10 mt-25">
        Travaillez à distance tout en voyageant à travers le monde.
      </h2>

      <p className="max-w-xl mx-auto mb-10">
        Profitez de la liberté de travailler à distance et découvrez le monde en
        même temps. Combinez travail et voyage pour vivre une expérience unique
        et enrichissante.
      </p>

      <Link
        href="https://github.com/andrei0088"
        className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        Commence maintenant
        <svg
          className="w-6 h-6 ml-2"
          viewBox="-51.2 -51.2 614.4 614.4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeWidth="43"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="256" cy="256" r="246" />
          <polyline points="178.18 411.63 333.82 256 178.18 100.37" />
        </svg>
      </Link>

      <div className="bg-white/50 backdrop-blur-sm flex justify-end items-center p-4 mt-10 space-x-3">
        <img src="./node.png" alt="Node.js" className="w-24" />
        <img src="./rn.webp" alt="" className="w-25" />
        <img src="./exp.png" alt="" className="w-25" />
      </div>
    </div>
  );
};

export default First;
