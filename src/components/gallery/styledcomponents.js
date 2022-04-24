import styled from 'styled-components'
import Milk from '../../images/desktop/image-gallery-milkbottles.jpg'
import Orange from '../../images/desktop/image-gallery-orange.jpg'
import Cone from '../../images/desktop/image-gallery-cone.jpg'
import Sugar from '../../images/desktop/image-gallery-sugarcubes.jpg'
import MilkMobile from '../../images/mobile/image-gallery-milkbottles.jpg'
import OrangeMobile from '../../images/mobile/image-gallery-orange.jpg'
import ConeMobile from '../../images/mobile/image-gallery-cone.jpg'
import SugarMobile from '../../images/mobile/image-gallery-sugar-cubes.jpg'

export const ContainerImagesDecoration = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 768px) {
        margin-top: 700px;
        grid-template-columns: auto;
    }
`

export const MilkComponent = styled.div`
    background-image: url(${Milk});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    grid-column: 1;
    height: 447px;

    @media (max-width: 768px) {
        background-image: url(${MilkMobile});
        grid-row: 1;
    }
`

export const OrangeComponent = styled.div`
    background-image: url(${Orange});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    grid-column: 2;
    height: 447px;

    @media (max-width: 768px) {
        background-image: url(${OrangeMobile});
        grid-column: 2;
        grid-row: 1;
    }

    @media (max-width: 600px){
        grid-column: 1;
        grid-row: 2;
    }
`

export const ConeComponent = styled.div`
    background-image: url(${Cone});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    grid-column: 3;
    height: 447px;

    @media (max-width: 768px) {
        background-image: url(${ConeMobile});
        grid-column: 1;
        grid-row: 2;
    }

    @media (max-width: 600px){
        grid-column: 1;
        grid-row: 3;
    }
`

export const SugarComponent = styled.div`
    background-image: url(${Sugar});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    grid-column: 4;
    height: 447px;

    @media (max-width: 768px) {
        background-image: url(${SugarMobile});
        grid-column: 2;
        grid-row: 2;
    }

    @media (max-width: 600px){
        grid-column: 1;
        grid-row: 4;
    }
`


