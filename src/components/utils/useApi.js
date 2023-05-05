import { useState } from "react";

import axios from "../../services/axios";

const initialRequestInfo = {
    error: null,
    data: null,
    loading: false
};

export default function useApi(config) {

    const [requestInfo, setRequestInfo] = useState(initialRequestInfo);

    async function call(localConfig) {
        let response = null;

        const finalConfig = {
            updateRequestInfo: (newInfo) => newInfo,
            ...config,
            ...localConfig
        };

        if (finalConfig.isFetchMore) {
            setRequestInfo({
                ...initialRequestInfo,
                data: requestInfo.data,
                loading: true
            });
        }
        else {
            setRequestInfo({
                ...initialRequestInfo,
                loading: true
            });
        }

        try {
            
            response = await axios(finalConfig);

            
            const newRequestInfo = {
                ...initialRequestInfo,
                data: response.data.dados
            };
            
            if (response.data.totalRegistros !== undefined) {
                newRequestInfo.total = Number.parseInt(response.data.totalRegistros , 10);
            }
            
            setRequestInfo(
                finalConfig.updateRequestInfo(newRequestInfo, requestInfo)
            );
                
        } catch (error) {
            
            setRequestInfo(
                finalConfig.updateRequestInfo({
                    ...initialRequestInfo,
                    error
                }, requestInfo));
        }
    
        if (config.onCompleted) {
            config.onCompleted(response);
        }

        return response;
    }

    return [call, requestInfo];
}