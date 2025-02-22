import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
   return (
      <div className="w-full min-h-[40vw] flex items-center justify-center bg-blue py-12">
         <section className="text-center px-6">
            <h2 className="text-3xl font-bold text-white">
               “Eating well is a form of self-respect.”
            </h2>
            <p className="mt-4 text-lg text-white">
               Choose fresh, natural, and delicious food for a healthier life!
            </p>
            <Link
               to="/menu"
               className="inline-block px-4 py-2 mt-8 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:text-black hover:bg-white transition">
               Order Now
            </Link>
         </section>
      </div>
   );
};

export default Join;
