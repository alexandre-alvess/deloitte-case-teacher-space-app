import React from "react";
import { NavLink } from "react-router-dom";
import {
    FaAngleRight,
    FaAngleLeft,
    FaSignOutAlt,
    FaHome,
    FaRegEdit,
    FaClipboard,
    FaChalkboardTeacher,
    FaGraduationCap,
    FaLayerGroup,
    FaBars
} from 'react-icons/fa';

import "./Navbar.css";

export default function Navbar({ visible, show }) {

    const ICON_SIZE = 20;

    return(
        <>
            <div className="mobile-nav">
                <button
                    className="mobile-nav-btn"
                    onClick={() => show(!visible)}
                >
                    <FaBars size={24}/>
                </button>
            </div>
            <nav className={!visible ? 'navbar' : ''}>
                <button
                    type="button"    
                    className="nav-btn"
                    onClick={() => show(!visible)}
                >
                    { !visible ? <FaAngleRight size={30}/> :<FaAngleLeft size={30} /> }
                </button>
                <div>
                    <NavLink 
                        className='logo'
                        to='/'>
                        <img 
                            src=""
                            alt="logo"
                        />
                    </NavLink>
                    <div className="links nav-top">
                        <NavLink to='/' className='nav-link' >
                            <FaHome size={ICON_SIZE}/>
                            <span>Home</span>
                        </NavLink>
                        <NavLink to='/alunos' className='nav-link' >
                            <FaGraduationCap/>
                            <span>Alunos</span>
                        </NavLink>
                        <NavLink to='/boletins' className='nav-link' >
                            <FaRegEdit/>
                            <span>Boletins</span>
                        </NavLink>
                        <NavLink to='/disciplinas' className='nav-link' >
                            <FaClipboard/>
                            <span>Disciplinas</span>
                        </NavLink>
                        <NavLink to='/professores' className='nav-link' >
                            <FaChalkboardTeacher/>
                            <span>Professores</span>
                        </NavLink>
                        <NavLink to='/turmas' className='nav-link'>
                            <FaLayerGroup/>
                            <span>Turmas</span>
                        </NavLink>
                    </div>
                </div>
                <div className="links">
                    <NavLink to='/logout' className='nav-link'>
                        <FaSignOutAlt size={ICON_SIZE} />
                        <span>Sair</span>
                    </NavLink>
                </div>
            </nav>
        </>
    );
}