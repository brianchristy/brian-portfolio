import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

const AppContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader flex-center">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;