import axios from "axios";
import { AppDispatch } from "../../store";
import { listUsers } from "../user";

export const getAllUsers = () => {
    return async( dispatch: AppDispatch ) => {

        try {
            const API_URL = import.meta.env.VITE_API_URL;
            
            /// Obtén el token del localStorage
            const token = localStorage.getItem("authToken");

            const response = await axios.get(`${API_URL}/Usuario/getAllUsuario`, {
                headers: { Authorization: token ? `Bearer ${token}` : "" },
                timeout: 5000,
            });
            
            dispatch(listUsers( response.data ));
            
        } catch (error) {
            console.error("Error al al obtener los usuarios:", error);
        }
    }
}