import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from "../../../services/history";

function* loginRequest( { payload }) {
    try {
        const response = yield call(axios.post, '/v1/Autenticacao/Autenticar', payload);
        yield put(actions.loginSuccess({ ...response.data }));

        toast.success('Bem vindo(a) de volta!');

        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        
        console.log(axios.defaults.headers.common);

        history.push('/');
    } catch {
        toast.error('Usuário ou senha inválidos.')
        yield put(actions.loginFailure());
        history.push('/');
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token');
    if (!token) return;

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
])