import { useState, useEffect } from "react";
import "./App.css";

import AnimatedBackground from "./components/AnimatedBackground";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubStats />
        <Certificates />
        <Contact />
      </main>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;