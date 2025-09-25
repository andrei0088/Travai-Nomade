import React from "react";

const Troisieme = () => {
  return (
    <div
      className="w-full min-h-screen"
      id="seccond"
      style={{
        background:
          "linear-gradient(90deg, rgba(162, 144, 254, 0.7) 0%, rgba(162, 255, 233, 0.7) 100%)",
      }}
    >
      <h2 className="w-full text-2xl font-bold text-center mb-10 pt-10">
        Ce qui rend Travail Nomade différent
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-start justify-center p-4 rounded-lg w-[80%] mx-auto">
        {/* Card  1 */}
        <div className="shadow-lg text-center bg-amber-50 rounded-2xl p-6 flex flex-col items-center space-y-4">
          <span className="text-4xl w-16 h-16 flex items-center justify-center rounded-full bg-blue-400 text-white shadow-md">
            🕒
          </span>

          {/* Titre du card */}
          <h3 className="text-lg font-semibold text-gray-800">
            Flexibilité du planning
          </h3>

          {/* Texte explicatif */}
          <p className="text-gray-700 text-sm">
            Vous choisissez quand travailler et combien de temps consacrer à
            chaque tâche, pour un meilleur équilibre vie pro/vie perso.
          </p>
        </div>

        {/* Card  2 */}
        <div className="shadow-lg text-center bg-amber-50 rounded-2xl p-6 flex flex-col items-center space-y-4">
          <span className="text-4xl w-16 h-16 flex items-center justify-center rounded-full bg-blue-400 text-white shadow-md">
            🌍
          </span>

          {/* Titre du card */}
          <h3 className="text-lg font-semibold text-gray-800">
            Stabilité dans la diversité des lieux
          </h3>

          {/* Texte explicatif */}
          <p className="text-gray-700 text-sm">
            Travailler depuis des endroits différents apporte de nouvelles
            perspectives et de l’inspiration.
          </p>
        </div>

        {/* Card  3 */}
        <div className="shadow-lg text-center bg-amber-50 rounded-2xl p-6 flex flex-col items-center space-y-4">
          <span className="text-4xl w-16 h-16 flex items-center justify-center rounded-full bg-blue-400 text-white shadow-md">
            🧭
          </span>

          {/* Titre du card */}
          <h3 className="text-lg font-semibold text-gray-800">
            Autonomie et progression professionnelle
          </h3>

          {/* Texte explicatif */}
          <p className="text-gray-700 text-sm">
            Contrôlez votre flux de travail, choisissez les projets qui vous
            passionnent et avancez à votre rythme.
          </p>
        </div>

        {/* Card  4 */}
        <div className="shadow-lg text-center bg-amber-50 rounded-2xl p-6 flex flex-col items-center space-y-4">
          <span className="text-4xl w-16 h-16 flex items-center justify-center rounded-full bg-blue-400 text-white shadow-md">
            💬
          </span>

          {/* Titre du card */}
          <h3 className="text-lg font-semibold text-gray-800">
            Communauté mondiale
          </h3>

          {/* Texte explicatif */}
          <p className="text-gray-700 text-sm">
            Connexions avec des gens du monde entier, échanges d’idées, soutien
            et collaborations.
          </p>
        </div>

        {/* Card 5*/}
        <div className="shadow-lg text-center bg-amber-50 rounded-2xl p-6 flex flex-col items-center space-y-4">
          <span className="text-4xl w-16 h-16 flex items-center justify-center rounded-full bg-blue-400 text-white shadow-md">
            🚀
          </span>

          {/* Titre du card */}
          <h3 className="text-lg font-semibold text-gray-800">
            Productivité personnalisée
          </h3>

          {/* Texte explicatif */}
          <p className="text-gray-700 text-sm">
            Créez votre espace de travail idéal où que vous soyez – cafés,
            coworking, ou tranquillité à la maison – pour des résultats
            optimisés.
          </p>
        </div>

        {/* Card */}
        <div className="shadow-lg text-center bg-amber-50 rounded-2xl p-6 flex flex-col items-center space-y-4">
          <span className="text-4xl w-16 h-16 flex items-center justify-center rounded-full bg-blue-400 text-white shadow-md">
            ☕
          </span>

          {/* Titre du card */}
          <h3 className="text-lg font-semibold text-gray-800">
            Expériences de vie qui nourrissent la créativité
          </h3>

          {/* Texte explicatif */}
          <p className="text-gray-700 text-sm">
            Voyages et rencontres locales stimulent des idées fraîches et des
            solutions innovantes pour vos projets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Troisieme;
