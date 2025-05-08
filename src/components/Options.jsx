import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import '../style/Options.css'

export const Options = () => {
  return (
    <Box className={'center-box'} >
        <Button className='text' color="inherit" component={Link} to="/">Inicio</Button>
        <Button className='text' color="inherit" component={Link} to="/about">¿Cómo se creó?</Button>
        <Button className='text' color="inherit" component={Link} to="/pokemon">Pokédex</Button>
    </Box>
  )
}
