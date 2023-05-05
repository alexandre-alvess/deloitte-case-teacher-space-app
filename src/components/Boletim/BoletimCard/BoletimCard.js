import React from "react";

import './BoletimCard.css';

import { FaRegEdit } from 'react-icons/fa';
import CardBase from "../../Cards/CardBase";
import  * as helpers from '../../../utils/helpers';

export default function BoletimCard({ boletim }) {
    const ICON_SIZE = 65;

    return (
        <CardBase className='boletim-card-header' icon={<FaRegEdit size={ICON_SIZE} />} name={'BOLETIM'} >
            <div className="boletim-card-info">
                <span>Aluno: {boletim?.aluno?.nome.toUpperCase()}</span>
                <span>Turma: {boletim?.turma?.nome.toUpperCase()}</span>
                <span>Disciplina: {boletim?.turma?.disciplina?.nome.toUpperCase()}</span>
                <span>Data de Entrega: {helpers.dateFormat(boletim.data_entrega).date}</span>
                <span className="boletim-card-info-nota"><a>Nota: {boletim.nota}</a></span>
            </div>
        </CardBase>
    )
}