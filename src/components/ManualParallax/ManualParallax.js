import React from 'react';

import { Header } from '../Header';
import { Title } from './styles'

import "./ManualParallax.css";



export  function ManualParallax() {
  return (
    <>
    <Header />
        <div>
            <div className='bgimg-1'>
                    <Title className='titleBorder'>
                    Pedro MEIRELES
                    </Title>
            </div>
            <div className='section'>
                    <h3 className='titleBorder'> About me</h3>
                    <p>Développeur full stack certifié a LaPasserelle, fin de formation septembre 2022. jʼai appris à coder dès mon plus jeune âge dans divers langages informatiques (Javascript, PHP, Symfony, MySQL) et j'ai créé des projets personnels, Un site qui met en relation des expatriés avec des locaux pour l'échange des connaissances et de la culture de ce nouveau pays. Polyvalent, je maîtrise les différentes étapes techniques de la création dʼun site ou dʼune application web, de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance.</p>
            </div>

            <div className='bgimg-2'>
                <div className='caption'>
                    <span className='titleBorder'>
                        Dévellopeur WEB FullStack
                    </span>
                </div>
            </div>
            <div className='section'>
                    <h3 className='titleBorder'> Hello World</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>

            <div className='bgimg-3'>
                <div className='caption'>
                    <span className='titleBorder'>
                        Dévellopeur WEB FullStack
                    </span>
                </div>
            </div>
        </div>
    </>
  );
}
