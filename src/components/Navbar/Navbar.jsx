import { Grid, Box, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: 25,
  [theme.breakpoints.down('md')]: {
    fontSize: 15,
    textAlign: 'center'
  },
}));

export const Navbar = () => {

  return (
    <>
      <Grid container 
      sx={{ 
          padding: 2, 
          backgroundColor: 'secondary.main', 
          borderBottom: 'solid 8px #5E2B5A', 
          gap: 2,
          justifyContent: {
            xs: 'center',
            md: 'space-between'
          },
          flexWrap: 'wrap',
      }}>
          <Box component="img" width={273} height={'auto'} src={logo} alt="logo" loading="lazy"/>
          <Box className={'center-box'} sx={{gap: 2}} >
            <CustomButton color="inherit" component={Link} to="/">Inicio</CustomButton>
            <CustomButton color="inherit" component={Link} to="/about">¿Cómo se creó?</CustomButton>
            <CustomButton color="inherit" component={Link} to="/pokemon">Pokédex</CustomButton>
            <CustomButton 
              variant="contained"
              color="inherit" 
              component={Link} to="https://github.com/wabss/Proyecto-TecMD" 
              onClick={() => alert("Se te va a redirigir a una pagina externa")} 
              startIcon={<OpenInNewIcon />}
              sx={{
                backgroundColor: 'primary.main'
              }}>
                Repositorio de Github
            </CustomButton>
          </Box>
      </Grid>
    </>
  );
};
