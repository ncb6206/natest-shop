import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Nanum Gothic', 'Noto Sans KR', sans-serif;
        background-color: #F4F3EA;
        margin-bottom: 100px;
        line-height: 1.5;
        font-weight: 400;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    html,body{
        height: 100%;
    }
`;

export default GlobalStyle;
