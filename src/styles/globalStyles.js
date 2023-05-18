import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        line-height: 150%; 
        text-decoration: none;
        font-family: 'Inter', sans-serif; 
    }

    body, html {
        position: relative;
        height: 100vh;
        width: 100vw;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: none;
        border-radius: var(--radius-default);
    }

    input {
        border: none;
        border-radius: var(--radius-default);
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93d7af;
        --color-secondary: #eb5757;
        --color-grey-100: #333333;
        --color-grey-50: #828282;
        --color-grey-20: #e0e0e0;
        --color-grey-0: #f5f5f5;
        --negative: #e60000;
        --warning: #ffcd07;
        --sucess: #168821;
        --information: #155bcb;
        --heading-1: 1.8rem;
        --heading-2: 1.5rem;
        --heading-3: 1.2rem;
        --heading-4: 0.8rem;
        --headline: 1rem;
        --body: 0.8rem;
        --body-600: 600;
        --caption: 0.6rem;
        --radius-default: 8px;
    }
`;

export default GlobalStyle;
