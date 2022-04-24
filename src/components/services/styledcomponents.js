import styled from 'styled-components'
import EggImage from '../../images/desktop/image-transform.jpg'
import CupImage from '../../images/desktop/image-stand-out.jpg'
import CherryImage from '../../images/desktop/image-graphic-design.jpg'
import OrangeImage from '../../images/desktop/image-photography.jpg'


export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: auto
    }
`
    
export const Egg = styled.div`
    background-image: url(${EggImage});
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 500px;
`


export const DivGridItemEgg = styled.div`
    
    width: 100%;
    height: 100%;
    grid-row: 1;
    grid-column: 2;

    @media (max-width: 768px){
        grid-row: 1;
        grid-column: 1;
    }
`

export const BrandTextEgg = styled.div`
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

export const DivGridItemCup = styled.div`
    
    width: 100%;
    height: 100%;
    grid-row: 2;
    grid-column: 1;

    @media (max-width: 768px){
        grid-row: 3;
        grid-column: 1;
    }
`
    
export const Cup = styled.div`
    background-image: url(${CupImage});
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 500px;  
`



export const BrandTextCup = styled.div`
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

export const StyledTitle = styled.h1`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 49px;
    letter-spacing: -0.285714px;
    color: #24303E;
`

export const StyledDesc = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.128571px;
    color: #808397;
`

export const LearnMore = styled.p`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
`

export const DivGridItemCherry = styled.div`
    
    width: 100%;
    height: 100%;
    grid-column: 1;
    grid-row: 3;

    @media (max-width: 768px){
        grid-row: 5;
        grid-column: 1;
    }
`

export const Cherry = styled.div`
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

export const GraphicDesign = styled.h1`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #24554A;
`

export const GraphicDesignDesc = styled.p`
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

export const DivGridItemOrange = styled.div`
    
    width: 100%;
    height: 100%;
    grid-column: 2;
    grid-row: 3;

    @media (max-width: 768px){
        grid-row: 6;
        grid-column: 1;
    }
`

export const Orange = styled.div`
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
export const Photograph = styled.h1`
    font-family: 'Fraunces 9pt Soft';
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #24554A;

    
`

export const PhotographDesc = styled.p`
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