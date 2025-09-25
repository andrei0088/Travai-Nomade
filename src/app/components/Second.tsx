import React from "react";

const Second = () => {
  return (
    <div className="w-full min-h-screen p-10">
      {/* 🔹 Titre centré en haut */}
      <h2 className="w-full text-2xl font-bold text-center mb-10">
        Marre des applications qui tuent votre motivation ?
      </h2>

      {/* 🔹 Conteneur principal : texte à gauche, image à droite (en ligne sur desktop, en colonne sur mobile) */}
      <div className="flex flex-col md:flex-row md:items-start md:space-x-10">
        {/* 🔹 Zone de texte avec plusieurs points */}
        <div className="flex-1 space-y-6">
          {/* Premier bloc texte + icône */}
          <div className="flex items-center space-x-6 p-4">
            {/* Icône ronde */}
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center shadow-md">
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2563eb"
              >
                <path d="M9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011 1.65707 13.6313 1 11.8924 1 10 1 5.58172 4.58172 2 9 2ZM21.1535 18.1024 19.4893 16.9929C20.4436 15.5642 21 13.8471 21 12.0001 21 10.153 20.4436 8.4359 19.4893 7.00722L21.1535 5.89771C22.32 7.64386 23 9.74254 23 12.0001 23 14.2576 22.32 16.3562 21.1535 18.1024Z" />
              </svg>
            </div>

            {/* Texte associé */}
            <div className="flex flex-col">
              <p className="text-lg font-medium text-gray-800 mb-2">
                La motivation disparaît quand l&apos;objectif semble trop loin
              </p>
              <span className="bg-white rounded-xl shadow px-4 py-2 text-gray-600 italic">
                « La motivation s&apos;éteint après une semaine. »
              </span>
            </div>
          </div>

          {/* Deuxième bloc texte + icône */}
          <div className="flex items-center space-x-6 p-4">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="#9333ea"
              >
                <path d="M11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium text-gray-800 mb-2">
                L&apos;anxiété de parler vous empêche d&apos;utiliser vos
                connaissances
              </p>
              <span className="bg-white rounded-xl shadow px-4 py-2 text-gray-600 italic">
                « J&apos;oublie tout dès la fin de la leçon. »
              </span>
            </div>
          </div>

          {/* Troisième bloc texte + icône */}
          <div className="flex items-center space-x-6 p-4">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="#ea580c"
              >
                <path d="M8 4C8 2.34315 9.34315 1 11 1C12.6569 1 14 2.34315 14 4C14 4.35064 13.9398 4.68722 13.8293 5H20C20.5523 5 21 5.44772 21 6V9.12602C21 9.43517 20.857 9.72694 20.6127 9.91635C20.3683 10.1058 20.0501 10.1715 19.7507 10.0945C19.5119 10.033 19.2605 10 19 10C17.3431 10 16 11.3431 16 13C16 14.6569 17.3431 16 19 16C19.2605 16 19.5119 15.967 19.7507 15.9055C20.0501 15.8285 20.3683 15.8942 20.6127 16.0836C20.857 16.2731 21 16.5648 21 16.874V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V6C3 5.44772 3.44772 5 4 5H8.17071C8.06015 4.68722 8 4.35064 8 4Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium text-gray-800 mb-2">
                Trop d&apos;outils, aucun vrai progrès
              </p>
              <span className="bg-white rounded-xl shadow px-4 py-2 text-gray-600 italic">
                « Je jongle avec plusieurs applis et reste bloqué. »
              </span>
            </div>
          </div>
        </div>

        {/* 🔹 Image à droite (en dessous du texte sur mobile) */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="./img1.jpeg"
            alt="Illustration frustration"
            className="max-h-[80vh] w-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
