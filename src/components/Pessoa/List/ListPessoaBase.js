import React from "react";

import PessoaCard from '../Card/PessoaCard';

import './ListPessoaBase.css';

export default function ListPessoaBase({ loading, error, pessoas, type }) {
    
    if (error) {
        return <div>Algo de errado não está certo...</div>
    }

    if (pessoas === null) {
        return <div>Carregando...</div>
    }

    if (pessoas.length === 0) {
        return <div>Nenhum resultado encontrado</div>
    }
    
    return (
        <div className="pessoa-base-list">
            {pessoas.map((pessoa, index) => (
                    <PessoaCard pessoa={pessoa} type={type} key={index} />
            ))}
            {loading && <div>Carregando mais dados...</div>}
        </div>
    );
};