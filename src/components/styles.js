import styled from "styled-components";

export const Section = styled.section`
    min-height:950px;
    width:100%;
    display:flex;
    justify-content:center;
    background-color:white;
    @media (max-width:1000px) { 
        min-height:auto;
        padding-bottom:30px;
    }


`

export const SectionContainer = styled.div`
    min-height:70%;
    max-width:70%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 30px;
`

export const HeaderBox = styled.div`
    text-align:center;
    border-bottom: 1px solid black;
    min-width: 100%;
`
export const ProjectsBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction: row;
    gap:30px;
`

export const ProjectCard = styled.div`
    max-width:100%;
    max-height:400px;
    margin-top:10px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    background-color:whitesmoke;
    box-shadow: 2px 0px 16px 5px rgba(179,179,179,0.44);
    /* border:1px solid black; */
    border-radius:5px;
    transition: transform .2s;

    
    
`

export const ProjectDetails = styled.div`
    max-width:100%;
    display:flex;
    flex-direction: row;
    justify-content:center;
    @media (max-width:900px) { 
        flex-direction:column;
    }
`
export const ImgClick = styled.a`
    @media (max-width:900px) { 
        text-align:center;
    }
`
export const ProjectImg = styled.img`
    width:300px;

  
`

export const ProjectInfo = styled.div`
    
`

export const ProjectTitle = styled.h2`
    width:100%;
    text-align:center;

`
export const ProjectDesc = styled.p`
    font-size:14px;
    margin:10px;

    @media (max-width:600px) { 
        font-size:12px;
    }
`

export const ProjectLanguages = styled.ul`
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items:left;
    justify-content:center;
    gap:20px;
    height:auto;
    width:100%;
    align-items: center;
`

export const Languages = styled.li`
    padding:7px;
    font-size:.6em;
    border-radius:15px;
    color:#56ffc5;
    background-color:#2e2e2e;

    @media (max-width:600px){
        font-size:2vw;
    }
`