import React, { useState, useEffect } from "react";

import UIContainerScroll from "../../components/UI/Container/ContainerScroll";
import Title from "../../components/Title/Title";
import useApi from "../../components/utils/useApi";
import  * as requestConstants from '../../utils/constants/requestConstants';
import UIInfiniteScroll from '../../components/UI/InfiniteScrool/InfiniteScrool';
import TurmaList from "../../components/Turma/TurmaList/TurmaList";

export default function TurmaPage(){
    
    const [page, setPage] = useState(1);
    const [load, loadInfo] = useApi({
        url: '/v1/Turma/ConsultarLista',
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
            <Title name={'Turmas'}>
            </Title>
            <UIContainerScroll>
                <TurmaList 
                    loading={loadInfo.loading}
                    items={loadInfo.data}
                    error= {loadInfo.error}
                />
                { loadInfo.data && !loadInfo.loading && loadInfo.data?.length < loadInfo.total &&
                    <UIInfiniteScroll fecthMore={fecthMore}/> }
            </UIContainerScroll>
        </div>
    );
}