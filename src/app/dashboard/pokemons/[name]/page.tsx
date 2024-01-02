import getNamePokemon from "@/helpers/getNamePokemon";
import getPokemon from "@/helpers/getPokemon";
import getPokemonName from "@/helpers/getPokemonName";
import { PokemonDetalle } from "@/pokemons/components/PokemonDetalle";
import { Metadata } from "next";

interface Props {
  params: { name: string };
}

export async function generateStaticParams () {  

  const lista151Pokemones = Array.from({length: 151}).map((v,i)=> getNamePokemon(i+1));
  
  return lista151Pokemones.map((v,i)=> ({name: v}));
  // return[
  //   { id: '1'},
  //   { id: '2'},
  //   { id: '3'},
  //   { id: '4'},
  //   { id: '5'},
  //   { id: '6'},

  // ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  try {

    const { id, name } = await getPokemonName(params.name);

    return {
      title: `#${id} - ${name}`,
      description: `Página del pokemon ${name}`
    }


  } catch (error) {
    return {
      title: 'Página de pokemon',
      description: 'Página del Pokemon'
    }
  }
}

export default async function PokemonNamePage({ params }: Props) {

  const pokemon = await getPokemonName(params.name); 


  return (
    <PokemonDetalle pokemon = { pokemon } />
  )
}