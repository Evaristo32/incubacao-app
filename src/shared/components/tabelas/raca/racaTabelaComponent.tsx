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
import { TChocadeira, TRaca } from '../../../services/apis/model/types';
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
    filtros?: TChocadeira;
}

export const RacaTabelaComponent: React.FC<IProprts> = ({ }) => {

    const navigate = useNavigate();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [raca, setRaca] = useState<TRaca>({});
    const [racas, setRacas] = useState<TRaca[]>([]);

    useEffect(() => {
        buscarRacas();
    }, [])

    const buscarRacas = () => {
        RacaService.getAll()
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                    return;
                }
                setRacas(result);
            });
    }

    const handleOnRemove = () => {
        RacaService.deleteById(raca.id).then((res) => {
            if (res instanceof Error) {
                alert(res.message);
                setOpen(false);
                return;
            }
            buscarRacas();
            setOpen(false);
        });
    }

    const handleOpenModal = (row: TRaca) => {
        setOpen(true);
        setRaca(row);
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            <TableContainer component={Paper} variant="outlined">
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Nome</StyledTableCell>
                            <StyledTableCell>Descrição</StyledTableCell>
                            <StyledTableCell align="center">Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {racas?.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>{row.nome}</StyledTableCell>
                                <StyledTableCell>{row.descricao}</StyledTableCell>
                                <StyledTableCell align="center" component="th" scope="row">
                                    <IconButton aria-label="edit" onClick={() => navigate(`/raca/editar/${row.id}`)}>
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
            <ExcluirRegistro open={isOpen} onClose={(() => setOpen(false))} onRemove={handleOnRemove}
                mensagem={'Deseja excluir a raça com o nome (' + raca.nome + ')?'} />
        </Paper>
    );
}