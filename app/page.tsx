'use client';

import React, { useEffect, useState } from 'react';
import Pokemon from './pokemon/page';
import Layout from './navbar/layout';


const Page = () => {
	// const [loading, setLoading] = useState(true);
	const [pokemons, setPokemon] = useState([]);

	// const apiLoaded = () => {
	// 	setTimeout(() => {
	// 		setLoading(false)
	// 	}, 5000)
	// }

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

	// if (loading) {
	// 	return <Loading />
	// }
	return (
			<Layout>
				<div className="flex flex-row flex-wrap justify-between w-11/12 mx-auto">
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
			</Layout>
	)
};

export default Page;