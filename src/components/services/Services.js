import React from "react"
import Fade from 'react-reveal/Fade'
import { ContainerGrid, BrandTextEgg, StyledTitle, StyledDesc, LearnMore, DivGridItemEgg, Egg, DivGridItemCup, Cup, BrandTextCup, DivGridItemCherry, Cherry, DivGridItemOrange, Orange, GraphicDesign, GraphicDesignDesc, Photograph, PhotographDesc } from "./styledcomponents"

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