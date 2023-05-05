import React from "react";
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

import CardBase from "../../Cards/CardBase";

import './PessoaCard.css'

import  * as helpers from '../../../utils/helpers';

export default function Card({ pessoa, type }) {
    
    const ICON_SIZE = 80;
    const TIPO_PESSOA_ESTUDANTE = 'ESTUDANTE';

    const icon = type == TIPO_PESSOA_ESTUDANTE
                    ? <FaGraduationCap size={ICON_SIZE} />
                    : <FaChalkboardTeacher size={ICON_SIZE} />;
    return (
        <CardBase icon={icon} name={ pessoa.nome.toUpperCase() } >
            <div className="pessoa-card-info">
                <span>Data de Nascimento: { helpers.dateFormat(pessoa.data_nascimento).date }</span>
                <span>Matrícula: { Math.random() * 10000 }</span>
                <span>E-mail: { pessoa.email }</span>
            </div>
        </CardBase>
    )
}