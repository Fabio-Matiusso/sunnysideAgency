import React from "react";
import Header from '../components/header/Header'
import Clients from '../components/clients/Clients'
import Creatives from '../components/creatives/Creatives'
import Gallery from '../components/gallery/Gallery'
import Services from '../components/services/Services'
import Footer from '../components/footer/Footer'

const Page = () => {
    return(
        <>
            <Header />
            <Creatives /> 
            <Services />
            <Clients />
            <Gallery />
            <Footer />
        </>
    )
}

export default Page