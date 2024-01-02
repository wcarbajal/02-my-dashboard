import getPokemon from "@/helpers/getPokemon";
import { PokemonDetalle } from "@/pokemons/components/PokemonDetalle";

import { Pokemon } from "@/pokemons/interfaces/pokemon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export async function generateStaticParams () {  

  const lista151Pokemones = Array.from({length: 151}).map((v,i)=> `${i+1}`);

  return lista151Pokemones.map( id => ({ id: id }) )

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

    const { id, name } = await getPokemon(params.id);

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

export default async function PokemonIdPage({ params }: Props) {

  const pokemon = await getPokemon(params.id); 


  return (
    <PokemonDetalle pokemon = { pokemon } />
  )
}