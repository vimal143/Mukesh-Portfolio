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

function App() {
  return (
    <div>
      <BrowserRouter>
      <Banner />
      <Nav />
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
