import React from "react";

import UIContainer from "../../components/UI/Container/Container";
import Title from "../../components/Title/Title";
import BoletimCard from "../../components/Cards/BoletimCard/BoletimCard";

export default function BoletimPage(){
    return (
        <div>
            <Title name={'Boletins'}>
            </Title>
            <UIContainer>
                <BoletimCard />
            </UIContainer>
        </div>
    );
}