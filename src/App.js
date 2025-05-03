import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Hay from "./pages/Hay/Hay";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Livestock from "./pages/Livestock/Livestock";
import Affiliates from "./pages/Affiliates/Affiliates";
import Employee from "./pages/Employee/Employee";
import HayPrices from "./pages/HayPrices/HayPrices";
import MeatPrices from "./pages/MeatPrices/MeatPrices";
import CowPrices from "./pages/CowPrices/CowPrices";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navBar">
          <NavBar/>
        </div>
         <Routes className="switch">
           <Route path="/" element= {<Home />} />
           <Route path="/aboutus" element= {<AboutUs />} />
           <Route path="/hay" element= {<Hay />} />
           <Route path="/contactus" element= {<ContactUs />} />
           <Route path="/livestock" element= {<Livestock />} />
           <Route path="/affiliates" element= {<Affiliates />} />
           <Route path="/employee" element= {<Employee />}/>
           <Route path="/employee/hay/prices" element= {<HayPrices />}/>
           <Route path="/employee/cow/prices" element= {<CowPrices />}/>
           <Route path="/employee/meat/prices" element= {<MeatPrices />}/>
         </Routes>
         <Footer/>
       </Router>
      
    </div>
  );
}

export default App;
