import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${primaryDarkColor};
        color: ${primaryColor};
    }

    html, body, #root {
        height: 100%
    }

    button {
        cursor: pointer;
        background: ${primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
    }

    a {
        color: ${primaryColor};
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;