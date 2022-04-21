import React from "react"
import styled from "styled-components"
import Nav from "./Nav"


const HeaderStyled = styled.header`
max-width: 1352px;
height: 56px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
top: 25px;
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