import React from "react";
import First from "./components/First";
import Second from "./components/Second";
import Second2 from "./components/Second2";
import Second3 from "./components/Second3";
import Troisieme from "./components/Troisieme";
import { ContactForm } from "./components/ContactForm";

const Home = () => {
  return (
    <div>
      <First />
      <div className="bg-[#f3f3f3]" id="pg2">
        <Second />
        <Second2 />
        <Second3 />
      </div>
      <Troisieme />
      <div className="bg-[#f3f3f3] ">
        <ContactForm />
      </div>
      <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Travail Nomade. Tous droits réservés.</p>
          <p className="text-sm">
            Ceci est un prototype. Les informations affichées ici sont fictives
            et utilisées uniquement à des fins de démonstration.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
