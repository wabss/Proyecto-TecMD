import {usePokeAPI} from '../../hooks/usePokeAPI'
import { useEffect, useState } from 'react'
import { Grid, Box, Button, Fade, Typography } from '@mui/material'
import  left from '../../assets/left.png'
import  right from '../../assets/right.png'
import '../../style/Pokemon.css'
 
export const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {pokemonName, pokemonSprite, nextPokemon, lastPokemon} = usePokeAPI()

    
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
            <Box className='center-box' sx={{height: '100vh'}}>
                <Typography variant="h2" sx={{ padding: 2 }}>
                   Cargando...
                </Typography>
            </Box>
        </Fade>
    )}

    {!isLoading && (
    <Fade in={true} timeout={1000} mountOnEnter unmountOnExit>
        <Box sx={{height: '100vh', backgroundColor: 'primary.main'}} className='center-box'>
            <Grid container sx={{mt: 2}}>
                <Grid size={{xs: 12}} className='center-box' sx={{mb: 2}}>
                    <Box className='gameboy'>
                        {pokemonSprite && <img src={pokemonSprite.front_default} alt="Pokemon" />}
                        <h1>{pokemonName}</h1>
                    </Box>
                </Grid>
                <Grid size={{xs: 12}} className='center-box' sx={{mt: 4}}>
                    <Button className='button' onClick={() => {lastPokemon()}}><Box className='button-img' component="img" src={left} alt="Button" loading="lazy"/></Button>
                    <Button className='button' onClick={() => {nextPokemon()}}><Box className='button-img' component="img" src={right} alt="Button" loading="lazy"/></Button>
                </Grid>
            </Grid>
        </Box>
    </Fade>
    )}
    </>
  )
}
