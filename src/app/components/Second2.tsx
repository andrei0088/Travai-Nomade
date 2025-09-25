import React from "react";

const Second2 = () => {
  return (
    <div className="w-full min-h-screen p-10" id="pg3">
      <h2 className="w-full text-2xl font-bold text-center mb-10">
        Comment votre aventure se déroule
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start justify-center p-4 rounded-lg">
        {/* Card 1 */}
        <div className="shadow-md text-center">
          <img src="./img2.jpg" alt="" className="w-full rounded-lg" />
          {/* Numărul jumătate peste imagine */}
          <span className="inline-flex -mt-6 w-12 h-12 rounded-full bg-blue-500 text-white text-lg font-bold shadow-lg items-center justify-center mx-auto">
            1
          </span>
          <p className="mt-4 mb-5">
            Levez les yeux de l&apos;ordinateur et découvrez le monde
          </p>
        </div>

        {/* Card 2 */}
        <div className="shadow-md text-center rounded-lg">
          <img src="./img4.jpg" alt="" className="w-full rounded-lg" />
          <span className="inline-flex -mt-6 w-12 h-12 rounded-full bg-blue-500 text-white text-lg font-bold shadow-lg items-center justify-center mx-auto">
            2
          </span>
          <p className="mt-4 mb-5">
            Osez sortir des écrans et laissez-vous surprendre par
            l&apos;inattendu
          </p>
        </div>

        {/* Card 3 */}
        <div className="shadow-md text-center rounded-lg">
          <img src="./img3.jpg" alt="" className="w-full rounded-lg" />
          <span className="inline-flex -mt-6 w-12 h-12 rounded-full bg-blue-500 text-white text-lg font-bold shadow-lg items-center justify-center mx-auto">
            3
          </span>
          <p className="mt-4 mb-5">
            Découvrez de nouveaux lieux et de nouvelles personnes
          </p>
        </div>

        {/* Card 4 */}
        <div className="shadow-md text-center rounded-lg">
          <img src="./img5.jpeg" alt="" className="w-full rounded-lg" />
          <span className="inline-flex -mt-6 w-12 h-12 rounded-full bg-blue-500 text-white text-lg font-bold shadow-lg items-center justify-center mx-auto">
            4
          </span>
          <p className="mt-4 mb-5">
            Rencontrez des visages inconnus et créez des souvenirs durables
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second2;
