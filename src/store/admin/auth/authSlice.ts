import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status          : 'checking' // 'Checking', 'not-authenticaded', 'authenticated'
        ,uid            : null
        ,sUsuario       : null
        ,errorMessage   : null
        // ,products       : []
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status    = 'authenticated';
            state.uid           = payload.uid;
            state.sUsuario      = payload.sUsuario;
            state.errorMessage  = payload.errorMessage;
            // Guardar el token en localStorage
            localStorage.setItem('authToken', payload.token);
        },
        logOut: ( state, { payload } ) => {
            state.status        = 'not-authenticaded';
            state.uid           = null;
            state.sUsuario      = null;
            state.errorMessage  = payload?.errorMessage;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        },
    }
});
export const { login, logOut, checkingCredentials } = authSlice.actions;