import React from "react";

import UIContainer from "../../components/UI/Container";
import Title from "../../components/Title/Title";
import PessoaCard from "../../components/Cards/PessoaCard/PessoaCard";

export default function ProfessorPage(){
    return (
        <div>
            <Title name={'Professores'}>
            </Title>
            <UIContainer>
                <PessoaCard type={'PROFESSOR'} />
            </UIContainer>
        </div>
    );
}