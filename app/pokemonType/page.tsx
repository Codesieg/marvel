import React from 'react';

const Page = ({types}) => {
    return (
        <div className="flex mx-auto">
            {types.map(({name, image}) => (
                <ul>
                    <li>
                        <img className="h-10 w-auto" src={image} alt={name}/>
                    </li>
                </ul>
            ))}
        </div>
    )
};

export default Page;