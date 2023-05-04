import React from "react";

import { FaRegIdBadge } from 'react-icons/fa';
import CardBase from "../CardBase";

export default function DisciplinaCard() {

    const ICON_SIZE = 80;

    return (
        <CardBase icon={<FaRegIdBadge size={ICON_SIZE} />} name={'DISCIPLINA'} >
            <div className="pessoa-card-info">
                <span>Data de Nascimento: </span>
                <span>Matrícula: </span>
                <span>E-mail: </span>
            </div>
        </CardBase>
    )
}