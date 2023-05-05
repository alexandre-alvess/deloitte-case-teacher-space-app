import React from "react";

import { FaLayerGroup } from 'react-icons/fa';
import CardBase from "../../Cards/CardBase";

export default function TurmaCard({ turma }) {
    const ICON_SIZE = 80;

    return (
        <CardBase icon={<FaLayerGroup size={ICON_SIZE} />} name={turma.nome} >
            <div className="pessoa-card-info">
                <span>Disciplina: {turma?.disciplina?.nome}</span>
                <span>Professor: {turma?.professor?.nome}</span>
            </div>
        </CardBase>
    )
}