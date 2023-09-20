'use client';


import React from "react";
import Link from "next/link";
import {NextPage} from "next";

// import PokemonType from "./PokemonType";


const Pokemons: NextPage = ({pokedexId, name, image, apiTypes}) => {

	return (
			<div className="flex flex-col bg-red-600 rounded-2xl my-5 mx-auto" >
				<Link href= {`/pokemons/${pokedexId}`}>
					<img className="w-4/5 mx-auto" src={image} alt={name}/>
					<p className="flex justify-center pb-2">#{pokedexId} {name}</p>
				</Link>
			</div>
	)
};

export default Pokemons;