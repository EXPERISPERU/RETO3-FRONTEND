import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton, List, ListItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface DashboardTableProps {
    rows: any[];
    handleOpenModal: (row: any) => void;
    handleCloseModal: () => void;
}

export const UserTable = ({ rows, handleOpenModal, handleCloseModal }: DashboardTableProps) => {

    const columns: GridColDef[] = [
        { field: 'nIdUsuario', headerName: 'ID', width: 70 }
        ,{ field: 'sUsuario', headerName: 'Usuario', width: 130 }
        ,{ field: 'sNombreCompleto', headerName: 'Nombre Completo', width: 130 }
        ,{ field: 'bActivo', headerName: 'Activo', width: 130 }
        ,{
            field: "actions",
            headerName: "Acción",
            width: 150,
            sortable: false,
            renderCell: (params) => (
                <List
                    sx={{
                        display: 'flex'
                        ,'& .MuiListItem-root': {
                            padding: 0
                            ,width: '40px'
                            ,marginRight: '5px'
                            ,background: '#8dffa0'
                            ,borderRadius: '8px'
                        }
                    }}
                >
                    <ListItem>
                        <IconButton onClick={() => handleOpenModal(params.row)} color="primary"> <EditIcon /> </IconButton>
                    </ListItem>
                    <ListItem>
                        <IconButton onClick={() => handleCloseModal()} color="primary"> <EditIcon /> </IconButton>
                    </ListItem>
                </List>
            ),
        },
    ];   
    
    const paginationModel = { page: 0, pageSize: 5 };  

    return (
        <>
            <DataGrid
                rows={rows}
                columns={ columns }
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick 
                sx={{ border: 0 }}
                localeText={{
                    noRowsLabel: 'No hay registros',
                    columnMenuSortAsc: 'Ordenar ascendente',
                    columnMenuSortDesc: 'Ordenar descendente',
                    columnMenuFilter: 'Filtrar',
                    columnMenuHideColumn: 'Ocultar columna',
                    columnMenuShowColumns: 'Mostrar columnas',
                    footerRowSelected: (count) => `${count} fila(s) seleccionada(s)`,
                    footerTotalRows: 'Total de filas:',
                    toolbarExport: 'Exportar',
                    toolbarDensity: 'Densidad',
                    toolbarColumns: 'Columnas',
                    toolbarFilters: 'Filtros',
                    toolbarExportCSV: 'Exportar a CSV',
                    // footerPaginationRowsPerPage: 'Filas por página', // 👈 Traducción de "Rows per page"
                    // paginationLabelDisplayedRows: ({ from, to, count }) => `${from}–${to} de ${count !== -1 ? count : `más de ${to}`}`,
                }}
            />
        </>
    )
}
