import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { TChocadeira } from '../../services/apis/model/types';


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
    data?: TChocadeira[];
}

export const ChocadeiraTabelaComponent: React.FC<IProprts> = ({ data }) => {

    const navigate = useNavigate();

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
                        {data?.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>{row.codigo}</StyledTableCell>
                                <StyledTableCell>{row.marca}</StyledTableCell>
                                <StyledTableCell>{row.capacidadeTotal}</StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">
                                    <IconButton aria-label="edit" onClick={() => navigate(`/chocadeira/editar/${row.id}`)}><EditIcon /></IconButton>
                                    <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}