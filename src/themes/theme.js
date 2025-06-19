import { createTheme } from "@mui/material"
import Jersey10TTF from '../assets/fonts/Jersey10-Regular.ttf';


export const theme = createTheme({
    palette:{
        primary: {
            main: '#2D2D44'
        },
        secondary: {
            main : '#7d3480'
        },
        tertiary: { 
            main : '#5E2B5A' 
        },
        background: {
            default : '#3C3C3C'
        },
        text: {
            primary: '#F8F8F2'
        }
    },
    typography: {
        fontFamily: "'Jersey 10', 'sans-serif'",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Jersey 10' ;
                src: url('${Jersey10TTF}') format('truetype');
                font-weight: 400;
                font-display: swap;
            }
            `,
        }
    }
});
