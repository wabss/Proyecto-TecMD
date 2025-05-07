import { Grid, Typography, Button, Box } from "@mui/material";
import '../../style/Home.css';
import foto from '../../assets/ayudaporfavor.jpg'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box className='main slide'>
      <Grid 
      container 
      justifyContent={"space-between"}
      className='box-shadow'
      sx={{ backgroundColor: 'primary.main', overflow: 'hidden' }}>
        <Grid item size={{xs: 12, md: 6}} sx={{backgroundColor: 'rgba(0,0,0,0.3)'}} className='hero-section'>
          <Typography variant="h2" sx={{ padding: 2 }}>
            Bienvenido a Pixely :D
          </Typography>
          <Typography variant="h4" sx={{ padding: 4 }}>
            Hola, esta es la página web que desarrollé como proyecto final de mi técnico. En ella he puesto todo el conocimiento que he adquirido
            durante el programa y en mi contrato de aprendizaje.
          </Typography>
        </Grid>
        <Grid item size={{xs: 12, md:6}} className='hero-section'>
          <Box component="img" src={foto} alt="foto" loading="lazy"/>
        </Grid>
        <Grid item size={{xs: 12}} className='hero-section' sx={{padding: 4}}>
          <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
            En este botón puedes encontrar el enlace al repositorio de GitHub que contiene todo el código del proyecto.
          </Typography>
          <Link to='https://github.com/wabss/login-project'>
          <div className="button">
            <Button 
            variant="contained" 
            color="primary" 
            sx={{
              backgroundColor: 'secondary.main', 
              height: '80px', 
              width: '160px', 
              fontSize: '30px'
            }}>
              GitHub
            </Button>
          </div>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
