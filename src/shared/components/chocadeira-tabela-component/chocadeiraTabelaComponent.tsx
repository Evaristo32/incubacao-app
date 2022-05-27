import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ChocadeiraService } from '../../services/apis/chocadeira/chocadeiraService';
import { TChocadeira } from '../../services/apis/model/types';
import { ExcluirChocadeira } from '../excluir-chocadeira/excluirChocadeira';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

interface IProprts {
    filtros?: TChocadeira;
}

export const ChocadeiraTabelaComponent: React.FC<IProprts> = ({ }) => {

    const navigate = useNavigate();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [chocadeira, setChocadeira] = useState<TChocadeira>({});
    const [chocadeiras, setChocadeiras] = useState<TChocadeira[]>([]);

    useEffect(() => {
        buscarChocadeiras();
    }, [])

    const buscarChocadeiras = () => {
        ChocadeiraService.getAll()
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    return;
                }
                setChocadeiras(result);
            });
    }

    const handleOnRemove = () => {
        ChocadeiraService.deleteById(chocadeira.id).then((res) => {
            if (res instanceof Error) {
                alert(res.message);
                setOpen(false);
                return;
            }
            buscarChocadeiras();
            setOpen(false);
        });
    }

    const handleOpenModal = (row: TChocadeira) => {
        setOpen(true);
        setChocadeira(row);
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            <TableContainer component={Paper} variant="outlined">
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Código</StyledTableCell>
                            <StyledTableCell>Marca</StyledTableCell>
                            <StyledTableCell>Capacidade</StyledTableCell>
                            <StyledTableCell align="center">Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {chocadeiras?.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>{row.codigo}</StyledTableCell>
                                <StyledTableCell>{row.marca}</StyledTableCell>
                                <StyledTableCell>{row.capacidadeTotal}</StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">
                                    <IconButton aria-label="edit" onClick={() => navigate(`/chocadeira/editar/${row.id}`)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => handleOpenModal(row)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ExcluirChocadeira open={isOpen} onClose={(() => setOpen(false))} onRemove={handleOnRemove}
                mensagem={'Deseja excluir chocadeira com código (' + chocadeira.codigo + ') da marca (' + chocadeira.marca + ')?'} />
        </Paper>
    );
}