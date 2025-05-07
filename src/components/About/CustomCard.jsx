import { Grid, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom";

export const CustomCard = ({title, text, redirectTo}) => {
  return (
    <Grid container sx={{padding: 4, backgroundColor: 'primary.main', mb: 2}}>
        <Grid size={{xs: 12, md: 6}} className='center-box' sx={{flexDirection: 'column', padding: 4}}>
            <Typography variant='h1'>{title}</Typography>
            <Link to={redirectTo} >
              <div className="button">
                <Button 
                variant="contained" 
                color="primary.main" 
                sx={{
                  color: '#fff',
                  backgroundColor: 'secondary.main', 
                  width: '260px', 
                  fontSize: '30px'
                }}>
                  Enlace a la página de {title}
                </Button>
              </div>
            </Link>
        </Grid>
        <Grid size={{xs: 12, md: 6}} className='center-box' sx={{flexDirection: 'column'}}>
            <Typography variant='h4'>{text}</Typography>
        </Grid>
    </Grid>
  )
}
