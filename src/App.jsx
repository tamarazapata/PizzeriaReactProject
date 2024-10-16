import "./App.css";
// import Navbar from "react-bootstrap/Navbar";
import Navbar from "./components/Navbar/Navbar";
import Home from  "./pages/Home/Home";
import Header  from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <>
    
      <Navbar />
      <Header />
      <Home />
      <Footer />
      
    </>
  );
}

export default App;
