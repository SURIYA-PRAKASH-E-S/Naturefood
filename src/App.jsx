import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";

//pages
import Home from "./pages/Home";
import Error from "./pages/Error";

import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
// import SignIn from "./pages/SignIn";
import Success from "./pages/Success";
import ContactUs from "./components/ContactUs";
// import SignUp from "./pages/SignUp";
import AdminLogin from "./pages/Admin/AdminLogin";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";


const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/cart" element={<Cart />} />
            {/* <Route exact path="/signIn" element={<SignIn />} /> */}

            {/* <Route exact path="/signup" element={<SignUp />} /> */}
            <Route exact path="/*" element={<Error />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/orders" element={<Orders/>} />




            <Route exact path="/admin/login" element={<AdminLogin />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/payment" element={<Payment />} />


            <Route
               exact
               path="/success"
               element={<ProtectedRoute element={<Success />} />}
            />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
