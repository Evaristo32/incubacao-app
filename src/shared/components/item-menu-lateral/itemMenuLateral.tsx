

import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import * as React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';


type TItemMenuLateralProps = {
    label: string;
    toUrl: string;
    children?: React.ReactNode
    onClick?: (() => void) | undefined;
};

export const ItemMenuLateral: React.FC<TItemMenuLateralProps> = ({ label, toUrl, onClick, children }) => {

    const navigate = useNavigate();
    const resolverdPath = useResolvedPath(toUrl);
    const match = useMatch({ path: resolverdPath.pathname, end: false })

    const handleClick = () => {
        navigate(toUrl);
        debugger;
        onClick?.();
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
}


