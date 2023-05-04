import React from "react";
import { useDispatch } from "react-redux";

import { Title } from './styled';

import axios from '../../services/axios';


export default function Login() {
    //toast.error('sucesso!');

    // React.useEffect(() => {
    //     async function getData() {
    //         const response = await axios.get('/v1/Professor/ConsultarLista?Quantidade=10&Pagina=1');
    //         console.log(response.data);
    //     }
        
    //     getData();
    // }, []);

    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch({
            type: 'BOTAO_CLICADO'
        });
        console.log('pagina de login');
    };

    return (
        <>
            <Title>Teste Login</Title>
            <button type="button" onClick={handleClick} color='red'>Enviar</button>
        </>);
}