import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Collaboration } from "./components/Collaboration/Collaboration";
import { Pricing } from "./components/Pricing/Pricing";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "./styles/globals.css";
import "./i18n/config";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Collaboration />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
