import styled from "styled-components";
const Header = ({setViewedAbout,setViewedExperience,setViewedProjects}) => {
    const handleClick = (id) => {
        const targetElement = document.getElementById(id);
        targetElement.scrollIntoView();
    }
    return(
        <NavBar>
            <Logo onClick={() => {handleClick('hero')}}>Alvin Alagos</Logo>
            <NavItems>
                <NavItem id='aboutNav' onClick={() => {handleClick('about'); setViewedAbout(true);}}>About</NavItem>
                <NavItem onClick={() => {handleClick('experience'); setViewedExperience(true);}}>Experience</NavItem>
                <NavItem onClick={() => {handleClick('projects'); setViewedProjects(true);}}>Projects</NavItem>
                <NavItem onClick={() => {handleClick('contact');}}>Contact</NavItem>
            </NavItems>
        </NavBar>
    )
}

const NavBar = styled.nav`
    position:fixed;    
    display: flex;
    justify-content: space-between;
    align-items: center; 
    z-index:100;
    width:100%;
    color:white;
    background-color:#2e2e2e;
    padding-bottom:30px;

    //displaying no navbar for mobile for now. Hamburger nav to be implemented
    @media (max-width:1500px){
        display:none;
    }
`
const Logo = styled.h1`
    margin:30px 0px 0px 30px;
    cursor:pointer;
    
    @media (max-width:1500px){
        text-align: center;
        margin:0;
        font-size: 4vw;
    }
`
const NavItems = styled.ul`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    
    @media (max-width:1500px){
        display:none;
    }
`
const NavItem = styled.button`
    margin:30px 30px 0px 0px;
`

export default Header;