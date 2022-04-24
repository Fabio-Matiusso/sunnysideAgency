import React from "react"
import FacebookIcon from '../../images/icon-facebook.svg'
import InstagramIcon from '../../images/icon-instagram.svg'
import TwitterIcon from '../../images/icon-twitter.svg'
import PinteresIcon from '../../images/icon-pinterest.svg'
import Logo from '../../images/logo.svg'
import { ContainerFooter, LogoAndOptions, LogoSunnyside, Options, SocialMedia, IconSocialMedia } from "./styledcomponents"


const Footer = () => {
    return(
        <ContainerFooter>
            <LogoAndOptions>
                <LogoSunnyside src = {Logo} />

                <Options>
                    <p>About</p>
                    <p>Services</p>
                    <p>Projects</p>
                </Options>
            </LogoAndOptions>

            <SocialMedia>
                <IconSocialMedia src = {FacebookIcon} />
                <IconSocialMedia src = {InstagramIcon} />
                <IconSocialMedia src = {TwitterIcon} />
                <IconSocialMedia src = {PinteresIcon} />
            </SocialMedia>
        </ContainerFooter>
    )
}

export default Footer