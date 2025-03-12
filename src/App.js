import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AnimatePresence>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        {isLoaded && (
          <motion.div 
            className="font-robotoMono bg-primary text-textPrimary"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Header></Header>
              <Hero></Hero>
              <About></About>
              <Projects></Projects>
              <Contact></Contact>
          </motion.div>
        )}
    </AnimatePresence>
  );
};

export default App;