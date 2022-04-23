import React from "react";
import styled from 'styled-components'
import Slide from 'react-reveal/Slide'
import EmilyImage from '../../images/image-emily.jpg'
import JennieImage from '../../images/image-jennie.jpg'
import ThomasImage from '../../images/image-thomas.jpg'
import Zoom from 'react-reveal/Zoom'

const ContainerClients = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 0 auto;
    height: 450px;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`

const ClientTitle = styled.h1`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 5px;
    color: #A7AAAD;
    grid-column: 2;

    @media (max-width: 768px){
        grid-row: 1;
        grid-column: 1;
        align-self: flex-start;
        margin-top: 20px;
    }
`

const ImageClients = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 36px;
    margin: 0 auto;
`


const ClientInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.128571px;
    color: #5B636D;
    gap: 50px;

    @media (max-width: 768px){
        gap: 20px;
    }
`

const NameAndOcupation = styled.div`
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span{
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.128571px;
    color: #24303E;
    }

    p{
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #A7AAAD;
    }
`


const Emily = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1;
    height: 100%;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 768px){
        grid-column: 1;
        grid-row: 1;
        width: 60%;
        margin-top: 50px;
        height: 350px;
    }

    @media (max-width: 400px){
        height: 400px;
    }
`

const Thomas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2;
    height: 100%;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 768px){
        grid-column: 1;
        grid-row: 2;
        width: 60%;
        height: 350px;
    }

    @media (max-width: 400px){
        height: 400px;
    }
`

const Jennie = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 3;
    height: 100%;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 768px){
        grid-column: 1;
        grid-row: 3;
        width: 60%;
        height: 350px;
    }
    
    @media (max-width: 400px){
        height: 400px;
    }
`



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