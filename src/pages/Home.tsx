import { useEffect, useState } from 'react';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardCat } from '@/components/CardCat';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


interface Cat {
	id : string,
	name : string,
	color : string
	// isAdopted : boolean,
};


export default function Home() {

	const userName = 'Arthur';
	const BASE_URL = "http://localhost:9090"

	const [error, setError] = useState();
	const [cats, setCats] = useState<Cat[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const [name, setName] = useState('');
	const [color, setColor] = useState('');

	const handleCreateCat = async () => {
		try {
			const response = await fetch(`${BASE_URL}/cats`, {
				method: 'POST',
				headers: {
			  		'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, color }),
		  	});

		  	if (!response.ok) {
				throw new Error('Failed to create cat');
		  	};

		  	const newCat = (await response.json()) as Cat;
		  	setCats((prevCats) => [...prevCats, newCat]);
		} catch (e) {
		  	console.log(e);
		};
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		switch (event.target.id) {
			case 'name':
			setName(event.target.value);
			break;
			case 'color':
			setColor(event.target.value);
			break;
			default:
			break;
		}
	};

	useEffect(() => {
		const fetchCats = async () => {
			setIsLoading(true);

			try {
				const response = await fetch(`${BASE_URL}/cats`);
				const cats = (await response.json()) as Cat[];
				setCats(cats);
			} catch (e : any) {
				setError(e);
			} finally {
				setIsLoading(false);
			};
		};

		fetchCats();
	}, []);

	if (isLoading) {
		return <div className="page">Loading ...</div>
	};

	if (error) {
		return <div className="page">Something went wrong! Please try again</div>
	};

	return (

		<section className="page">

			<h1 className="text-3xl mb-4">Welcome {userName}, meet your (cutes) friends :</h1>
			<ul>
				{cats.map((cat) => {
					return <CardCat id={cat.id} name={cat.name} color={cat.color} />
				})}
			</ul>
			<div className="flex-row-center-between gap-3">
				<p className="text-lg">Add a new cat ?</p>
				<Dialog>
					{/* <form onSubmit={handleSubmit}> */}
						<DialogTrigger asChild>
							<Button variant="outline">Create</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>Create a new cat</DialogTitle>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-right">Name</Label>
									<Input id="name" placeholder="What's his name?" className="col-span-3" value={name} onChange={handleChange} />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="color" className="text-right">Color</Label>
									<Input id="color" placeholder="Which color is it?" className="col-span-3" value={color} onChange={handleChange} />
								</div>
								{/* <div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="isAdopted" className="text-right">Status</Label>
									<Input id="isAdopted" placeholder="Which color is it?" className="col-span-3" value={formData.isAdopted} onChange={handleChange} />
								</div> */}
								{/* <div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="status" className="text-right">Status</Label>
									<Select>
										<SelectTrigger id="status">
											<SelectValue placeholder="Select" />
										</SelectTrigger>
										<SelectContent position="popper" value={checked.isAdopted} onChange={handleChange}>
											<SelectItem value="true">Adopted</SelectItem>
											<SelectItem value="false">Not Adopted</SelectItem>
										</SelectContent>
									</Select>
								</div> */}
							</div>
							<DialogFooter>
								<Button type="submit" onClick={handleCreateCat}>Create</Button>
							</DialogFooter>
						</DialogContent>
					{/* </form> */}
    			</Dialog>
			</div>

		</section>
  	);

};

