import { Box, ThemeProvider } from '@mui/material';
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LightTheme } from '../../shared/themes';


interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleThema: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemaContext = () => {
    return useContext(ThemeContext);
}

type TAppThemeProvider = {
    children: React.ReactNode;
}

export const AppThemeProvider: React.FC<TAppThemeProvider> = ({ children }) => {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleThema = useCallback(() => { setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light'); }, []);

    const theme = useMemo(() => { return themeName === 'light' ? LightTheme : LightTheme }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleThema }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

