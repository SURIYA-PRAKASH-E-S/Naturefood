import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Orders = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [orderedItems, setOrderedItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  // Load ordered items from localStorage
  useEffect(() => {
    const previousOrder = JSON.parse(localStorage.getItem("orderedItems")) || [];
    setOrderedItems(previousOrder);
    if (previousOrder.length > 0) {
      setOrderPlaced(true);
    }
  }, []);

  // Handle "Order Again" button
  const handleOrderAgain = () => {
    if (orderPlaced) {
      alert("❌ You have already placed an order!");
      return;
    }

    setOrderPlaced(true);
    localStorage.setItem("orderedItems", JSON.stringify(cartItems)); // Store ordered items
    setOrderedItems(cartItems);
    alert("✅ Order Placed Successfully!");

    // Redirect to home after order
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-teal-600 text-center mb-4">🛒 Your Orders</h2>

        {orderedItems.length === 0 ? (
          <p className="text-red-500 text-lg font-semibold text-center">❌ No orders placed yet.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {orderedItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Qty: {item.qty}</p>
                  <p className="text-gray-800 font-bold">₹{(item.qty * item.price).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

       
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Orders;
