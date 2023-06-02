import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature1 from "./components/Feature1";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature1 />
      <Newsletter />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
