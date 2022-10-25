// font-family: 'Oswald', 'Nunito', sans-serif;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //formas   
        --amethyst: #A06CD5;
        --plump-purple: #6247AA;
        --viridian-green: #119DA4;
        --african-violet: #B288C0;
        --green-blue: #2081C3;
        --fuzzy: #C1666B;
        // base
        --mint-cream: #F2F7F2;
        --lavender: #E2CFEA;
        --state-gray: #6B818C;
        // text
        --xiketic: #1E000E;
        --xiketic-shade: #140009;
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background-color: var(--lavender);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Nunito';
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    
    .modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--mint-cream);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter(0.2s);

        &:hover {
            filter: brightness(0.7);
        }
    }
`