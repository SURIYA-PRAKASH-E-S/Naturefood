import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/CartSlice"; // Import clearCart action
import "../style/Payment.css"; // Import styles

const Payment = () => {
  const [orderAmount, setOrderAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState("pending"); // 'pending', 'processing', 'success'
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For redirection

  // Calculate total order amount
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
    setOrderAmount(total);
  }, [cartItems]);

  // Handle successful payment
  const orderPlace = () => {
    console.log("Order placed successfully!");
    setPaymentStatus("success");

    // Clear cart items after successful payment
    dispatch(clearCart());

    // Store order in localStorage
    localStorage.setItem("orderedItems", JSON.stringify(cartItems));

    // Redirect to orders page after 3 seconds
    setTimeout(() => {
      navigate("/orders");
    }, 3000);
  };

  return (
    <div className="payment-container">
      <h2 className="title">Checkout Payment</h2>

      {paymentStatus === "pending" && (
        <p className="order-amount">
          Total Amount: <strong>₹{orderAmount.toFixed(2)}</strong>
        </p>
      )}

      {paymentStatus === "processing" && (
        <p className="processing">Processing Payment... Please Wait</p>
      )}

      {paymentStatus === "success" && (
        <p className="success">Payment Successful! Redirecting to Orders Page...</p>
      )}

      <button
        className="button_pay"
        onClick={orderPlace}
        disabled={loading || paymentStatus === "success"}
      >
        {loading ? "Processing..." : `Pay ₹${orderAmount.toFixed(2)}`}
      </button>
    </div>
  );
};

export default Payment;
