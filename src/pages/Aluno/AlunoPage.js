import React, { useEffect, useState } from "react";

import UIContainer from "../../components/UI/Container/Container";
import Title from "../../components/Title/Title";
import ListPessoaBase from "../../components/Pessoa/List/ListPessoaBase";
import useApi from "../../components/utils/useApi";
import  * as requestConstants from '../../utils/constants/requestConstants';
import UIInfiniteScroll from '../../components/UI/InfiniteScrool/InfiniteScrool';

export default function AlunoPage(){

    const [page, setPage] = useState(1);
    const [load, loadInfo] = useApi({
        url: '/v1/Aluno/ConsultarLista',
        method: 'get',
    });

    useEffect(() => {
       load({
            params: {
                pagina: 1,
                quantidade: requestConstants.REQUEST_QTD_ITEMS_MAX,
            },
       });
    }, []);

    function fecthMore() {
        const newPage = page + 1;
        load({
            isFetchMore: true,
            params: {
                pagina: newPage,
                quantidade: requestConstants.REQUEST_QTD_ITEMS_MAX,
            },
            updateRequestInfo: (newRequestInfo, prevRequestInfo) => ({
                ...newRequestInfo,
                data: [...prevRequestInfo.data, ...newRequestInfo.data]
            })
        });

        setPage(newPage);
    }
    
    return (
        <div className="aluno-page">
            <Title name={'Alunos'} />
            <UIContainer>
                <ListPessoaBase
                    loading={loadInfo.loading}
                    pessoas={loadInfo.data}
                    type= {'ESTUDANTE'}
                    error= {loadInfo.error}
                />
                { loadInfo.data && !loadInfo.loading && loadInfo.data?.length < loadInfo.total &&
                    <UIInfiniteScroll fecthMore={fecthMore}/> }
            </UIContainer>
        </div>
    );
}