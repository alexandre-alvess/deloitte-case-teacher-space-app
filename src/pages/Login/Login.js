import React, { useState } from "react";
import { useDispatch } from "react-redux";

import './Login.css';

import * as actions from '../../store/modules/auth/actions';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');

    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(actions.loginRequest({
            login: email,
            senha: password
        }));
        console.log('pagina de login');
    };

    return (
        <div className="login-container-center">
            <div className="login">
                <form onSubmit={handleClick}>
                    <h1>Entrar</h1>
                    <input
                        type='text'
                        placeHolder='email@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />

                     <input
                        type='password'
                        placeHolder='****************'
                        value={password}
                        onChange={(e) => setPassord(e.target.value)}
                     />

                     <button type='submit'>Acessar</button> 
                </form>

            </div>
        </div>
    );
}