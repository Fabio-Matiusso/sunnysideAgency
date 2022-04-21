import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const TriangleMenu = styled.div`
    width: 0;
    height: 0;
    top: -35px;
    right: 0px;
    border-bottom: 35px solid #fff;
    border-left: 35px solid transparent;
    position: absolute;
`

const LiStyled = styled.li`
    list-style: none;
    margin: 0px;
    display: flex;
    padding: 15px;
    padding: 25px 0;
    color: #fff;
    text-decoration: none;
    margin: 10px;
    font-size: 18px;

    
    @media (max-width: 768px){
        justify-content: space-evenly;
        color: #808397;
        text-align: center;
        margin: 0 auto;
    }
`

const LiContact = styled.li`
    list-style: none;
    margin: 0px;
    display: flex;
    padding: 15px;
    padding: 25px 0;
    color: #fff;
    text-decoration: none;
    margin: 10px;
    background-color: white;
    background: #FFFFFF;
    border-radius: 28px;
    width: 140px;
    height: 56px;
    color: #24303E;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;

    
    @media (max-width: 768px){
        background-color: #FBD600 ;
        margin: 0 auto;
    }

`

const Ul = styled.ul`
    position: relative;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        width: 700px;
        justify-content: center;
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        transform: ${({open}) => open ?  'translateX(-50%)' : 'translateX(120%)' } ;
        top: 90px;
        left: 50%;
        max-height: 500px;
        max-width: 600px;
        transition: transform 0.3s ease-in-out;
    }

    @media (max-width: 620px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        transform: ${({open}) => open ?  'translateX(-50%)' : 'translateX(120%)' } ;
        top: 90px;
        left: 50%;
        height: 300px;
        max-width: 400px;
        transition: transform 0.3s ease-in-out;
    }

    @media (max-width: 420px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        transform: ${({open}) => open ?  'translateX(-50%)' : 'translateX(120%)' } ;
        top: 90px;
        left: 50%;
        height: 300px;
        max-width: 300px;
        transition: transform 0.3s ease-in-out;
    }
`

const RightNav = ({ open }) => {
    return(
        <Ul open = {open}>
            <TriangleMenu />
            <LiStyled>About</LiStyled>
            <LiStyled>Services</LiStyled>
            <LiStyled>Projects</LiStyled>
            <LiContact>Contact</LiContact>
        </Ul>
    )
}

export default RightNav