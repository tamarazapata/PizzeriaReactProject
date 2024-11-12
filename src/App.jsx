import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
import NavBarMenu from "./components/Navbar/Navbar";
import Home from  "./pages/Home/Home";
import Header  from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Pizza from "./components/Pizza/Pizza"
import Cart from "./pages/Cart/Cart";
import LoginForm from "./pages/LoginPage/LoginPage"
import RegisterForm from "./pages/Register/Register"
import NotFound from "./components/NotFound/NotFound";


function App() {

  return (
    <>

      <NavBarMenu />
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />

      </Routes>
      {/* <Home /> */}
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <Cart /> */}
      {/* <Pizza /> */}
      <Footer />
      
    </>
  );
}

export default App;
