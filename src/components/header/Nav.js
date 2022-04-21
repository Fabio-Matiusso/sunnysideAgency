import React from "react";
import styled from 'styled-components'
import Burger from './Burger'
import NavLogo from '../../images/logo.svg'

const NavStyled = styled.nav`
    padding: 0 20px;
    display: flex;
    color: white;
    list-style: none;
    margin: 0px;
    padding: 0px;
    height: 60px;
    align-items: center;
    width: 1500px;
    justify-content: space-between;
    z-index: 999;
    .logo{
        padding: 15px 0;
    }
`

const LogoHeader = styled.img`
    @media (max-width: 860px) {
        width: 100%;
    }
`


const Nav = (props) => {
    return(

            <NavStyled>

                <div  className="logo">
                    <LogoHeader src = {NavLogo} />
                </div>
                <Burger />
                
            </NavStyled>
    )
}

export default Nav