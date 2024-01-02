import { notFound } from "next/navigation";
import { Pokemon } from "@/pokemons/interfaces/pokemon";




const getNamePokemon = async (id: number): Promise<Pokemon> => {

    try {
      const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache',//TODO: cambiar esto
        next: {
          revalidate: 60 * 60 * 30 * 6
        }
      }).then(response => response.json());
    
      console.log('Se cargo: ', pokemon.name);
    
      return pokemon.name;
      
    } catch (error) {
      notFound();
    }
  
  
  }
  export default getNamePokemon;