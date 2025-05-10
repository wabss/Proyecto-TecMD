import axios from 'axios'
import { useState, useEffect } from 'react';
let cache = {}
  
export const usePokeAPI = () => {

  
  const [pokemonName, setPokemonName] = useState(null)
  const [pokemonSprite, setPokemonSprite] = useState(null)
  const [index, setIndex] = useState(25)

  const nextPokemon = () => {
    const index = Math.floor((Math.random() * 1024) + 1);
    setIndex((prev) => prev = index);
  };
    
  const cacheHandler = ({name, sprites}) => {
    if(!cache[index]){
      const pokemon = {
        name,
        sprites,
      }
      setPokemonName(name);
      setPokemonSprite(sprites);
      cache[index] = pokemon;
    } else {
      setPokemonName(cache[index].name)
      setPokemonSprite(cache[index].sprites)
    }
  }

  const fetchPokemon = async() => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
      cacheHandler(response.data);
    } catch (error) {
      setPokemonName('Error: Tal vez buscaste un ID que no existe');
    }
  }


  useEffect(()=>{
        let timeoutId;


    const getPokemon = () => {

      if (cache[index]) {
        fetchPokemon()
      } else {
        setPokemonName('Cargando...');
        setPokemonSprite(null);
        timeoutId = setTimeout( () => {
          fetchPokemon()
        }, 1000)
      }
    }
    getPokemon()
  }, [index]);
  
    return {
      pokemonName,
      pokemonSprite,
      nextPokemon,
    }
  }