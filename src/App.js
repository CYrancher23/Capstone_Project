import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navBar">
          <NavBar/>
        </div>
         <Routes className="switch">
           <Route path="/" element= {<Home />} />

         </Routes>
         <Footer/>
       </Router>
      
    </div>
  );
}

export default App;
