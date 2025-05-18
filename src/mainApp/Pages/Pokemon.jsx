import {usePokeAPI} from '../../hooks/usePokeAPI'
import { useEffect, useState } from 'react'
import { Grid, Box, Button, Fade, Typography, useTheme, useMediaQuery } from '@mui/material'
import '../../style/Pokemon.css'
 
export const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(true)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const {pokemonName, pokemonSprite, nextPokemon} = usePokeAPI()

    
    useEffect(() => {
        let timeout; 
        timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, [])

  return (
    <>
    {isLoading && (
    <Fade in={true} timeout={1000} mountOnEnter unmountOnExit>
        <Box className='center-box' sx={{ height: '100vh' }}>
            <Typography variant="h2" sx={{ padding: 2, textAlign: 'center' }}>
                {isMobile ? 'Voltea el celular' : 'Cargando'}
            </Typography>
        </Box>
    </Fade>
)}

    {!isLoading && (
    <Fade in={true} timeout={1000} mountOnEnter unmountOnExit>
        <Box sx={{height: '800px', backgroundColor: 'primary.main'}} className='center-box'>
            <Grid container>
                <Grid size={{xs: 12}} className='center-box' sx={{mb: 2}}>
                    <Box className='gameboy center-box'>
                        <Box className='center-box' sx={{width: '200px', flexDirection: 'column'}}>
                            {pokemonSprite && <img src={pokemonSprite.front_default} alt="Pokemon" />}
                            <h1>{pokemonName}</h1>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{xs: 12}} className='center-box' >
                <div className="button">
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => {nextPokemon()}}
                    sx={{
                    backgroundColor: 'secondary.main', 
                    height: '80px', 
                    width: '160px', 
                    fontSize: '30px',
                    borderRadius: 0,
                    borderBottom: 'solid 8px #5E2B5A'
                    }}>
                    Siguiente
                    </Button>
                </div>
                </Grid>
            </Grid>
        </Box>
    </Fade>
    )}
    </>
  )
}
