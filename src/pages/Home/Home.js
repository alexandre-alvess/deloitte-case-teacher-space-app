import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegEdit } from 'react-icons/fa';

import UIContainer from "../../components/UI/Container/Container";
import Title from "../../components/Title/Title";

import './Home.css';

export default function Home() {

    const userName = useSelector(state => state.auth.usuario.nome);

    return (
        <div>
            <Title name={`Olá ${userName.toUpperCase()}, seja bem vindo ao Espaço do Professor`}>
            </Title>
            <div>
                <Link to='/boletim/cadastro' className="link-boletim">
                    <FaRegEdit size={30}/>
                    <span>Lançar Boletim</span>
                </Link>
            </div>
            <UIContainer>
                <div className="content">
                    <hr></hr>
                    <div className="content-info">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Vitae ea sequi animi ex repudiandae nisi voluptate fuga
                            nobis necessitatibus officia, sunt magnam molestias quis
                            cumque praesentium blanditiis quo aut error.
                        </p>
                    </div>
                </div>
            </UIContainer>
        </div>
    )
}