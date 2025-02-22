import React from "react";

const Hero = () => {
   return (
      <div className="relative bg-white w-full min-h-screen flex items-center">
         <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
               <div className="flex items-center p-1 space-x-2 bg-gray-100 rounded-full max-w-max">
                  <p className="text-sm font-medium text-blue-600">Let&apos;s eat</p>
                  <p className="text-sm font-medium text-blue-600">
                     Our <a href="/menu" className="hover:text-blue-800">Nature-Food &rarr;</a> 
                  </p>
               </div>
               <h1 className="mt-8 text-3xl font-normal tracking-tight text-blue-600 md:text-4xl lg:text-6xl">
                  Order Your
                  <span className="block font-serif text-4xl font-bold md:text-6xl">
                     Favourite Food
                  </span>
               </h1>
               <p className="mt-8 text-lg text-blue-500">
                  "Satisfy your cravings, elevate your taste. Welcome to{" "}
                  <span className="font-semibold text-blue-700">Nature-Food</span>,
                  where every bite is a delight!"
               </p>
               <form className="flex items-start mt-8 space-x-2">
                  <div>
                     <input
                        className="w-full px-3 py-2 text-sm bg-transparent border rounded-md border-blue-300 placeholder:text-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 text-blue-600"
                        type="search"
                        placeholder="Search food"
                        id="search"
                     />
                     <p className="mt-2 text-sm text-blue-400">
                        We care about your food
                     </p>
                  </div>
                  <button
                     type="button"
                     className="rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none">
                     Search
                  </button>
               </form>
            </div>

            <div className="relative px-2 lg:col-span-5 xl:col-span-6 flex justify-center">
               <img
                  className="w-full h-auto max-h-[90vh] object-cover rounded-3xl shadow-2xl"
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Delicious Food"
               />
            </div>
         </div>
      </div>
   );
};

export default Hero;
