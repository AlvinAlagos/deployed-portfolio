import { useRef,useState } from "react";
import emailjs from '@emailjs/browser'
import styled from "styled-components";
import gmailIcon from "../assets/icons8-gmail.svg"
import githubIcon from "../assets/icons8-github-white.svg"
import linkedInIcon from "../assets/icons8-linkedin-white.svg"
import TextField from '@mui/material/TextField';

const ContactSection = () => {
    const formRef = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_65h16cp', 'template_x479gpz', formRef.current, 'rV5nUlgCbWPhwW7NF')
        .then((result) => {
            alert(result.text);
        }, (error) => {
            alert(error.text);
        });
    }
    
    return(
        <Section id="contact">
            <SectionContent>
                <ContentTite>Contact.</ContentTite>
                <ContactForm ref={formRef} onSubmit={(event) => sendEmail(event)} >
                    <InputField type="text" placeholder="Name" name="from_name" onChange={(event) => setName(event.target.value)}/>
                    <InputField type="email" placeholder="Email" name="from_email" onChange={(event) => setEmail(event.target.value)}/>
                    <MessageArea placeholder="Your message" name="message" onChange={(event) => setMessage(event.target.value)}/>
                    <SubmitButton type="submit" value='Send message'/>
                </ContactForm>
                <ImgLinks>
                    <a href="#"><Icon src={gmailIcon}/></a>
                    <a href="https://github.com/AlvinAlagos"><Icon src={githubIcon}/></a>
                    <a href="https://www.linkedin.com/in/alvin-alagos-a34492210/"><Icon src={linkedInIcon}/></a>
                </ImgLinks>
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
    background-color:#2e2e2e;
`
const SectionContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    flex-wrap:wrap;
    width:60%;
`

const ContentTite = styled.h2`
    width:60%;
    text-align:center;
    border-bottom:1px solid #56ffc5;
    color:#56ffc5;
    font-size:2vw;

    @media (max-width:1500px) { 
        font-size:4vw;
    }
`

const ImgLinks = styled.ul`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap:50px;
    margin-top:50px;
`

const Icon = styled.img`
    width:60px;
`
const ContactForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:40%;
    font-size:5vw;
    gap:20px;
    margin-top:30px;

    @media (max-width:1500px) { 
        width:80%;
        font-size:3vw;
    }
`

const InputField = styled.input`
    width:100%;
    height:50px;
    outline: none;
    border-bottom:1px solid black;
    background: white;
    color:pink;
    padding:0px 15px 0px 15px;
    
`
const MessageArea = styled.textarea`
    color:black;    
    width:100%;
    height:200px;
    border-radius: 15px;
    padding:15px 15px 0px 15px;
`

const SubmitButton = styled.input`
    width:50%;
    height:5vh;
    border-radius: 10px;
    transition: .2s;
    &:hover{
        color:#56ffc5;
        background-color:#2e2e2e;
        transform:scale(1.1)
    }

    @media (max-width:1500px){
        font-size:2vw;
    }
    
`
export default ContactSection;