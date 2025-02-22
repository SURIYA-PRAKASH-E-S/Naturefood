import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../style/Payment.css"; // Import styles

const Payment = () => {
  const [orderAmount, setOrderAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState("pending"); // 'pending', 'processing', 'success', 'failed'
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  // Calculate total order amount
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
    setOrderAmount(total);
  }, [cartItems]);

  // Handle successful payment
  const orderPlace = () => {
    console.log("✅ Order placed successfully!");
    setPaymentStatus("success");

    // Redirect to home page after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  // Load Razorpay SDK
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Fetch order ID from backend
  const fetchOrderId = async (amount) => {
    try {
      const response = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error("❌ Failed to fetch order ID:", error);
      alert("Failed to initiate payment.");
      return null;
    }
  };

  // Handle payment
  const pay = async () => {
    if (orderAmount <= 0) {
      alert("🛒 Cart is empty! Please add items before proceeding.");
      return;
    }

    setLoading(true);
    setPaymentStatus("processing");

    const orderId = await fetchOrderId(orderAmount);

    if (!orderId) {
      alert("❌ Could not get order ID. Please try again.");
      setLoading(false);
      setPaymentStatus("pending");
      return;
    }

    const res = await loadScript("https://checkout.razorpay.com/v2/checkout.js");

    if (!res) {
      alert("⚠️ Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      setPaymentStatus("pending");
      return;
    }

    const options = {
      key: "rzp_test_BFMW1FjnzEzxPN", // Replace with your Razorpay API key
      amount: orderAmount * 100, // Convert to paisa
      currency: "INR",
      name: "NatureFoodie",
      description: "Food Order Payment",
      image: "https://yourwebsite.com/logo.png",
      order_id: orderId, // Order ID from backend
      handler: function (response) {
        console.log("✅ Payment successful:", response);
        orderPlace();
      },
      prefill: {
        name: "NatureFoodie Customer",
        email: "customer@example.com",
        contact: "7502435883",
        upi: "success@razorpay", // ✅ Use this for testing successful UPI payments
      },
      notes: { address: "NatureFoodie, India" },
      theme: { color: "#158993" },
      method: {
        upi: true, // ✅ Enables UPI as a payment option
      },
      modal: {
        ondismiss: function () {
          console.log("⚠️ Payment Cancelled!");
          setPaymentStatus("failed");
          setLoading(false);
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  return (
    <div className="payment-container">
      <h2 className="title">Checkout Payment</h2>

      {paymentStatus === "pending" && (
        <p className="order-amount">
          🏷 Total Amount: <strong>₹{orderAmount.toFixed(2)}</strong>
        </p>
      )}

      {paymentStatus === "processing" && (
        <p className="processing">⏳ Processing Payment... Please Wait</p>
      )}

      {paymentStatus === "success" && (
        <p className="success">✅ Payment Successful! Redirecting to Home Page...</p>
      )}

      {paymentStatus === "failed" && (
        <p className="failed">❌ Payment Failed! Please Try Again.</p>
      )}

      <button
        className={`button_pay ${loading ? "disabled" : ""}`}
        onClick={pay}
        disabled={loading || paymentStatus === "success"}
      >
        {loading ? "Processing..." : `Pay ₹${orderAmount.toFixed(2)}`}
      </button>
    </div>
  );
};

export default Payment;
