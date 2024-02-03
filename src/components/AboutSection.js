import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import styled from "styled-components";
import htmlLogo from '../assets/icons8-html.svg'
import cssLogo from '../assets/icons8-css.svg'
import jsLogo from '../assets/icons8-javascript.svg'
import phpLogo from '../assets/icons8-php.svg'
import pythonLogo from '../assets/icons8-python.svg'
import cLogo from '../assets/c--4.svg'

const AboutSection = ({isViewed}) => {
    return ( 
        <Section id="about" >
            { 
            window.innerWidth > 1500
                ?<SectionContent>
                        <AboutMe>
                            <Fade direction="left" in={isViewed} mountOnEnter unmountOnExit timeout={2000}  >
                                <ContentTite>About Me</ContentTite>
                            </Fade>
                            <Fade direction="right" in={isViewed} mountOnEnter unmountOnExit timeout={2000}>
                                <ContentText>Back in 2020, when I first started studying in Computer Science, I wasn't too sure of want I wanted to do exactly in this field and where it would bring me in the future.
                                    A few months later, I was introduced into web development, and next thing I knew it became a passion for me. Fast-forward to today, it has now become a career and hobby of mine.
                                </ContentText>
                            </Fade>
                            <Fade direction="left" in={isViewed} mountOnEnter unmountOnExit timeout={2000}>
                                <ContentText>And when I am away from the computer, I like to spend my time either rock climbing, working out, playing games or just hanging out with my family/friends
                                </ContentText>
                            </Fade>
                        </AboutMe>
                        
                        <Skills>
                            <ContentTite>Skills</ContentTite>
                            <ListOfSkills>
                                <Slide direction="left" in={isViewed} timeout={1000} >
                                    <SkillImg src={htmlLogo}/>
                                </Slide>
                                <Slide direction="left" in={isViewed} timeout={1000} style={{ transitionDelay: `100ms` }}>
                                    <SkillImg src={cssLogo}/>
                                </Slide>
                                <Slide direction="left" in={isViewed} timeout={1000} style={{ transitionDelay: `200ms` }} >
                                    <SkillImg src={jsLogo}/>
                                </Slide>
                                <Slide direction="left" in={isViewed} timeout={1000} style={{ transitionDelay: `300ms` }}>
                                    <SkillImg src={phpLogo}/>
                                </Slide>
                                <Slide direction="left" in={isViewed} timeout={1000} style={{ transitionDelay: `400ms` }}>
                                    <SkillImg src={pythonLogo}/>
                                </Slide>
                                <Slide direction="left" in={isViewed} timeout={1000} style={{ transitionDelay: `500ms` }}>
                                    <SkillImg src={cLogo}/>
                                </Slide>
                            </ListOfSkills>
                        </Skills>
                    </SectionContent>
                :<SectionContent>
                    <AboutMe>
                        <ContentTite>About Me</ContentTite>
                            <ContentText>Back in 2020, when I first started studying in Computer Science, I wasn't too sure of want I wanted to do exactly in this field and where it would bring me in the future.
                                A few months later, I was introduced into web development, and next thing I knew it became a passion for me. Fast-forward to today, it has now become a career and hobby of mine.
                            </ContentText>                
                            <ContentText>And when I am away from the computer, I like to spend my time either rock climbing, working out, playing games or just hanging out with my family/friends
                            </ContentText>
                    </AboutMe>
                    <Skills>
                        <ContentTite>Skills</ContentTite>
                        <ListOfSkills>
                            <SkillImg src={htmlLogo}/>
                            <SkillImg src={cssLogo}/>
                            <SkillImg src={jsLogo}/>
                            <SkillImg src={phpLogo}/>
                            <SkillImg src={pythonLogo}/>
                            <SkillImg src={cLogo}/>
                        </ListOfSkills>
                    </Skills>
                </SectionContent>
            }
        </Section>
    )
}

const Section = styled.section`
    height:100vh;
    max-width:100;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
`
const SectionContent = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-direction: column;
    flex-wrap:wrap;
    width:60%; 

   
`

const AboutMe = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    
`

const Skills = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    margin-top:35px;
`

const ListOfSkills = styled.ul`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items:center;
    margin-top:15px;
`
const SkillImg = styled.img`
    width:6vw;

    @media (max-width:600px) { 
        min-width:30px;
        max-width:30px;
    }
`
const ContentText = styled.p`
    margin-top:10px;

    @media (max-width:1500px) { 
        font-size:25px;
    }

    @media (max-width:1200px) { 
        font-size:18px;
    }

    @media (max-width:600px) { 
        font-size:15px;
    }
`
const ContentTite = styled.h2`
    width:100%; 
    padding-bottom:10px;
    text-align:center;
    border-bottom:1px solid black;

    @media (max-width:1500px) {
        font-size:2.5em;
    }

    @media (max-width:1200px) { 
        font-size:25px;
    }
`

export default AboutSection;