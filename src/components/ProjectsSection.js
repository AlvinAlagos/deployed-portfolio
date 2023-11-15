import nyan from "../assets/nyanCat.png"
import shufflewear from "../assets/Shufflewear.png"
import quedescils from "../assets/QueDesCils.png"
import githubIcon from "../assets/icons8-github.svg"
import styled from "styled-components";
import Grow from '@mui/material/Grow';
import { Slide } from "@mui/material";


const ProjectsSection = ({isViewed}) => {
    return (
        <Section id='projects'>
            {
                window.innerWidth > 1500
                ?<SectionContent>
                    <ContentTite>Projects</ContentTite>
                    <ProjectListing>
                        <Grow in={isViewed} timeout={2000}>
                            <ProjectCard>
                                <a href='https://project-js-nyan-cat-psi.vercel.app/'><ProjectImg src={nyan}/></a>
                                <ProjectInfo>
                                    <ProjectTitle>Project: Nyan Cat</ProjectTitle>
                                    <ProjectDesc>Project: Nyan Cat is a fun a little game I made where you play as a hamburger who is dodging and weaving hungry nyan cat's.</ProjectDesc>
                                    <ProjectLinks><a href="https://github.com/AlvinAlagos/project-js-nyan-cat"><Icon src={githubIcon}/></a></ProjectLinks>
                                    <ProjectLanguages>
                                        <Languages><p>HTML5</p></Languages>
                                        <Languages><p>CSS3</p></Languages>
                                        <Languages><p>JavaScript</p></Languages>
                                    </ProjectLanguages>
                                </ProjectInfo>
                            </ProjectCard>
                        </Grow>
                        <Grow in={isViewed} timeout={2000} style={{ transitionDelay: `200ms` }}>
                            <ProjectCard>
                                <a href="https://github.com/AlvinAlagos/Portfolio"><ProjectImg src={shufflewear}/></a>
                                <ProjectInfo>
                                    <ProjectTitle>Shufflewear</ProjectTitle>
                                    <ProjectDesc>Shufflewear is an E-commerce web application where users can buy and sell used/new clothing apparel. Each user can also register as a seller to post their items for sale. The web app could also be used to
                                        auction off rare pieces of clothing.
                                    </ProjectDesc>
                                    <ProjectLinks><a href="https://github.com/AlvinAlagos/Portfolio"><Icon src={githubIcon}/></a></ProjectLinks>
                                    <ProjectLanguages>
                                        <Languages><p>HTML5</p></Languages>
                                        <Languages><p>CSS3</p></Languages>
                                        <Languages><p>Bootstrap</p></Languages>
                                        <Languages><p>PHP</p></Languages>
                                        <Languages><p>MySQL</p></Languages>
                                    </ProjectLanguages>
                                </ProjectInfo>
                            </ProjectCard>
                        </Grow>
                        <Grow in={isViewed} timeout={2000} style={{ transitionDelay: `300ms` }} >
                            <ProjectCard>
                                <a href="https://github.com/AlvinAlagos/Portfolio"><ProjectImg src={quedescils}/></a>
                                <ProjectInfo>
                                    <ProjectTitle>QueDesCils</ProjectTitle>
                                    <ProjectDesc>QueDesCils was a web application specifically made for a small lash business with the purpose of managing their bookings. This web application allowed their customers
                                        to book the chosen service online and choose to pay on site or online, which would relatively save the business alot of time from managing everything themselves. This was a school project which
                                        was done in a team of 5 where I was in charge of the front-end.
                                    </ProjectDesc>
                                    <ProjectLinks><a href="https://github.com/AlvinAlagos/Portfolio"><Icon src={githubIcon}/></a></ProjectLinks>
                                    <ProjectLanguages>
                                        <Languages><p>HTML5</p></Languages>
                                        <Languages><p>CSS3</p></Languages>
                                        <Languages><p>Bootstrap</p></Languages>
                                        <Languages><p>PHP</p></Languages>
                                        <Languages><p>MySQL</p></Languages>
                                    </ProjectLanguages>
                                </ProjectInfo>
                            </ProjectCard>            
                        </Grow>
                    </ProjectListing>
                </SectionContent>

                :<SectionContent>
                <ContentTite>Projects</ContentTite>
                <ProjectListing>                    
                        <ProjectCard>
                            <a href='https://project-js-nyan-cat-psi.vercel.app/'><ProjectImg src={nyan}/></a>
                            <ProjectInfo>
                                <ProjectTitle>Project: Nyan Cat</ProjectTitle>
                                <ProjectDesc>Project: Nyan Cat is a fun a little game I made where you play as a hamburger who is dodging and weaving hungry nyan cat's.</ProjectDesc>
                                <ProjectLinks><a href="https://github.com/AlvinAlagos/project-js-nyan-cat"><Icon src={githubIcon}/></a></ProjectLinks>
                                <ProjectLanguages>
                                    <Languages><p>HTML5</p></Languages>
                                    <Languages><p>CSS3</p></Languages>
                                    <Languages><p>JavaScript</p></Languages>
                                </ProjectLanguages>
                            </ProjectInfo>
                        </ProjectCard>
                        <ProjectCard>
                            <a href="https://github.com/AlvinAlagos/Portfolio"><ProjectImg src={shufflewear}/></a>
                            <ProjectInfo>
                                <ProjectTitle>Shufflewear</ProjectTitle>
                                <ProjectDesc>Shufflewear is an E-commerce web application where users can buy and sell used/new clothing apparel. Each user can also register as a seller to post their items for sale. The web app could also be used to
                                    auction off rare pieces of clothing.
                                </ProjectDesc>
                                <ProjectLinks><a href="https://github.com/AlvinAlagos/Portfolio"><Icon src={githubIcon}/></a></ProjectLinks>
                                <ProjectLanguages>
                                    <Languages><p>HTML5</p></Languages>
                                    <Languages><p>CSS3</p></Languages>
                                    <Languages><p>Bootstrap</p></Languages>
                                    <Languages><p>PHP</p></Languages>
                                    <Languages><p>MySQL</p></Languages>
                                </ProjectLanguages>
                            </ProjectInfo>
                        </ProjectCard>
                        <ProjectCard>
                            <a href="https://github.com/AlvinAlagos/Portfolio"><ProjectImg src={quedescils}/></a>
                            <ProjectInfo>
                                <ProjectTitle>QueDesCils</ProjectTitle>
                                <ProjectDesc>QueDesCils was a web application specifically made for a small lash business with the purpose of managing their bookings. This web application allowed their customers
                                    to book the chosen service online and choose to pay on site or online, which would relatively save the business alot of time from managing everything themselves. This was a school project which
                                    was done in a team of 5 where I was in charge of the front-end.
                                </ProjectDesc>
                                <ProjectLinks><a href="https://github.com/AlvinAlagos/Portfolio"><Icon src={githubIcon}/></a></ProjectLinks>
                                <ProjectLanguages>
                                    <Languages><p>HTML5</p></Languages>
                                    <Languages><p>CSS3</p></Languages>
                                    <Languages><p>Bootstrap</p></Languages>
                                    <Languages><p>PHP</p></Languages>
                                    <Languages><p>MySQL</p></Languages>
                                </ProjectLanguages>
                            </ProjectInfo>
                        </ProjectCard>            
                </ProjectListing>
            </SectionContent>
            }
        </Section>
    )
}

const Section = styled.section`
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
    background-color:white;
    @media (max-width:1500px) { 
        height:auto;
        padding-bottom:50px;
    }
`
const SectionContent = styled.div`
    display:flex;
    flex-direction: column;
    width:80%;
    margin-top:100px;
 
`

const ContentTite = styled.h2`
    width:100%;
    text-align:center;
    border-bottom:1px solid black;

    @media (max-width:1500px) { 
        font-size:4vw;
    }
`

const ProjectListing = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-direction: row;
    gap:50px;
    margin-top:30px;

    @media (max-width:1500px) { 
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        flex-wrap: wrap;
    }

`
const ProjectImg = styled.img`
    width:100%;
    height:300px;
    border-radius:100px 100px 0px 0px;
`
const ProjectCard = styled.div`
    width:25vw;
    height:auto;
    margin-top:10px;
    display:flex;
    flex-direction: column;
    border:1px solid black;
    border-radius:100px 100px 15px 15px;
    transition: transform .2s;
    
    @media (max-width:1500px) { 
        width:55vw;
    }

    @media (max-width:600px) { 
        width:80vw;
    }
`

const ProjectInfo = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
`

const ProjectTitle = styled.h2`
    text-align:center;

    @media (max-width:1500px) { 
        font-size:3vw;
    }
`

const ProjectDesc = styled.p`
    margin:20px;
    height:15vh;

    @media (max-width:1500px) { 
        font-size:2vw;
    }
`

const ProjectLinks = styled.ul`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const Icon = styled.img`
    @media (max-width:1500px) { 
        width:6vw;
    }
`

const ProjectLanguages = styled.ul`
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items:left;
    gap:20px;
    margin:5px;
    height:auto;
    width:100%;
    align-items: center;
    margin-bottom:40px;
`

const Languages = styled.li`
    padding:10px;
    border-radius:10px;
    color:#56ffc5;
    background-color:#2e2e2e;

    @media (max-width:600px){
        font-size:2vw;
    }
`


export default ProjectsSection;