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
import { TChocadeira, TItemIncubacao, TRaca } from '../../../services/apis/model/types';
import { RacaService } from '../../../services/apis/raca/racaService';
import { ExcluirRegistro } from '../../excluir/excluirRegistro';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    ['width']:'30px'
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
    data?: TItemIncubacao[];
}

export const ItemIncubacaoTabelaComponent: React.FC<IProprts> = ({data}) => {

    const navigate = useNavigate();

    const handleOnRemove = () => {

    }


    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            <TableContainer component={Paper} variant="outlined">
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Raça</StyledTableCell>
                            <StyledTableCell>Ovos</StyledTableCell>
                            <StyledTableCell align="center">Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>{row.raca?.nome}</StyledTableCell>
                                <StyledTableCell>{row.quantidade}</StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">
                                    <IconButton aria-label="delete" onClick={() => handleOnRemove()}>
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <ExcluirRegistro open={isOpen} onClose={(() => setOpen(false))} onRemove={handleOnRemove}
                mensagem={'Deseja excluir a raça com o nome (' + raca.nome + ')?'} /> */}
        </Paper>
    );
}