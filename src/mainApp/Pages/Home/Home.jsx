import { Grid, Typography, Box } from "@mui/material";
import './Home.css';

export const Home = () => {
  return (
    <Box className='main slide'>
      <Grid 
      container 
      justifyContent={"space-between"}
      className='box-shadow'
      sx={{ backgroundColor: 'primary.main', overflow: 'hidden' }}>
        <Grid item size={{xs: 12 }} sx={{backgroundColor: 'rgba(0,0,0,0.3)', padding: {sx: 6, md: 20}}} className='hero-section'>
          <Typography variant="h2" sx={{ padding: 2 }}>
            Bienvenido a Pixely :D
          </Typography>
          <Typography variant="h4" sx={{ padding: 4}}>
            Bienvenid@ a mi página web, hecha como proyecto final de mi técnico. Aquí he puesto todo el conocimiento adquirido a lo largo del programa y mi contrato de aprendizaje, buscando ofrecer una experiencia de usuario buena y optimizada. Esta página prioriza el rendimiento, la escalabilidad y accesibilidad empleando un diseño responsive, gracias a este la página puede visualizarse correctamente desde varios dispositivos.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
