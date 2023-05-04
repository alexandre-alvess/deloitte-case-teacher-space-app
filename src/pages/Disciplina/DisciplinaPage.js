import React from "react";

import UIContainer from "../../components/UI/Container";
import Title from "../../components/Title/Title";
import DisciplinaCard from "../../components/Cards/DisciplinaCard/DisciplinaCard";

export default function DisciplinaPage(){
    return (
        <div>
            <Title name={'Disciplinas'}>
            </Title>
            <UIContainer>
                <DisciplinaCard />
            </UIContainer>
        </div>
    );
}