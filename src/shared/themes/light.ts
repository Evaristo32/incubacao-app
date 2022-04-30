import { createTheme } from '@mui/material';
import { cyan, green } from '@mui/material/colors';

export const LightTheme = createTheme(
    {
        palette: {
            primary: {
                main: green[700],
                dark: green[800],
                light: green[500],
                contrastText: '#ffffff'
            },
            secondary: {
                main: cyan[500],
                dark: green[400],
                light: green[300],
                contrastText: '#ffffff'
            },
            background: {
                default: '#ffffff',
                paper: '#f7f6f3'
            }
        }
    }
);