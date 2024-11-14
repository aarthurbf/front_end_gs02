import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        scroll-behavior: smooth;
        list-style: none;
        text-decoration: none;
    }

    body{
    background-color: var(--color6);
    }

    :root{
        --color1: #012E40;
        --color2: #024959;
        --color3: #026773;
        --color4: #3CA6A6;
        --color5: #589A8D;
        --color6: #EBEBF2;
        --color7: #fff;
        --transition: 0.5s;
    }
`

export default GlobalStyle