import React from "react"
import './generalstyle.css'
import Header from "./components/header/Header";
import Creatives from "./components/creatives/Creatives";
import Services from "./components/services/Services";
import Clients from "./components/clients/Clients";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Creatives /> 
      <Services />
      <Clients />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
