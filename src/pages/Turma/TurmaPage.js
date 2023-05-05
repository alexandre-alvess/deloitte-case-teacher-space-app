import React from "react";

import UIContainer from "../../components/UI/Container/Container";
import Title from "../../components/Title/Title";
import TurmaCard from "../../components/Cards/TurmaCard/TurmaCard";

export default function TurmaPage(){
    return (
        <div>
            <Title name={'Turmas'}>
            </Title>
            <UIContainer>
                <TurmaCard />
            </UIContainer>
        </div>
    );
}