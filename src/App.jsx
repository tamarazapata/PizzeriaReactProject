import "./App.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
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
import UserProvider , { UserContext } from "./context/UserContext";
import { useContext } from "react";


function App() {
  const location = useLocation();
  const { token } = useContext(UserContext);
  return (
    <UserProvider>
      <CartProvider>
          <NavBarMenu />
          {location.pathname !== "/cart" && <Header />}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
              {/* <Route path="/login" element={token && token.state ? navigate("/") : <LoginForm />}/>
              <Route path="/register" element={token && token.state ? navigate("/") : <RegisterForm />}/> */}
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
              <Route path = "/pizza/:id" element={<Pizza />} />
              {/* Si el token es false, redirige a "/login".
              Además, si el token es true, los usuarios no deberían poder acceder a la página de
              login y register (los puedes redirigir al home) */}
              <Route path="/profile" element={token && token.state ? <Profile /> :  <Navigate to="/login" />}/>

          </Routes> 
          <Footer />
      </CartProvider>
    </UserProvider>


  );
}

export default App;
