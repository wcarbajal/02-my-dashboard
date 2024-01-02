


import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-respons";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";
import Image from "next/image";


const getPokemons = async ( limit= 20, offset = 0):Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
    .then(response => response.json())
    
    const pokemonsSimple = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));
    
   // throw notFound();
    return pokemonsSimple;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);
    
  return (
    <div className="flex flex-col">
      <span className="text-5xl mt-4 mb-8">Listado de Pokemons <small>estático</small></span>

      <PokemonGrid pokemons= {pokemons}/>

    </div>
  );
}