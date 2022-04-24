import React from "react";
import Slide from 'react-reveal/Slide'
import EmilyImage from '../../images/image-emily.jpg'
import JennieImage from '../../images/image-jennie.jpg'
import ThomasImage from '../../images/image-thomas.jpg'
import Zoom from 'react-reveal/Zoom'
import { ContainerClients, ClientTitle, ClientInfo, Emily, ImageClients, NameAndOcupation, Thomas, Jennie } from "./styledcomponents";



const Clients = () =>{
    return(
        <ContainerClients>

            <ClientTitle>Client Testmonials</ClientTitle>

            {/* EMILY */}

            <Emily>
                <Slide left>
                    <ClientInfo>
                        <ImageClients src = {EmilyImage}/>
                        <ClientInfo>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</ClientInfo>

                        <NameAndOcupation>
                            <span>Emily R.</span>
                            <p>Marketing Director</p>
                        </NameAndOcupation>
                    </ClientInfo>
                </Slide>
            </Emily>

            {/* THOMAS */}

            <Thomas>
                <Zoom>
                    <ClientInfo>
                        <ImageClients src = {ThomasImage}/>
                        <ClientInfo>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</ClientInfo>

                        <NameAndOcupation>
                            <span>Emily R.</span>
                            <p>Marketing Director</p>
                        </NameAndOcupation>
                    </ClientInfo>
                </Zoom>
            </Thomas>

            <Jennie>
                <Slide right>
                    <ClientInfo>
                        <ImageClients src = {JennieImage}/>
                        <ClientInfo>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</ClientInfo>

                        <NameAndOcupation>
                            <span>Emily R.</span>
                            <p>Marketing Director</p>
                        </NameAndOcupation>
                    </ClientInfo>
                </Slide>
            </Jennie>


        </ContainerClients>
    )
}

export default Clients