import React from "react";

const Pokemons = ({id, name, image, apiTypes}) => {

	const pokemonId = id;
	const pokemonName = name;
	const pokemonImage = image;
	const pokemonApiTypes = apiTypes;

	return (
		<ul className="flex flex-row">
				<div className="flex flex-row">
					<p key={pokemonId} className="container mx-auto px-4 h-40 w-auto">{pokemonName}</p>
					<img className="container mx-auto px-4 h-50 w-auto" src={pokemonImage} alt={pokemonName}/>
					<p>Types : </p>
					{pokemonApiTypes.map(({name, image}) => (
						<ul>
							<li>
								<img className="h-10 w-auto" src={image} alt={name}/>
							</li>
						</ul>
					))}
				</div>
		</ul>
	)
};

export default Pokemons;