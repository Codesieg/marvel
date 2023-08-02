import React from "react";

import PokemonType from "./PokemonType";

const Pokemons = ({id, name, image, apiTypes}) => {

	const pokemonId = id;
	const pokemonName = name;
	const pokemonImage = image;
	const pokemonApiTypes = apiTypes;

	// console.log(pokemonApiTypes)

	return (
		<ul className="flex mx-auto">
				<div className="">
					<PokemonType types={pokemonApiTypes} />
					<img className="container mx-auto px-4 h-50 w-auto" src={pokemonImage} alt={pokemonName}/>
					<p key={pokemonId} className="flex mx-auto px-4 h-40 w-auto">{pokemonName}</p>
				</div>
		</ul>
	)
};

export default Pokemons;