import { createTheme } from "@mui/material"

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
    }
});
