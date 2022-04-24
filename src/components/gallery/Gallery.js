import React from "react";
import Slide from 'react-reveal/Slide';
import { ContainerImagesDecoration, MilkComponent, OrangeComponent, ConeComponent, SugarComponent } from "./styledcomponents";


const Gallery = () => {
    return(
        <Slide bottom>
            <ContainerImagesDecoration>
                <MilkComponent />
                <OrangeComponent />
                <ConeComponent />
                <SugarComponent />
            </ContainerImagesDecoration>
        </Slide>
    )
}

export default Gallery