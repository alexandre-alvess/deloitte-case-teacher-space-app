import React from "react";

import { FaLayerGroup } from 'react-icons/fa';
import CardBase from "../CardBase";

export default function TurmaCard() {
    const ICON_SIZE = 80;

    return (
        <CardBase icon={<FaLayerGroup size={ICON_SIZE} />} name={'TURMA'} >
            <div className="pessoa-card-info">
                <span>Data de Nascimento: </span>
                <span>Matrícula: </span>
                <span>E-mail: </span>
            </div>
        </CardBase>
    )
}