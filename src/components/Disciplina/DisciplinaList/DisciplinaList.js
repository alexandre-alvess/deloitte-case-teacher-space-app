import React from "react";

import DisciplinaCard from "../DisciplinaCard/DisciplinaCard";

export default function DisciplinaList({ loading, error, items }) {
    
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
        <div className="disciplina-base-list">
            {items.map((item, index) => (
                    <DisciplinaCard disciplina={item} key={index} />
            ))}
            {loading && <div>Carregando mais dados...</div>}
        </div>
    );
};