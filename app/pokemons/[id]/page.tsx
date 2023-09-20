'use client';

import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import { useParams }from "next/navigation";
import Loader from '../../loader';


// import Link from 'next/link';

import Layout from '../../navbar/layout';
import PokemonType from "../../pokemonType/page";
import Stats from "@/app/pokemons/stats/stats";
import { log } from "console";
import { Http2ServerRequest } from "http2";


const Page: NextPage = () => {
    const params = useParams();
    
     const [pokemonData, setPokemonData] = useState([]);
     const [loading, setLoading] = useState(true);

    function findPokemon() {
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${params.id}`)
             .then(response => response.json())
             .then(pokemonData => setPokemonData(pokemonData))
             .catch(error => console.log(error));

    }
    useEffect(() => {
        findPokemon();
        setTimeout(() => {
			setLoading(false)
		}, 1000)  
    }, []);

    if (loading) {
			return  (
				<Loader loading = {loading} />
			)
	}

    const statsArray = [];
    statsArray.push(pokemonData.stats);

    // for (const [key, value] of Object.entries(pokemonData.stats)) {
    //     const statUnique = [];
    //     // statUnique['name'] = key;
    //     statUnique[key] = value;
    //     statsArray.push(statUnique);
    //   }          

    return (
        <>
            <Layout>
                <div className="flex-col mt-8 justify-center">
                    <h1 className ="flex justify-center font-sans text-4xl font-medium">Détails de {pokemonData.name}</h1>
                    <div className="flex my-5 mx-auto" >
                        <img className="w-1/5 mx-auto" src={pokemonData.image} alt={pokemonData.name}/>
                        <div className="w-2/5 flex flex-col">
                            <p className="flex pb-2">#{pokemonData.pokedexId} {pokemonData.name}</p>
                            <PokemonType types={pokemonData.apiTypes} />
                            <h3>Statistiques</h3>
                                <Stats 
                                    statsArray = {statsArray}
                                /> 

                        </div>
                    </div>
                    {/* <Link> Revenir à la liste</Link> */}


                </div>
            </Layout>

        </>
    )
};

export default Page;