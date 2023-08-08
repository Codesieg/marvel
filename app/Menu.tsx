import React from 'react';

const Menu = () => {
    return (
        <div className="flex justify-between w-4/5 mx-auto bg-slate-50 rounded-full px-3 py-4">
            <h1>Pokédex</h1>
            <ul className="flex ">
                <li>
                    <a>Liste</a>
                </li>
                <li>
                    <a>Types</a>
                </li>
            </ul>
        </div>
    );
};


export default Menu;