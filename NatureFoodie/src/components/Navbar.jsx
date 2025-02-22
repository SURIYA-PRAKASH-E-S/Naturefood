import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { GiHotMeal } from "react-icons/gi"; // Foodie Icon

const Navbar = () => {
   const menuItems = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Menu", href: "/Menu" },
      { name: "Orders", href: "/orders" },
      { name: "Contact Us", href: "/contact" },
   ];

   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

   // Get Cart Items Count from Redux
   const cartItems = useSelector((state) => state.cart.cart);
   const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);

   return (
      <>
         <div className="relative w-full px-4 bg-yellow-400 shadow-md">
            <div className="flex items-center justify-between py-3 mx-auto max-w-7xl sm:px-6 lg:px-10">
               {/* Logo & Branding */}
               <Link to={"/"} className="flex items-center space-x-2">
                  <GiHotMeal className="text-3xl text-red-600" /> {/* Foodie Icon */}
                  <div className="flex flex-col">
                     <span className="text-xl font-bold lg:text-3xl">{new Date().toUTCString().slice(0, 16)}</span>
                     <div className="text-lg font-bold">
                        Nature <span className="text-green-600">Foodie</span>
                     </div>
                  </div>
               </Link>

               {/* Desktop Menu */}
               <div className="hidden lg:flex space-x-8 ml-20">
                  {menuItems.map((item) => (
                     <Link key={item.name} to={item.href} className="text-sm font-semibold text-gray-800 hover:text-green-600">
                        {item.name}
                     </Link>
                  ))}
               </div>

               {/* Cart Icon with Count */}
               <div className="relative">
                  <Link to={"/cart"}>
                     <FaShoppingCart className="text-2xl text-black hover:text-green-700 transition duration-300" />
                     {cartCount > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                           {cartCount}
                        </span>
                     )}
                  </Link>
               </div>

               {/* Mobile Menu Button */}
               <div className="lg:hidden">
                  <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
               </div>

               {/* Mobile Menu */}
               {isMenuOpen && (
                  <div className="absolute inset-x-0 top-0 z-50 p-3 transition origin-top-right transform lg:hidden bg-white shadow-lg rounded-md">
                     <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-700">Menu</span>
                        <button onClick={toggleMenu}>
                           <X className="w-6 h-6 text-gray-700" />
                        </button>
                     </div>
                     <nav className="mt-4 space-y-3">
                        {menuItems.map((item) => (
                           <Link
                              key={item.name}
                              to={item.href}
                              className="block text-gray-800 font-semibold hover:bg-gray-100 p-2 rounded"
                           >
                              {item.name}
                           </Link>
                        ))}
                     </nav>
                     
                  </div>
               )}
            </div>
         </div>
      </>
   );
};

export default Navbar;
