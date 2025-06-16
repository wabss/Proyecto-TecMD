import axios from 'axios'
import { useState, useEffect } from 'react';
  
export const usePokeAPI = () => {

  
  const [pokemonName, setPokemonName] = useState(null)
  const [pokemonSprite, setPokemonSprite] = useState(null)
  const [index, setIndex] = useState(25)

  const nextPokemon = () => {
    const index = Math.floor(Math.random() * 1024) + 1;
    setIndex((prev) => prev = index);
  };

  const fetchPokemon = async() => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
      const name = response.data.name
      const cleanName = name.replace(/[@#¿!-]/g, " ");
      setPokemonName(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
      setPokemonSprite(response.data.sprites);
    } catch (error) {
      setPokemonName('Error: Tal vez buscaste un ID que no existe');
    }
  }

  useEffect(()=>{
    let timeoutId;
    const getPokemon = () => {
        setPokemonName('Cargando...');
        setPokemonSprite(null);
        timeoutId = setTimeout( () => {
        fetchPokemon()
      }, 1000)
    }
    getPokemon()

    return () => clearTimeout(timeoutId);
  }, [index]);
  
    return {
      pokemonName,
      pokemonSprite,
      nextPokemon,
    }
}