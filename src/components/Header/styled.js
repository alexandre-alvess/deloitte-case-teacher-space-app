import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Nav = styled.nav`
    background: ${primaryColor};
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: left;

    p {
        margin: 0 auto 0 5px ;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    }

    a {
        color: #fff;
    }
`;