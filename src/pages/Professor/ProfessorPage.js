import React, { useEffect } from "react";

import UIContainer from "../../components/UI/Container/Container";
import Title from "../../components/Title/Title";
import ListPessoaBase from "../../components/Pessoa/List/ListPessoaBase";
import useApi from "../../components/utils/useApi";
import  * as requestConstants from '../../utils/constants/requestConstants';

export default function ProfessorPage(){

    const [load, loadInfo] = useApi({
        url: '/v1/Professor/ConsultarLista',
        method: 'get',
        params: {
            pagina: 1,
            quantidade: requestConstants.REQUEST_QTD_ITEMS_MAX,
        },
    });

    useEffect(() => {
       load();
    }, []);

    return (
        <div>
            <Title name={'Professores'}>
            </Title>
            <UIContainer>
                <ListPessoaBase
                    loading={!loadInfo.loading}
                    pessoas={loadInfo.data}
                    type= {'PROFESSOR'}
                    error= {loadInfo.error}
                />
            </UIContainer>
        </div>
    );
}