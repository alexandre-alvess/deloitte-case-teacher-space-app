import React from "react";

import TurmaCard from "../TurmaCard/TurmaCard";

export default function TurmaList({ loading, error, items }) {
    
    if (error) {
        return <div>Algo de errado não está certo...</div>
    }

    if (items === null) {
        return <div>Carregando...</div>
    }

    if (items.length === 0) {
        return <div>Nenhum resultado encontrado</div>
    }
    
    return (
        <div className="turma-base-list">
            {items.map((item, index) => (
                    <TurmaCard turma={item} key={index} />
            ))}
            {loading && <div>Carregando mais dados...</div>}
        </div>
    );
};