import React from "react"
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import EggImage from '../../images/desktop/image-transform.jpg'
import CupImage from '../../images/desktop/image-stand-out.jpg'
import CherryImage from '../../images/desktop/image-graphic-design.jpg'
import OrangeImage from '../../images/desktop/image-photography.jpg'

const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: auto
    }
`
    
const Egg = styled.div`
    background-image: url(${EggImage});
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 500px;
`


const DivGridItemEgg = styled.div`
    
    width: 100%;
    height: 100%;
    grid-row: 1;
    grid-column: 2;

    @media (max-width: 768px){
        grid-row: 1;
        grid-column: 1;
    }
`

const BrandTextEgg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: 1;
    grid-row: 1;
    height: 500px;
    max-width: 80%;
    margin: 0 auto;

    @media (max-width: 768px){
        grid-row: 2;
        grid-column: 1;
        text-align: center;
    }
`

const DivGridItemCup = styled.div`
    
    width: 100%;
    height: 100%;
    grid-row: 2;
    grid-column: 1;

    @media (max-width: 768px){
        grid-row: 3;
        grid-column: 1;
    }
`
    
const Cup = styled.div`
    background-image: url(${CupImage});
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 500px;  
`



const BrandTextCup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: 2;
    grid-row: 2;
    height: 500px;
    max-width: 80%;
    margin: 0 auto;

    @media (max-width: 768px){
        grid-column: 1;
        grid-row: 4;
        text-align: center;
    }
`

const StyledTitle = styled.h1`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 49px;
    letter-spacing: -0.285714px;
    color: #24303E;
`

const StyledDesc = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.128571px;
    color: #808397;
`

const LearnMore = styled.p`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
`

const DivGridItemCherry = styled.div`
    
    width: 100%;
    height: 100%;
    grid-column: 1;
    grid-row: 3;

    @media (max-width: 768px){
        grid-row: 5;
        grid-column: 1;
    }
`

const Cherry = styled.div`
    background-image: url(${CherryImage});
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;
`

const GraphicDesign = styled.h1`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #24554A;
`

const GraphicDesignDesc = styled.p`
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.114286px;
    color: #3E7467;
    max-width: 70%;
    margin: 0px auto 50px auto;

    @media (max-width: 900px){
        margin: 0px auto 0px auto;
    }
`

const DivGridItemOrange = styled.div`
    
    width: 100%;
    height: 100%;
    grid-column: 2;
    grid-row: 3;

    @media (max-width: 768px){
        grid-row: 6;
        grid-column: 1;
    }
`

const Orange = styled.div`
    background-image: url(${OrangeImage});
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;

`
const Photograph = styled.h1`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #24554A;

    
`

const PhotographDesc = styled.p`
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.114286px;
    color: #3E7467;
    max-width: 70%;
    margin: 0px auto 50px auto;

    @media (max-width: 900px){
        margin: 0px auto 0px auto;
    }
`



const Services = () => {
    return(
        <ContainerGrid>
            <BrandTextEgg>
                <Fade left>
                    <StyledTitle>Transform your brand</StyledTitle>
                    <StyledDesc>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</StyledDesc>
                    <LearnMore>Learn More</LearnMore>
                </Fade>
            </BrandTextEgg>

            <DivGridItemEgg>
                <Fade right>
                    <Egg />
                </Fade>
            </DivGridItemEgg>

            <DivGridItemCup>
                <Fade left>
                    <Cup />
                </Fade>
            </DivGridItemCup>

            <BrandTextCup>
                <Fade right>
                    <StyledTitle>Stand out to the right audience</StyledTitle>
                    <StyledDesc>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </StyledDesc>
                    <LearnMore>Learn More</LearnMore>
                </Fade>
            </BrandTextCup>

            <DivGridItemCherry>
                <Fade left>
                    <Cherry>
                        <Fade right>
                            <GraphicDesign>Graphic Design</GraphicDesign>
                            <GraphicDesignDesc>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</GraphicDesignDesc>
                        </Fade>
                    </Cherry>
                </Fade>
            </DivGridItemCherry>

            <DivGridItemOrange>
                <Fade right>
                    <Orange>
                        <Fade left>
                            <Photograph>Photography</Photograph>
                            <PhotographDesc>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</PhotographDesc>
                        </Fade>
                    </Orange>
                </Fade>
            </DivGridItemOrange>

            
        </ContainerGrid>
    )
}

export default Services