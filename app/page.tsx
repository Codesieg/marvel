'use client';

import React, { useEffect, useState } from 'react';
import Pokemon from './pokemon/page';
import Menu from "./Menu";
const Page = () => {
	const [pokemons, setPokemon] = useState([]);

	function findPokemon() {
		fetch('https://pokebuildapi.fr/api/v1/pokemon')
		.then(response => response.json())
		.then(pokemon => setPokemon(pokemon))
		.catch(error => console.log(error));
	}
	
	useEffect(() => {
		findPokemon();
	}, []);
	console.log(pokemons);

	return (
		<>
			<Menu />
			<div className="flex flex-row flex-wrap w-11/12 mx-auto">
				{pokemons.map(({pokedexId, name, image, apiTypes}) => (
					<Pokemon
						key={pokedexId}
						pokedexId={pokedexId}
						name={name}
						image={image}
						apiTypes={apiTypes}
					/>
				))}
			</div>
		</>
	)
};

export default Page;