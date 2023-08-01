'use client';

import React, { useEffect, useState } from 'react';
import Pokemons from './Pokemons';

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
		<div className="flex flex-row">
			{pokemons.map(({id, name, image, apiTypes}) => (
				<Pokemons
					key={id}
					name={name}
					image={image}
					apiTypes={apiTypes}
				/>
			))}
		</div>
	)
};

export default Page;