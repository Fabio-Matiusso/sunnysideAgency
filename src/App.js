import React from "react"
import './generalstyle.css'
import Header from "./components/header/Header";
import Creatives from "./components/creatives/Creatives";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Header />
      <Creatives /> 
      <Services />
    </>
  );
}

export default App;
