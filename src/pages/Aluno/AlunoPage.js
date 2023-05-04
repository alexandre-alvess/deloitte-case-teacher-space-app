import React from "react";

import UIContainer from "../../components/UI/Container";
import Title from "../../components/Title/Title";
import PessoaCard from "../../components/Cards/PessoaCard/PessoaCard";

export default function AlunoPage(){
    return (
        <div>
            <Title name={'Alunos'}>
            </Title>
            <UIContainer>
                <PessoaCard type={'ESTUDANTE'} />
            </UIContainer>
        </div>
    );
}