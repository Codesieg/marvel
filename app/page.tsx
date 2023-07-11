// 'use client';

// import {
// 	QueryClient,
// 	QueryClientProvider,
// 	useQuery,
// } from '@tanstack/react-query';

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// const queryClient = new QueryClient();
// const isReactQueryDevToolEnabled: boolean = true;
// export default function App() {
// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			<Example />
// 			{isReactQueryDevToolEnabled && (
// 				<ReactQueryDevtools initialIsOpen={true} />
// 			)}
// 		</QueryClientProvider>
// 	);
// }

// function Example() {
// 	const { isLoading, error, data } = useQuery({
// 		queryKey: [''],
// 		queryFn: () =>
// 			fetch(
// 				// 'https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=o6GAkUgopwiunWCT'
// 				'https://api.github.com/repos/tannerlinsley/react-query'
// 			).then(res => res.json()),
// 	});

// 	if (isLoading) return 'Loading...';
// 	//@ts-ignore
// 	if (error) return 'An error has occurred: ' + error.message;

// 	return (
// 		<div>
// 			{/* <p>{data.count}</p>
// 			<p>{data.limit}</p> */}
// 			<h1>nom{data.name}</h1>
// 			<p>description{data.description}</p>
// 			<strong>👀 {data.subscribers_count}</strong>
// 			<strong>✨ {data.stargazers_count}</strong>
// 			<strong>🍴 {data.forks_count}</strong>
// 		</div>
// 	);
// }
// 'use client';
// import {
// 	QueryClient,
// 	QueryClientProvider,
// 	useQuery,
// } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// const queryClient = new QueryClient();
// const api_key = 'o6GAkUgopwiunWCT';

// export default function App() {
// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			<Example />
// 			<ReactQueryDevtools initialIsOpen={true} />
// 		</QueryClientProvider>
// 	);
// }

// function Example() {
// 	const { isLoading, error, data } = useQuery({
// 		queryKey: ['data'],
// 		queryFn: () =>
// 			fetch(
// 				// 'https://api.github.com/repos/tannerlinsley/react-query'
// 				'https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=o6GAkUgopwiunWCT',
// 				{
// 					method: 'GET',
// 					credentials: 'include',
// 				}
// 			).then(res => res.json()),
// 	});

// 	if (isLoading) return 'Loading...';
// 	//@ts-ignore
// 	if (error) return 'An error has occurred: ' + error.message;

// 	return (
// 		<div>
// 			<h1>{data.name}</h1>
// 			<p>{data.description}</p>
// 			<strong>👀 {data.subscribers_count}</strong>{' '}
// 			<strong>✨ {data.stargazers_count}</strong>{' '}
// 			<strong>🍴 {data.forks_count}</strong>
// 		</div>
// 	);
// }
// 'https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=o6GAkUgopwiunWCT'
export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { ninjas: data },
	};
};
// @ts-ignore
const Home = ({ ninjas }) => {
	console.log(ninjas);

	return (
		<div>
			<h1>Ninjas</h1>
			{
				//@ts-ignore
				ninjas.map(ninja => (
					<div key={ninja.id}>
						<a>{ninja.name}</a>
					</div>
				))
			}
		</div>
	);
};

export default Home;
