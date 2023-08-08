import React from "react";

// import PokemonType from "./PokemonType";

const Page = ({pokedexId, name, image, apiTypes}) => {

	return (
		<div className="flex mx-auto w-auto items-center bg-red-600 rounded-lg my-1" >
				<div className="">
					{/*<PokemonType types={pokemonApiTypes} />*/}
					<img className="w-3/4 mx-auto" src={image} alt={name}/>
					<p className="flex justify-center pb-2">#{pokedexId} {name}</p>
				</div>
		</div>
	)
};

export default Page;