import * as types from '../types';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
    userId: '',
    tipoPerfil: '',
    entidadeId: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {

            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.userId = action.payload.usuario_id;
            newState.tipoPerfil = action.payload.tipo_perfil_usuario;
            newState.entidadeId = action.payload.entidade_id;

            console.log('REDUCER', action.payload)
            return newState;
        }

        case types.LOGIN_FAILURE: {
            const newState = {...initialState};
            return newState;
        }

        default: {
            return state;
        }
    }
}