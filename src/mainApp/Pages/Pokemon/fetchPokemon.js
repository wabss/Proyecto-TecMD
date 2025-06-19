import axios from 'axios'

export const fetchPokemon = async(num) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      return data;
    } catch (error) {
      setPokemonName('Error: Tal vez buscaste un ID que no existe');
      setPokemonSprite(null);
    }
    
  }

