'use client';


import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import { useParams }from "next/navigation";
import Layout from '../../navbar/layout';

// import PokemonType from "./PokemonType";


const Page: NextPage = () => {
    const params = useParams();
    const [pokemon, setPokemon] = useState([]);

    console.log(params.id);
    function findPokemon() {
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${params.id}`)
            .then(response => response.json())
            .then(pokemon => setPokemon(pokemon))
            .catch(error => console.log(error));
    }
    useEffect(() => {
        findPokemon();
    }, []);
    console.log(pokemon);

    return (
        <>
            <Layout>
                <div className="flex flex-col bg-red-600 w-32 rounded-2xl my-5 mx-auto" >
                    {/*<PokemonType types={pokemonApiTypes} />*/}
                        <img className="w-4/5 mx-auto" src={pokemon.image} alt={pokemon.name}/>
                        <p className="flex justify-center pb-2">#{pokemon.pokedexId} {pokemon.name}</p>
                </div>
            </Layout>

        </>
    )
};

export default Page;