import React from "react";

import { FaRegEdit } from 'react-icons/fa';
import CardBase from "../CardBase";

export default function BoletimCard() {
    const ICON_SIZE = 80;

    return (
        <CardBase icon={<FaRegEdit size={ICON_SIZE} />} name={'BOLETIM'} >
            <div className="pessoa-card-info">
                <span>Data de Nascimento: </span>
                <span>Matrícula: </span>
                <span>E-mail: </span>
            </div>
        </CardBase>
    )
}