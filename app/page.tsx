import React from 'react';

const page = () => {
	const [pokemon, setPokemon] = useState([]);

	function findPokemon(url) {
		fetch(url)
		.then(response => response.json())
		.then(pokemon => setPokemon(pokemon))
		.catch(error => console.log(error));
	}
	
	useEffect(() => {
		findPokemon();
	}, []);
	console.log(pokemon);

	function handleClick(plantName) {
		alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
	}

	return (
		<li  onClick={() => findPokemon(url)}>
			<img src={url} alt={`${name} cover`} />
			<span> {name}</span>
			<div>
			</div>
		</li>
	)
};

export default page;