import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import  ItemList  from '../../components/ItemList';
import { TextSkills } from '../../components/TextSkills';
import { FooterContainer } from '../../components/Footer'

import { Title, ImageProfile, ContainerRepos, ContainerSkills, ContainerWrapper , TitleSecondary} from './styles'

import image from '../../assets/images/pedroLi.jpg';
import html from '../../assets/images/html_no_bg-removebg-preview.png';
import css from '../../assets/images/img-css-logo-removebg-preview2.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/react.png';
import php from '../../assets/images/php.png';
import symfony from '../../assets/images/Symphony-php.jpg';

import "./ManualParallax.css";



export  function Home() {

    let htmlMessage = "HTML 5 est une révision du langage de balisage hypertexte (HTML), le langage de programmation standard pour décrire le contenu et l'apparence des pages Web." ;

    let cssMessage = "Cascading Style Sheets Level 3 (CSS3) est l'itération de la norme CSS utilisée dans le style et le formatage des pages Web." ;
    
    let jsMessage = "JavaScript (souvent abrégé en JS) est un langage léger, interprété et orienté objet doté de fonctions de première classe. Il est surtout connu comme langage de script pour les pages Web, mais il est également utilisé dans de nombreux environnements autres que les navigateurs." ;
    
    let reactMessage = "React (également connu sous le nom de React.js ou ReactJS) est une bibliothèque JavaScript front-end permettant de créer des interfaces utilisateur basées sur des composants d'interface utilisateur." ;
    
    let phpMessage = "PHP est un langage de script utilisé le plus souvent côté serveur : dans cette architecture, le serveur interprète le code PHP des pages web demandées et génère du code" ;
    
    let symMessage = "Symfony vise à accélérer la création et la maintenance d'applications web et à remplacer les tâches de codage répétitives. Il vise également à créer des applications robustes dans un contexte d'entreprise et vise à donner aux développeurs un contrôle total sur la configuration : de la structure des répertoires aux bibliothèques étrangères, presque tout peut être personnalisé." ;

    const [repos, setRepos] = useState({});
    const [textSkill, setTextSkill] = useState('');
    const [changeColor, setChangeColor] = useState('primary');
    const [changeColorCss, setChangeColorCss] = useState('primary');
    const [changeColorJs, setChangeColorJs] = useState('primary');
    const [changeColorReact, setChangeColorReact] = useState('primary');
    const [changeColorPhp, setChangeColorPhp] = useState('primary');
    const [changeColorSym, setChangeColorSym] = useState('primary');


    const handleGetData = async () => {
        const reposData = await fetch(`https://api.github.com/users/ProjectXTN/repos`);
        const newRepos = await reposData.json();

        if (newRepos.length){
            setRepos(newRepos);
        }
    };

    const handleTextSkills = (event) => {
        const id = event.target.id;

        // eslint-disable-next-line default-case
        switch (id){
            case 'htmlImage':
                setTextSkill(htmlMessage);
                setChangeColor(event.target);
                break;
            case 'cssImage':
                setTextSkill(cssMessage);
                setChangeColorCss('secondary');
                break;
            case 'jsImage':
                setTextSkill(jsMessage);
                setChangeColorJs('secondary');
                break;
            case 'reactImage':
                setTextSkill(reactMessage);
                setChangeColorReact('secondary');
                break;
            case 'phpImage':
                setTextSkill(phpMessage);
                setChangeColorPhp('secondary');
                break;
            case 'symfonyImage':
                setTextSkill(symMessage);
                setChangeColorSym('secondary');
                break;
        }
    };

  return (
    <>
    <Header />
        <div>
            <div className='bgimg-1'>
                    <Title>
                        Pedro MEIRELES
                    </Title>
                    <TitleSecondary>
                        Développeur Web Full Stack
                    </TitleSecondary>
            </div>
            <div className='container' id="me">
                <div className='row section'>
                    <div className='text-center'>
                    <ImageProfile src={image} />
                    </div>
                    <div>
                        <h3 className='text-center'> À propos de moi</h3>
                        <p>Développeur full stack certifié a LaPasserelle. j’ai appris à
                        coder dans divers langages informatiques (Javascript,
                        ReactJS, TypeScript, PHP, Symfony, MySQL) et j'ai créé
                        des projets personnels, Un site qui met en relation des
                        expatriés avec des locaux pour l'échange des
                        connaissances et de la culture de ce nouveau pays.
                        Polyvalent, je maîtrise les différentes étapes techniques
                        de la création d’un site ou d’une application web, de la
                        compréhension des besoins utilisateurs, au
                        développement frontend et backend en passant par la
                        maintenance.
                        .</p>
                </div>
                </div>
            </div>

            <div className='bgimg-2' id='projets'>
                <div className='caption'>
                    <span className='titleBorder'>
                        Projets
                    </span>
                    <br />
                    <Button title='Trouver les projets' onClick={handleGetData}/>
                </div>
            </div>
                {repos?.length ? (
                 <ContainerRepos>
                    <>
                        <div>
                        {repos.map(repo => (
                            <ItemList title={repo.name}  link={repo.html_url
                            }/>
                        ))}
                        </div>
                    </>
                </ContainerRepos>
                ) :
                <div className='section-2'>
                <>
                    <h3 className='titleBorder'> Hello World</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </>
                </div>}
            
            <div id='skills'>
            <div className='bgimg-3'>
                <div className='caption'>
                        <span className='titleBorder'>
                        Technologies et Compétences
                        </span>
                    </div>
            </div>
            <ContainerWrapper>
                <ContainerSkills>
                    <TextSkills variant={changeColor} id={'htmlImage'} onClick={handleTextSkills}  src={html} />
                    <TextSkills variant={changeColorCss} id={'cssImage'} onClick={handleTextSkills}  src={css} />
                    <TextSkills variant={changeColorJs} id={'jsImage'} onClick={handleTextSkills}  src={js} />
                    <TextSkills variant={changeColorReact} id={'reactImage'} onClick={handleTextSkills}  src={react} />
                    <TextSkills variant={changeColorPhp} id={'phpImage'} onClick={handleTextSkills}  src={php} />
                    <TextSkills variant={changeColorSym} id={'symfonyImage'} onClick={handleTextSkills}  src={symfony} />
                </ContainerSkills>
                <ContainerSkills>
                    <p>{textSkill}</p>
                </ContainerSkills>
            </ContainerWrapper>
        </div>
        </div>

        <FooterContainer  title="Réalisé par Pedro MEIRELES &copy; 2022"/>
    </>
  );
}
