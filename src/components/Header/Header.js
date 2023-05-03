import React from "react";
import { HiAcademicCap } from 'react-icons/hi';
import { FaSignInAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
    return (
        <Nav>
            <p>ESPAÇO DO PROFESSOR</p>
            <a href="">
                <FaSignInAlt size={28} />
            </a>
        </Nav>
    );
}
