import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
import NavBarMenu from "./components/Navbar/Navbar";
import Home from  "./pages/Home/Home";
import Header  from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Pizza from "./components/Pizza/Pizza"
import Cart from "./pages/Cart/Cart";
import LoginForm from "./pages/LoginPage/LoginPage"
import RegisterForm from "./pages/Register/Register"
import NotFound from "./components/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import { CartProvider } from "./context/CartContext";
// import { useContext } from "react";


function App() {
  const location = useLocation();
  return (
    <>
    <CartProvider>
        <NavBarMenu />
        {location.pathname !== "/cart" && <Header />}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path = "/pizza/p001" element={<Pizza />} />
            <Route path = "/profile" element={<Profile />} />
        </Routes>
        <Footer />
    </CartProvider>


      
    </>
  );
}

export default App;
