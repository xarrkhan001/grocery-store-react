import React from "react";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhereToBuy from "./components/WhereToBuy";
import AppBanner from "./components/AppBanner";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-cubic",
    });
  }, []);

  return (
    <>
      <main className="">
        <Hero />
        <Services />
        <WhereToBuy />
        <AppBanner />
        <Footer />
      </main>
    </>
  );
};

export default App;
