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
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" role="main">
        <Hero />
        <About />
        <Collaboration />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
