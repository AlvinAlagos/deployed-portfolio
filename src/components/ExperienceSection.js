import styled from "styled-components"
import vanierLogo from "../assets/vanierLogo.png"
import concordiaLogo from "../assets/concordiaLogo.svg"
import MRLogo from "../assets/MRLogo.jpg"

const ExperienceSection = ({isViewed}) => {
    return (
        <Section id='experience'>
            <SectionContent>
                <EducationArea>
                    <ContentTite>Education</ContentTite>
                        <InfoCard>
                            <Info>
                                <h3>DEC in Computer Science</h3>
                                <h4>Vanier College</h4>
                                <p>2020 - 2023</p>
                            </Info>
                            <Img src={vanierLogo}/>
                        </InfoCard>
                        <InfoCard> 
                            <Info>
                                <h3>Diploma in Web Development</h3>
                                <h4>Concordia Bootcamps</h4>
                                <p>2023 - 2023</p>
                            </Info>
                            <Img src={concordiaLogo}/>
                        </InfoCard>
                </EducationArea>
                <WorkArea>
                    <ContentTite2>Work Experience</ContentTite2>
                    <InfoCard>
                            <Info>
                                <h3>MR Controls Systems Internation Inc.</h3>
                                <h4>Widget Developer Internship</h4>
                                <p>2023 Jan. - 2023 May</p>
                            </Info>
                            <Img src={MRLogo}/>
                        </InfoCard>
                </WorkArea>
            </SectionContent>
        </Section>
    )
}

const Section = styled.section`
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const SectionContent = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-direction: column;
    flex-wrap:wrap;
    width:60%;
    /* border:1px solid black; */
    
`

const EducationArea = styled.div`
    display:flex;
    flex-direction: column;
`
const InfoCard = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    border-radius:0px 50px 50px 0px;
    padding:10px;
    background-color:#e7e7e7;
    margin-top: 30px;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    width:100%;
    
    &:hover{
        transform: rotateX(360deg);
    }

    
`
const Info = styled.div`
    @media (max-width:1500px) { 
        font-size:2vw;
    }
`
const Logo = styled.div`
    
`
const Img = styled.img`
    display:block;
    width:15%;
    margin-right:10px;
    float:right;

    @media (max-width:1500px) { 
        width:25%;
    }
`
const ContentTite = styled.h2`
    width:100%;
    text-align:center;
    border-bottom:1px solid #56ffc5;
    color:#56ffc5;

    @media (max-width:1500px) { 
        font-size:4vw;
    }
`
const ContentTite2 = styled.h2`
    border-bottom:1px solid #56ffc5;
    text-align:center;
    margin-top: 30px;
    color:#56ffc5;

    @media (max-width:1500px) { 
        font-size:4vw;
    }
`

const WorkArea = styled.div`
`

export default ExperienceSection;