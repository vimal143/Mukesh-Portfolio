import React from "react";
import "./App.css";
import {BrowserRouter} from 'react-router-dom';
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";

import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  const wid=window.innerWidth;
  console.log(wid);

  return (
    <div>
      <BrowserRouter>
      <Banner />
      
      {wid<=600?<Nav/>:<Navbar/>}
      <Services />
      <Skills />
       <Projects/>
      <About />
      <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
