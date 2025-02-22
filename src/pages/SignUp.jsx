import React from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignUp = () => {
   return (
      <>
         <Navbar />

         <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
               {/* Left Side: Sign Up Form */}
               <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                  <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                     <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                        Create an Account
                     </h2>
                     <p className="mt-2 text-sm text-gray-600">
                        Already have an account?{" "}
                        <a
                           href="/signIn"
                           className="font-semibold text-black transition-all duration-200 hover:underline">
                           Sign in
                        </a>
                     </p>
                     <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                           {/* Full Name Field */}
                           <div>
                              <label
                                 htmlFor="name"
                                 className="text-base font-medium text-gray-900">
                                 Full Name
                              </label>
                              <div className="mt-2">
                                 <input
                                    id="name"
                                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    type="text"
                                    placeholder="Full Name"
                                 />
                              </div>
                           </div>

                           {/* Email Address Field */}
                           <div>
                              <label
                                 htmlFor="email"
                                 className="text-base font-medium text-gray-900">
                                 Email Address <span className="text-red-500">*</span>
                              </label>
                              <div className="mt-2">
                                 <input
                                    id="email"
                                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                 />
                              </div>
                           </div>

                           {/* Address Field */}
                           <div>
                              <label
                                 htmlFor="address"
                                 className="text-base font-medium text-gray-900">
                                 Address
                              </label>
                              <div className="mt-2">
                                 <input
                                    id="address"
                                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    type="text"
                                    placeholder="Your Address"
                                 />
                              </div>
                           </div>

                           {/* Password Field */}
                           <div>
                              <label
                                 htmlFor="password"
                                 className="text-base font-medium text-gray-900">
                                 Password <span className="text-red-500">*</span>
                              </label>
                              <div className="mt-2">
                                 <input
                                    id="password"
                                    className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    type="password"
                                    placeholder="Password"
                                    required
                                 />
                              </div>
                           </div>

                           <div>
                              <button
                                 type="button"
                                 className="inline-flex w-full items-center justify-center rounded-md bg-yellow-500 px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-black/80 hover:text-white transition-all duration-200">
                                 Sign Up{" "}
                                 <ArrowRight className="ml-2" size={16} />
                              </button>
                           </div>
                        </div>
                     </form>

                     <div className="mt-3 space-y-3">
                        <button
                           type="button"
                           className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black">
                           <span className="inline-block mr-2">
                              <svg
                                 className="w-6 h-6 text-rose-500"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 fill="currentColor">
                                 <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                              </svg>
                           </span>
                           Sign up with Google
                        </button>
                     </div>
                  </div>
               </div>

               {/* Right Side: Image */}
               <div className="flex items-center justify-center">
                  <img
                     className="object-contain w-full h-auto rounded-md"
                     src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="Sign Up"
                  />
               </div>
            </div>
         </section>

         <Footer />
      </>
   );
};

export default SignUp;
