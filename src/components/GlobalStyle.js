import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior:smooth;
    }
       html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
        font-family: 'Roboto', sans-serif;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    button,  input[type="reset"] {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }

    a {
        color: #69ffcf;
        text-decoration: none;
    }
    
    body,html{
        background-color:#2e2e2e;
        overflow: hidden;
    }
    
    body{
        position:relative
    }
    body::-webkit-scrollbar {
    display: none;
    }

    .root{
        width:100vw;
    }

    @media (max-width:1500px) { 
        body,html{
            overflow:visible;
        }
    }
`

export default GlobalStyle;