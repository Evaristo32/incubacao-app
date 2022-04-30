
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

import { Avatar, Box, Divider, Drawer, IconButton, List, styled, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { ItemMenuLateral } from '../item-menu-lateral/itemMenuLateral';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export const MenuLateral: React.FC = () => {

    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setOpen] = useState(true);

    // open && smDown ? false : !open && smDown ? false : true : true 

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>


            <IconButton hidden={ open  } aria-label="menu" size="large" color='primary' onClick={handleDrawerOpen}
                sx={{ height: theme.spacing(10), width: theme.spacing(10) }}>
                <MenuIcon sx={{ height: theme.spacing(8), width: theme.spacing(8) }} />
            </IconButton>


            <Drawer variant="permanent" open={open}  >


                <Box width={open ? theme.spacing(28) : theme.spacing(0)} height="100%" display="flex" flexDirection="column">

                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>

                    <Divider />

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src="https://yt3.ggpht.com/grfYgQadT8iNg9WPb-jkrKB-9224y_DBDXAOtV4Yt7cyQmtR47J_453uveQOTDsp_dRSH851TMM=s108-c-k-c0x00ffffff-no-rj"
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>

                        <List component="nav">


                            <ItemMenuLateral toUrl="/home" label="Página inicial" >
                                <HomeIcon />
                            </ItemMenuLateral>

                            <ItemMenuLateral toUrl="/Chocadeira" label="Chocadeira" >
                                <AppRegistrationIcon />
                            </ItemMenuLateral>

                            <ItemMenuLateral toUrl="/incubacao" label="Incubação" >
                                <DeviceThermostatIcon />
                            </ItemMenuLateral>

                        </List>
                    </Box>

                </Box>
            </Drawer>

        </>
    );
}
