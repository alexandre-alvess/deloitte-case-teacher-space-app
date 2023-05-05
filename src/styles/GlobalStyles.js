import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${colors.primaryDarkColor};
        color: ${colors.primaryColor};
        overflow: hidden
    }

    html, body, #root {
        height: 100%
    }

    button {
        cursor: pointer;
        background: ${colors.primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
    }

    a {
        color: ${colors.primaryColor};
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    .main {
        display: flex;
	    flex-direction: column;
	    width: 100%;
    }

    .page {
        flex-basis: 100%;
        margin: 0 1em 0 4em;
        transition: margin-left 1s;
    }

    .page-with-navbar {
        margin-left: 16em;
    }

    @media only screen and (max-width: 770px) {
        .page-with-navbar{
            width: 100%;
            margin-left: 22em;
            padding-right: 23em;
        }
    }

    @media only screen and (max-width: 450px){
        .page {
            flex-basis: 100%;
            margin: 0 10px;
            transition: margin-left 1s;
        }

        .page-with-navbar {
            margin: 0 10px;
            padding: 0;
        }
    }
`;