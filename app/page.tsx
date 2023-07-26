'use client';
import React, { useEffect, useState } from 'react';

async function fetchPokemonData() {
	const apiUrl = 'https://pokebuildapi.fr/api/v1/pokemon';

	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
}

export default function Page() {
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await fetchPokemonData();
			setPokemonData(data);
		}
		fetchData();
	}, []);

	// Afficher les données une fois qu'elles sont disponibles
	if (!pokemonData) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Liste des Pokémons</h1>
			<ul>
				{pokemonData.map(pokemon => (
					<div key="pokemon.id">
						<li>{pokemon.name}</li>
						<img src={pokemon.image} />
					</div>
				))}
			</ul>
		</div>
	);
}
