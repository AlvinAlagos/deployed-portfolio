import ctl from "../assets/CTL.png"
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
                            <ProjectCard id="card">
                                <a href='#' style={{textAlign:'center'}}><ProjectImg src={ctl}/></a>
                                <ProjectInfo>
                                    <ProjectTitle>CTL Inc.</ProjectTitle>
                                    <ProjectDesc>
                                        CTL is a platform based on a small independent renovation company that is currently facing issues in managing its resources. 
                                        This web application allows the company to manage all those resources on one platform saving them the hassle of managing all of them themselves.
                                    </ProjectDesc>
                                    {/* <ProjectLinks><a href="https://github.com/AlvinAlagos/project-js-nyan-cat"><Icon src={githubIcon}/></a></ProjectLinks> */}
                                    <ProjectLanguages>
                                        <Languages><p>HTML5</p></Languages>
                                        <Languages><p>CSS3</p></Languages>
                                        <Languages><p>JavaScript</p></Languages>
                                        <Languages><p>Mongo</p></Languages>
                                        <Languages><p>React</p></Languages>
                                        <Languages><p>Express</p></Languages>
                                        <Languages><p>Node.js</p></Languages>
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
                                    {/* <ProjectLinks><a href="https://github.com/AlvinAlagos/Portfolio"><Icon src={githubIcon}/></a></ProjectLinks> */}
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
                                    {/* <ProjectLinks><a href="https://github.com/AlvinAlagos/Portfolio"><Icon src={githubIcon}/></a></ProjectLinks> */}
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
                  
                        <ProjectCard id="card">
                            <a href='#' style={{textAlign:'center'}}><ProjectImg src={ctl}/></a>
                            <ProjectInfo>
                                <ProjectTitle>CTL Inc.</ProjectTitle>
                                <ProjectDesc>
                                    CTL is a platform based on a small independent renovation company that is currently facing issues in managing its resources. 
                                    This web application allows the company to manage all those resources on one platform saving them the hassle of managing all of them themselves.
                                </ProjectDesc>
                                {/* <ProjectLinks><a href="https://github.com/AlvinAlagos/project-js-nyan-cat"><Icon src={githubIcon}/></a></ProjectLinks> */}
                                <ProjectLanguages>
                                    <Languages><p>HTML5</p></Languages>
                                    <Languages><p>CSS3</p></Languages>
                                    <Languages><p>JavaScript</p></Languages>
                                    <Languages><p>Mongo</p></Languages>
                                    <Languages><p>React</p></Languages>
                                    <Languages><p>Express</p></Languages>
                                    <Languages><p>Node.js</p></Languages>
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
                                {/* <ProjectLinks><a href="https://github.com/AlvinAlagos/Portfolio"><Icon src={githubIcon}/></a></ProjectLinks> */}
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
                                {/* <ProjectLinks><a href="https://github.com/AlvinAlagos/Portfolio"><Icon src={githubIcon}/></a></ProjectLinks> */}
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
    min-height:1200px;
    max-height:100px;
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

    @media (max-width:1200px) { 
        font-size:40px;
    }
`

const ProjectListing = styled.div`
    max-height:100%;
    display:flex;
    justify-content:space-evenly;
    flex-direction: column;
    gap:40px;
    flex-wrap: wrap;

    @media (max-width:1500px) { 
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        flex-wrap: wrap;
    }


`
const ProjectImg = styled.img`
    max-width:100%;
    max-height:300px;
    border-radius: 5px;

  
    /* border-radius:100px 100px 0px 0px; */
`
const ProjectCard = styled.div`
    max-width:50%;
    max-height:400px;
    margin-top:10px;
    display:flex;
    flex-direction: row;
    justify-content:center;
    background-color:whitesmoke;
    box-shadow: 2px 0px 16px 5px rgba(179,179,179,0.44);
    /* border:1px solid black; */
    border-radius:5px;
    transition: transform .2s;
    
    @media (max-width:1500px) { 
        width:50%;
    }

    @media (max-width:1200px) { 
        min-width:100%;
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
        font-size:25;
    }

    

`

const ProjectDesc = styled.p`
    margin:20px;
    height:auto;
    font-size: .9em;
    @media (max-width:1500px) { 
        font-size:15px;
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
    /* max-width:50px; */
    font-size:.6em;
    border-radius:15px;
    color:#56ffc5;
    background-color:#2e2e2e;

    @media (max-width:600px){
        font-size:2vw;
    }
`


export default ProjectsSection;