import React from "react"
import './generalstyle.css'
import Header from "./components/header/Header";
import Creatives from "./components/creatives/Creatives";
import Services from "./components/services/Services";
import Clients from "./components/clients/Clients";

function App() {
  return (
    <>
      <Header />
      <Creatives /> 
      <Services />
      <Clients />
    </>
  );
}

export default App;
