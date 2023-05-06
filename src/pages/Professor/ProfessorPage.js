import React, { useEffect, useState } from "react";

import UIContainerScroll from "../../components/UI/Container/ContainerScroll";
import Title from "../../components/Title/Title";
import ListPessoaBase from "../../components/Pessoa/List/ListPessoaBase";
import useApi from "../../components/utils/useApi";
import  * as requestConstants from '../../utils/constants/requestConstants';
import UIInfiniteScroll from '../../components/UI/InfiniteScrool/InfiniteScrool';

export default function ProfessorPage(){

    const [page, setPage] = useState(1);
    const [load, loadInfo] = useApi({
        url: '/v1/Professor/ConsultarLista',
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
        <div className="professor-page">
            <Title name={'Professores'} />
            <UIContainerScroll>
                <ListPessoaBase
                    loading={loadInfo.loading}
                    pessoas={loadInfo.data}
                    type= {'PROFESSOR'}
                    error= {loadInfo.error}
                />
                { loadInfo.data && !loadInfo.loading && loadInfo.data?.length < loadInfo.total &&
                    <UIInfiniteScroll fecthMore={fecthMore}/> }
            </UIContainerScroll>
        </div>
    );
}