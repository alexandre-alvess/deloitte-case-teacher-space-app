import React from "react";

import BoletimCard from "../BoletimCard/BoletimCard";

export default function BoletimList({ loading, error, items }) {
    
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
        <div className="boletim-base-list">
            {items.map((item, index) => (
                    <BoletimCard boletim={item} key={index} />
            ))}
            {loading && <div>Carregando mais dados...</div>}
        </div>
    );
};