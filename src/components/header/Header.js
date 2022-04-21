import React from "react"
import styled from "styled-components"
import Nav from "./Nav"


const HeaderStyled = styled.header`
    max-width: 90%;
    height: 56px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    left:0;
    right:0;
    margin-left: auto;
    margin-right: auto;
    top: 25px;

    @media (max-width: 860px) {
        width: 80%;
    }
`

const Header = () => {

    return(
            <>
                <HeaderStyled>
                        <Nav/>
                </HeaderStyled>
            </>
    )
}

export default Header