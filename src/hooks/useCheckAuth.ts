import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logOut } from '../store/admin/auth';


export const useCheckAuth = () => {
  
    const { status } = useSelector( (state: any) => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        const savedToken = localStorage.getItem('authToken'); // Asumiendo que guardas el token en el localStorage
    
        if (savedToken) {
            dispatch(login({ token: savedToken }));
        } else {
            dispatch(logOut({ errorMessage: null }));
        }
    }, [dispatch]);

    return status;
}