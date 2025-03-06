import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    users: any[]; // Aquí se puede ajustar según el tipo de datos de los usuarios
}

const initialState: UserState = {
    users: [], // Inicializa el array vacío para evitar `undefined`
};

export const userSlice = createSlice({
    name: 'user'
    ,initialState: initialState
    ,reducers: {
        listUsers: (state, { payload } ) => {
            // Almacena el array de usuarios en el estado
            state.users = payload.data;
            console.log(payload.data); // Verifica que los usuarios se están asignando correctamente
        },
    }
});
export const { listUsers } = userSlice.actions;