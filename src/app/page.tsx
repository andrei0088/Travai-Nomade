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
      <h1 className="mt-4 text-2xl font-bold">test</h1>
    </div>
  );
};

export default Home;
