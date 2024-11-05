import "./App.css";
// import Navbar from "react-bootstrap/Navbar";
import Navbar from "./components/Navbar/Navbar";
// import Home from  "./pages/Home/Home";
import Header  from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Pizza from "./components/Pizza/Pizza"
// import Cart from "./pages/Cart/Cart";
// import LoginForm from "./pages/LoginPage/LoginPage"
// import RegisterForm from "./pages/Register/Register"


function App() {

  return (
    <>
    
      <Navbar />
      <Header />
      {/* <Home /> */}
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
      
    </>
  );
}

export default App;
