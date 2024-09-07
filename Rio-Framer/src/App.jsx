import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Content01 from "./Components/Content01/Content01";
import Block02 from "./Components/Block02/Block02";
import Testimonials from "./Components/Testimonials/Testimonials";
import Process from "./Components/Process/Process";
import Pricing from "./Components/Pricing/Pricing";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Content01 />
      <Block02 />
      <Testimonials />
      <Process />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
