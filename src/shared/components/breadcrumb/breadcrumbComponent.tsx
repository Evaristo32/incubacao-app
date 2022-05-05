import { Breadcrumbs, Link, Typography } from "@mui/material";



type TLink = {
    rota: string;
    path: string;
    rotaAtual: boolean;
}

export type TBreadcrumbComponent = {
    paths?: TLink[];
}

export const BreadcrumbComponent: React.FC<TBreadcrumbComponent> = ({ paths }) => {



    return (

        <Breadcrumbs aria-label="breadcrumb">

            {
                paths?.map((element, index) => (

                    element.rotaAtual
                        ?
                        <Typography color="text.primary" key={index}>{element.rota}</Typography>
                        :
                        <Link underline="hover" color="inherit" href="/home" key={index}>
                            {element.rota}
                        </Link>
                ))
            }

        </Breadcrumbs>

    );
}
