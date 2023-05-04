import React from "react";
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

import CardBase from "../CardBase";

import './PessoaCard.css'

export default function Card({ pessoa, type }) {
    
    const ICON_SIZE = 80;
    const TIPO_PESSOA_ESTUDANTE = 'ESTUDANTE';

    const icon = type == TIPO_PESSOA_ESTUDANTE
                    ? <FaGraduationCap size={ICON_SIZE} />
                    : <FaChalkboardTeacher size={ICON_SIZE} />;

    return (
        // <div className="pessoa-card">
        //     <div className="pessoa-card-header">
        //         { type == TIPO_PESSOA_ESTUDANTE
        //             ? <FaGraduationCap size={ICON_SIZE} />
        //             : <FaChalkboardTeacher size={ICON_SIZE} />
        //         }
        //         <span className="pessoa-card-name">NOME</span>
        //     </div>
        //     <div className="pessoa-card-info">
        //         <span>Data de Nascimento: </span>
        //         <span>Matrícula: </span>
        //         <span>E-mail: </span>
        //     </div>
        // </div>

        <CardBase icon={icon} name={'NOME'} >
            <div className="pessoa-card-info">
                <span>Data de Nascimento: </span>
                <span>Matrícula: </span>
                <span>E-mail: </span>
            </div>
        </CardBase>
    )
}