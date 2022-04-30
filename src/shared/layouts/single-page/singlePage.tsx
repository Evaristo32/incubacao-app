
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { BreadcrumbComponent, TBreadcrumbComponent } from '../../components';
type TSinglePageProps = {
    titulo?: string;
    breadcrumb?: TBreadcrumbComponent;
    children?: React.ReactNode;
};

export const SinglePage: React.FC<TSinglePageProps> = ({ children, breadcrumb, titulo }) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Container maxWidth="xl" >
                <Box  marginLeft={smDown ? 0 : theme.spacing(28)}>
                    <h1>{titulo}</h1>
                </Box>
                <Box height="88vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                    <BreadcrumbComponent paths={breadcrumb?.paths}></BreadcrumbComponent>
                    {children}
                </Box>
            </Container>
        </>
    );
}
