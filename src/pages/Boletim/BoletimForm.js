import React from "react";

import UIContainer from "../../components/UI/Container/Container";
import BaseForm from "../../components/Form/BaseForm";
import Title from "../../components/Title/Title";

export default function PageBoletimForm() {
    return (
        <div className="form-boletim">
            <Title name={'Lançamento Boletins'}/>
            <UIContainer>
                <BaseForm />
            </UIContainer>
        </div>
    );
};