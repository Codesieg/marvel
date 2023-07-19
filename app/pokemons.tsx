import React, { useEffect, useState } from 'react';
import pag

const pokemons = () => {
    const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/')
		.then(response => response.json())
		.then(pokemons => setPokemons(pokemons.results))
		.catch(error => console.log(error));
	}, []);

	return (
		<div >
			<ul>
				{pokemons.map(({ index, name, url }) => (
					<div key={index}>
						<Page
							name={name}
							url={url}
						/>
						
					</div>
				))}
			</ul>
		</div>
	)
};

export default pokemons;