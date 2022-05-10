
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Container, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BreadcrumbComponent, TBreadcrumbComponent } from '../../components';


type TSinglePageProps = {
    titulo?: string;
    breadcrumb?: TBreadcrumbComponent;
    children?: React.ReactNode;
    mostrarSubmit?: boolean;
    nomeSubmit?: string;
    onClickSubmit?: () => void;
    iconSubmit?: React.ReactNode;
    mostarVoltar?: boolean;
    nomeVoltar?: string;
    onClickVoltar?: () => void;
    iconVoltar?: React.ReactNode;
};

export const SinglePage: React.FC<TSinglePageProps> = ({ children, breadcrumb, titulo,
    mostrarSubmit, nomeSubmit = 'Salvar', onClickSubmit, iconSubmit,
    mostarVoltar, nomeVoltar = 'Voltar', onClickVoltar, iconVoltar }) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Container maxWidth="xl" >

                <Box height="88vh" marginLeft={smDown ? theme.spacing(14) : theme.spacing(28)}>



                    <Box
                        gap={1}
                        padding={1}
                        paddingX={2}
                        display="flex"
                        alignItems="center"
                        height={theme.spacing(5)}
                        marginTop={theme.spacing(4)}
                        component={Paper}
                    >

                        <BreadcrumbComponent paths={breadcrumb?.paths}></BreadcrumbComponent>

                        <Box flex={1} display="flex" justifyContent="end">
                            {mostarVoltar &&
                                (
                                    <Box padding={1} > <Button variant="contained" endIcon={iconVoltar ? iconVoltar : <KeyboardBackspaceIcon />} onClick={onClickVoltar}>{nomeVoltar}</Button></Box>
                                )
                            }

                            {mostrarSubmit &&
                                (
                                    <Box padding={1} >   <Button variant="contained" endIcon={iconSubmit ? iconSubmit : <SaveIcon />} onClick={onClickSubmit}>{nomeSubmit}</Button></Box>
                                )
                            }
                        </Box>
                    </Box>

                    <Typography
                        component={Box}
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipses"
                        marginTop={theme.spacing(10)}
                        variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                    >{titulo}</Typography>

                    <Box marginTop={theme.spacing(6)} flex={1} overflow="auto">
                        {children}
                    </Box>
                </Box>

            </Container>
        </>
    );
}
