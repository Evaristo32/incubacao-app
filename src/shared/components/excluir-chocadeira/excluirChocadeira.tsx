import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export type Properts = {
    onRemove?: () => void;
    onClose?: () => void;
    open: boolean;
    mensagem?: string;
}

export const ExcluirChocadeira: React.FC<Properts> = ({ onRemove, onClose, open, mensagem }) => {
    return (
        <Modal
            open={open}
            onClose={() => onClose?.()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {mensagem}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button type="button" sx={{ padding: 2, margin: 2 }} onClick={onClose} variant="contained" endIcon={<KeyboardBackspaceIcon />}>Cancelar</Button>
                    <Button type="button" sx={{ padding: 2, margin: 2 }} onClick={onRemove} variant="contained" color="error" endIcon={<CancelScheduleSendIcon />}>Excluir</Button>
                </Typography>
            </Box>
        </Modal>
    );
} 