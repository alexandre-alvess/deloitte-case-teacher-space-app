import React, { useState, useEffect } from "react";

import UIContainer from "../../components/UI/Container/Container";
import Title from "../../components/Title/Title";
import useApi from "../../components/utils/useApi";
import  * as requestConstants from '../../utils/constants/requestConstants';
import DisciplinaList from '../../components/Disciplina/DisciplinaList/DisciplinaList';
import UIInfiniteScroll from '../../components/UI/InfiniteScrool/InfiniteScrool';

export default function DisciplinaPage(){

    const [page, setPage] = useState(1);
    const [load, loadInfo] = useApi({
        url: '/v1/Disciplina/ConsultarLista',
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
        <div>
            <Title name={'Disciplinas'} />
            <UIContainer>
                <DisciplinaList 
                    loading={loadInfo.loading}
                    items={loadInfo.data}
                    error= {loadInfo.error}
                />
                { loadInfo.data && !loadInfo.loading && loadInfo.data?.length < loadInfo.total &&
                    <UIInfiniteScroll fecthMore={fecthMore}/> }
            </UIContainer>
        </div>
    );
}