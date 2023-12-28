import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-respons";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";

const getPokemons = async ( limit= 20, offset = 0):Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
    .then(response => response.json())
    
    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    })
    )
    return pokemons;
}

export default async function PokemonsPage() {

    const respuesta = await getPokemons(151);
    
  return (
    <div>
      <h1>Pokemons Page</h1>
      { JSON.stringify(respuesta) }
    </div>
  );
}