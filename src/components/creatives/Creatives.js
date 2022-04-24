import React from "react";
import Arrow from '../../images/icon-arrow-down.svg'
import Fade from 'react-reveal/Fade';
import { StyledCreativeDiv, StyledH1, ImageArrow } from "./styledcomponents";




const Creatives = () => {
    return(
        <StyledCreativeDiv>
            <Fade left>
                <StyledH1>we are creatives</StyledH1>
                <ImageArrow src = {Arrow}/>
            </Fade>
        </StyledCreativeDiv>
    )
}

export default Creatives