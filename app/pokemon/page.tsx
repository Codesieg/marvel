import React from "react";
import Link from "next/link";

// import PokemonType from "./PokemonType";


const Page = ({pokedexId, name, image, apiTypes}) => {

	return (
			<div className="flex flex-col bg-red-600 rounded-2xl my-5 mx-auto" >
				{/*<PokemonType types={pokemonApiTypes} />*/}
				<Link href="/Pokemon">
					<img className="w-4/5 mx-auto" src={image} alt={name}/>
					<p className="flex justify-center pb-2">#{pokedexId} {name}</p>
				</Link>
			</div>

			)
};

export default Page;