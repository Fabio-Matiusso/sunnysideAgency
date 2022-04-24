import styled from 'styled-components'


export const ContainerFooter = styled.footer`
    width: 100%;
    height: 350px;
    background-color: #90D4C6;
    display: flex;
    flex-direction: column;
`

export const LogoAndOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 150px;
`

export const LogoSunnyside = styled.img`
    width: 170px;
    margin: 0 auto;
    filter: invert(37%) sepia(41%) saturate(533%) hue-rotate(118deg) brightness(97%) contrast(92%);
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    color: #458D7E;
    width: 300px;
    margin: 0 auto;
    color: #458D7E;
    cursor: pointer;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.128571px;

    p:hover{
        color: #fff;
        transition: all 0.1s linear;
    }

`

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    width: 164px;
    margin: 0 auto;
    height: 120px;
    align-items: flex-end;
`

export const IconSocialMedia = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover{
        filter:  brightness(0) invert(1);
        transition: all 0.1s linear;
    }
`