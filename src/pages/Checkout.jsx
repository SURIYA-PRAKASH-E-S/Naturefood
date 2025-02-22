import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../style/Checkout.css'
const Checkout = () => {
   const cartItems = useSelector((state) => state.cart.cart);
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      postalCode: "",
   });

   const navigate = useNavigate();
   const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleCheckout = (e) => {
      e.preventDefault();
      if (Object.values(formData).some((field) => field.trim() === "")) {
         alert("Please fill in all the fields before proceeding to payment.");
         return;
      }
      navigate("/payment");
   };

   return (
      <>
         <Navbar />
         <div className="checkout-container">
            {/* Shipping Details Form */}
            <div className="checkout-form">
               <h2>Shipping Details</h2>
               <form onSubmit={handleCheckout}>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
                  <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
                  <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Postal Code" required />
                  <button type="submit">Proceed to Payment</button>
               </form>
            </div>

            {/* Order Summary */}
            <div className="checkout-summary">
               <h2>Order Summary</h2>
               {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                     <div key={item.id} className="order-item">
                        <span>{item.name} × {item.qty}</span>
                        <span>₹{(item.qty * item.price).toFixed(2)}</span>
                     </div>
                  ))
               ) : (
                  <p>Your cart is empty</p>
               )}
               <div className="total-price">Total: ₹{totalPrice.toFixed(2)}</div>
               <button onClick={() => navigate("/menu")} className="continue-btn">Continue Ordering</button>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Checkout;
