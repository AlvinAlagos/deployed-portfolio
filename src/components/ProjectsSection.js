import ctl from "../assets/CTL.png"
import shufflewear from "../assets/Shufflewear.png"
import quedescils from "../assets/QueDesCils.png"
import githubIcon from "../assets/icons8-github.svg"
import styled from "styled-components";
import Grow from '@mui/material/Grow';
import { Slide } from "@mui/material";
import { Section,SectionContainer,HeaderBox,ProjectsBox,ProjectCard, ProjectImg, ProjectInfo, ProjectDesc, ProjectTitle, ProjectLanguages, Languages, ProjectDetails, ImgClick } from "./styles";

const ProjectsSection = ({isViewed}) => {
    return (
        <Section id='projects'>
            <SectionContainer>
                <HeaderBox>
                    <h1>Projects</h1>
                </HeaderBox>
                <ProjectsBox>
                    <ProjectCard>
                        <ProjectDetails>
                            <ImgClick href='https://ctl.vercel.app/login'><ProjectImg src={ctl}/></ImgClick>
                            <ProjectInfo>
                                <ProjectTitle >CTL</ProjectTitle>
                                <ProjectDesc>CTL is a platform based on a small independent renovation company that is currently facing issues in managing its resources. 
                                This web application allows the company to manage all those resources on one platform saving them the hassle of managing all of them themselves.
                                </ProjectDesc>
                                <ProjectLanguages>
                                    <Languages><p>HTML5</p></Languages>
                                    <Languages><p>CSS3</p></Languages>
                                    <Languages><p>Bootstrap</p></Languages>
                                    <Languages><p>PHP</p></Languages>
                                    <Languages><p>MySQL</p></Languages>
                            </ProjectLanguages>
                            </ProjectInfo>
                            
                        </ProjectDetails>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectDetails>
                            <ImgClick href="https://github.com/AlvinAlagos/Portfolio"><ProjectImg src={shufflewear}/></ImgClick>
                            <ProjectInfo>
                                <ProjectTitle>Shufflewear</ProjectTitle>
                                <ProjectDesc>Shufflewear is an E-commerce web application where users can buy and sell used/new clothing apparel. Each user can also register as a seller to post their items for sale. The web app could also be used to
                                    auction off rare pieces of clothing.
                                </ProjectDesc>
                                <ProjectLanguages>
                                    <Languages><p>HTML5</p></Languages>
                                    <Languages><p>CSS3</p></Languages>
                                    <Languages><p>Bootstrap</p></Languages>
                                    <Languages><p>PHP</p></Languages>
                                    <Languages><p>MySQL</p></Languages>
                                </ProjectLanguages>
                            </ProjectInfo>
                            
                        </ProjectDetails>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectDetails>
                            <ImgClick href="https://github.com/AlvinAlagos/Portfolio"><ProjectImg src={quedescils}/></ImgClick>
                            <ProjectInfo>
                                <ProjectTitle>QueDesCils</ProjectTitle>
                                <ProjectDesc>QueDesCils was a web application specifically made for a small lash business with the purpose of managing their bookings. This web application allowed their customers
                                    to book the chosen service online and choose to pay on site or online, which would relatively save the business alot of time from managing everything themselves. This was a school project which
                                    was done in a team of 5 where I was in charge of the front-end.
                                </ProjectDesc>
                                <ProjectLanguages>
                                    <Languages><p>HTML5</p></Languages>
                                    <Languages><p>CSS3</p></Languages>
                                    <Languages><p>Bootstrap</p></Languages>
                                    <Languages><p>PHP</p></Languages>
                                    <Languages><p>MySQL</p></Languages>
                                </ProjectLanguages>
                            </ProjectInfo>
                            
                        </ProjectDetails>
                    </ProjectCard>
                </ProjectsBox>
            </SectionContainer>
        </Section>
    )
}





export default ProjectsSection;