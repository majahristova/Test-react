import React  from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Aboutpage from "./components/Aboutpage";
import Contact from "./components/Contact";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App()  {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Homepage/>
        <Routes>
      <Route exact path="/" component={Homepage}/>
     <Route exact path="/about" component={Aboutpage}/>
     <Route exact path="/contact" component={Contact}/>
     </Routes>
      </div>
      </BrowserRouter>
        
  );
}

export default App;