import styled from 'styled-components'
import ImageHeader from '../../images/desktop/image-header.jpg'
import ImageHeaderMobile from '../../images/mobile/image-header.jpg'

export const StyledCreativeDiv = styled.div`
    background-image: url(${ImageHeader});
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    max-width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    justify-content: space-evenly;

    @media (max-width: 850px) {
    background-image: url(${ImageHeaderMobile});
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    }
`

export const StyledH1 = styled.h1`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 69px;
    text-align: center;
    letter-spacing: 8.75px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0 auto;

    @media (max-width: 850px){
        width: 80%;
    }

    @media (max-width: 540px){
        font-size: 40px;
    }

    @media (max-width: 430px){
        font-size: 32px;
    }
`

export const ImageArrow = styled.img`
    margin-bottom: 120px;

    @media (max-width: 850px){
        height: 200px;
        margin-bottom: 0px;
    }

    @media (max-width: 540px){
        height: 170px;
        margin-bottom: 120px;
    }

    @media (max-width: 430px){
        height: 140px;
    }
`