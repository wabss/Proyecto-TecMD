import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import '../style/Options.css'

export const Options = () => {
  return (
    <Box className={'center-box'} sx={{gap: 2}} >
        <Button className='text' color="inherit" component={Link} to="/">Inicio</Button>
        <Button className='text' color="inherit" component={Link} to="/about">¿Cómo se creó?</Button>
        <Button className='text' color="inherit" component={Link} to="/pokemon">Pokédex</Button>
        <Button 
        variant="contained"
        className='text' 
        color="inherit" 
        component={Link} to="https://github.com/wabss/Proyecto-TecMD" 
        onClick={() => alert("Se te va a redirigir a una pagina externa")} 
        startIcon={<OpenInNewIcon />}
        sx={{
          backgroundColor: 'primary.main'
        }}>Repositorio de Github</Button>
    </Box>
  )
}
