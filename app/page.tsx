'use client';

import React, { useEffect, useState } from 'react';
import { StrictMode } from 'react';

import Pokemon from '@/app/pokemons/page';
import Layout from './navbar/layout';
import Loader from './loader';


const Page = () => {
	const [loading, setLoading] = useState(true);
	const [pokemons, setPokemons] = useState([]);

	const apiLoaded = () => {
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}

	function findPokemon() {
		fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100 ')
		.then(response => response.json())
		.then(pokemon => setPokemons(pokemon))
		.catch(error => console.log(error));
	}

	useEffect(() => {
		findPokemon();
		apiLoaded();
	}, []);
	console.log(pokemons);

	if (loading) {
			return  (
				<Loader loading = {loading} />
			)
	}
	return (
		<StrictMode>
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
		</StrictMode>
	)
};

export default Page;