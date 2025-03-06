import Grid from "@mui/material/Grid2";
import { DatepickerAdmin } from '../../components/DatePickerAdmin';
import styles from '../css/DashboardStyle.module.css';
import {CardAdmin} from "../../components/CardAdmin";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { PerfilDashboard, UserTable } from "../components";
import { getAllUsers } from "../../../../store/admin/user";
import { useAppDispatch } from "../../../../hooks/reactRedux";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

export const DashboardPage = () => {

    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleOpenModal = (row: any) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleCloseModal = () => setOpen(false);
        
    const users = useSelector((state: any) => state.user.users);  // Asegúrate de que users esté en el estado correctamente
     // Definimos rows con los usuarios obtenidos desde el estado
     const [rows, setRows] = useState<any[]>([]);

    useEffect(() => {
        dispatch(getAllUsers()); // Llama a la acción para cargar los usuarios
    }, [ dispatch ]);

    useEffect(() => {
        if (users && users.length > 0) {
            setRows(users);
        }
    }, [users]);
    

    return (
        <section className={styles.sectDashboard}>

            <Grid container spacing={4}>
                <Grid size={3}>
                    <CardAdmin>
                        <DatepickerAdmin /> 
                    </CardAdmin>
                </Grid>

                <Grid size={6}>
                    <CardAdmin>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                            <Typography variant="h5" sx={{ fontWeight: '700' }}>USUARIOS</Typography>
                            <Button variant="contained" onClick={ handleOpenModal }>AGREGAR</Button>
                        </Box>
                        <Box>
                            <UserTable
                                rows={users.map((user: any) => ({ ...user, id: user.nIdUsuario }))}
                                handleOpenModal={ handleOpenModal }
                                handleCloseModal={ handleCloseModal }
                            />
                        </Box>
                    </CardAdmin>
                </Grid>

                <Grid size={3}>
                    <CardAdmin>
                        <PerfilDashboard />
                    </CardAdmin>
                </Grid>

                { /****************/ }
            </Grid>
            
            {/* Modal */}
            <Modal open={ open } onClose={ handleCloseModal }>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'white', p: 4, borderRadius: 2, boxShadow: 24 }}>
                    <Typography variant="h6">Editar Usuario</Typography>
                    {selectedRow && (
                        <>
                            {/* <Typography>ID: {selectedRow.id}</Typography>
                            <Typography>Nombre: {selectedRow.firstName} {selectedRow.lastName}</Typography>
                            <Typography>Edad: {selectedRow.age}</Typography> */}
                        </>
                    )}
                    <button onClick={ handleCloseModal }>Cerrar</button>
                </Box>
            </Modal>

            
        </section>
    )
}