import React from "react";

import { FaRegIdBadge } from 'react-icons/fa';
import CardBase from "../../Cards/CardBase";

import './DisciplinaCard.css';

export default function DisciplinaCard({ disciplina }) {

    const ICON_SIZE = 65;

    return (
        <CardBase className='disciplina-card-header' icon={<FaRegIdBadge size={ICON_SIZE} />} name={disciplina.nome.toUpperCase()} >
            <div className="disciplina-card-info">
                <span>Carga Horária: { disciplina.carga_horaria }</span>
            </div>
        </CardBase>
    )
}