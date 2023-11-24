import { useEffect, useState } from "react";

interface Cat {
	id : string,
	name : string,
	color : string
	isAdopted : boolean,
};


export default function Home() {

	const userName = 'Arthur';

	const [cats, setCats] = useState<Cat[]>([]);

	useEffect(() => {
		const fetchCats = async () => {
			const response = await fetch('http://localhost:9090/cats');
			const cats = (await response.json()) as Cat[];
			console.log(cats);
			setCats(cats);
		};

		fetchCats();
	}, []);

	return (

		<section className="page">

			<h1 className="text-3xl">Welcome {userName}, discover your cats :</h1>
			<ul>
				{cats.map((cat) => {
					return <li key={cat.id}>{cat.name} - {cat.color}</li>
				})}
			</ul>

		</section>
  	);

};
