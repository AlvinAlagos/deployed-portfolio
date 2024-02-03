import styled from "styled-components";
import me from "../assets/me.jpg"
import gmailIcon from "../assets/icons8-gmail.svg"
import githubIcon from "../assets/icons8-github-white.svg"
import linkedInIcon from "../assets/icons8-linkedin-white.svg"
import Slide from '@mui/material/Slide';
const HeroSection = () => {
    return (
        <Section id='hero'>
            <SectionContent>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1200}>
                    <ProfilePicture>
                        <Picture src={me}/>
                    </ProfilePicture>
                </Slide>
                <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={1200}>
                    <AboutInfo>
                        <Title><ColoredText>Full</ColoredText> Stack <ColoredText>Web</ColoredText> Developer</Title>
                        <AboutText>Hey I'm <ColoredText>Alvin Alagos</ColoredText> and Welcome to my portfolio!</AboutText>
                        {/* INSERT LINKS HERE */}
                        <ImgLinks>
                        <a href="#"><Icon src={gmailIcon}/></a>
                        <a href="https://github.com/AlvinAlagos"><Icon src={githubIcon}/></a>
                        <a href="https://www.linkedin.com/in/alvin-alagos-a34492210/"><Icon src={linkedInIcon}/></a>
                    </ImgLinks>
                    </AboutInfo>
                </Slide>
            </SectionContent>
        </Section>
    )
}

const Section = styled.section`
    min-height:100vh;
    max-height:100vh;
    max-width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

   
`
const SectionContent = styled.div`
    display:flex;
    justify-content:center;
    gap:50px;
    flex-direction: row;
    flex-wrap:wrap;
    width:100%;

    @media (max-width:1500px) { 
        display:flex;
        justify-content:center;
        gap:100px;
        flex-direction: row;
        font-size:4vw;
    }
`

const ColoredText = styled.span`
    color:#56ffc5;
`
const ProfilePicture = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const AboutInfo = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:50px;

    @media (max-width:600px) { 
        font-size:2vw;
        text-align:center;
    }
`
const Picture = styled.img`
    background-color:white;
    width:25vw;
    border-radius:50%;
    @media (max-width:1500px) { 
        width:400px;
    }

    @media (max-width:600px) { 
        width:200px;
    }
`
const Title = styled.h2`
    font-size:3vw;
    color:white;

    @media (max-width:1500px) { 
        font-size:5vw;
    }
`

const AboutText = styled.p`
    color:white;
    text-align:right;
    line-height: 1.5em;

    @media (max-width:1500px) { 
        font-size:2vw;
        text-align:center;
    }

    
    
`
const ImgLinks = styled.ul`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap:50px;
    margin-top: 30%;
`

const Icon = styled.img`
    width:60px;

    @media (max-width:600px) { 
        max-width:40px;
    }
`
export default HeroSection;