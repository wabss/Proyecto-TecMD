import { useState, useEffect } from 'react';
import { fetchPokemon } from './fetchPokemon';
  
/**
 * 
 * @returns {Object}
 *   pokemonName: string | null - Nombre del Pokemon.
 *   pokemonSprite: object | null - Imagen del Pokemon.
 *   nextPokemon: () => void - Función para obtener un Pokemon aleatorio.
 */

export const usePokeAPI = () => {
  
  const [pokemonName, setPokemonName] = useState(null)
  const [pokemonSprite, setPokemonSprite] = useState(null)
  const [index, setIndex] = useState(25)

  const nextPokemon = () => {
    const index = Math.floor(Math.random() * 1024) + 1;
    setIndex(index);
  };

  const handlePokemon = async() => {
    const data = await fetchPokemon(index);
    const {name, sprites} = data;
    const cleanName = name.replace(/[@#¿!-]/g, " ");
    setPokemonName(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
    setPokemonSprite(sprites);
  }

  useEffect(()=>{
    let timeoutId;
    const getPokemon = () => {
        setPokemonName('Cargando...');
        setPokemonSprite(null);
        timeoutId = setTimeout( () => {
          handlePokemon();
      }, 500)
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