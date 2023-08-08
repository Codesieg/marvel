'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/app/navbar/layout';
import Link from "next/link";


const Page = () => {
    const [types, setTypes] = useState([]);

    function findTypes() {
        fetch('https://pokebuildapi.fr/api/v1/types')
            .then(response => response.json())
            .then(type => setTypes(type))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        findTypes();
    }, []);
    console.log(types);

    return (
        <Layout>
            <div className="flex flex-row flex-wrap justify-center w-11/12 mx-auto">
                {types.map(({id, name, image,}) => (
                    <ul className="flex">
                        <li key={id} className="flex flex-col mx-auto w-auto items-center my-1" >
                            <Link href="#">
                                <img className="w-3/4 mx-auto" src={image} alt={name}/>
                                <p className= "flex justify-center">{name}</p>
                            </Link>
                        </li>
                    </ul>
                ))}
            </div>
        </Layout>
    )
};

export default Page;