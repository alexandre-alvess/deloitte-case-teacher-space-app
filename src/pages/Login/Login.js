import React from "react";
import { useDispatch } from "react-redux";

import { Title } from './styled';

import * as actions from '../../store/modules/auth/actions';
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

    /* teste storage para armazenar token do usuário*/

    const usuarioAuth = {
        login: 'user@example.com',
        senha: 'string'
    };

    /* teste storage para armazenar token do usuário*/

    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(actions.loginRequest(usuarioAuth));
        console.log('pagina de login');
    };

    return (
        <>
            <Title>Teste Login</Title>
            <button type="button" onClick={handleClick} color='red'>Enviar</button>
        </>);
}