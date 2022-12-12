import React from 'react';
import logo from '../../assets/images/logo_rabbit_white.png'


import { Container, Row, Wrapper, Img, A } from './styles'

const Header = ({variant="primary"}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <a href='#'><Img src={logo} alt="Image Logo" /></a>
            </Row>
            <Row>
                <A variant={variant} href="#">Home</A>
                <A variant={variant} href="#me">À propos de moi</A>
                <A variant={variant} href="#projets">Projets</A>
                <A variant={variant} href="#skills">Compétences</A>
                <A variant="secondary" href="https://github.com/ProjectXTN" target="_blank">Github</A>
                <A variant="secondary" href="https://www.linkedin.com/in/pedro-henrique-braz-meireles-68609b204/" target="_blank">Linkedin</A>
            </Row>
        </Container>
    </Wrapper>
  )
}


export  { Header } ;