import { ChangeEvent, useEffect, useState } from 'react';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardCat } from '@/components/CardCat';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';


interface Cat {
	_id : string,
	name : string,
	color : string
};


export default function Home() {

	const userName = 'Arthur';
	const BASE_URL = "http://localhost:9090"

	const [error, setError] = useState();
	const [cats, setCats] = useState<Cat[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const [name, setName] = useState('');
	const [color, setColor] = useState('');

	const { toast } = useToast();

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
			console.log(newCat);
		  	setCats((prevCats) => [...prevCats, newCat]);

			toast({title: "Cat successfully created !", action: (<ToastAction altText="Goto schedule to undo">Undo</ToastAction>),});

		} catch (e) {
		  	console.log(e);
			toast({title: "Error while cat creation", description: "Try again", action: (<ToastAction altText="Understand">OK</ToastAction>),});
		};
	};

	const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
		switch (e.target.id) {
			case 'name':
				setName(e.target.value);
			break;
			case 'color':
				setColor(e.target.value);
			break;
			default:
			break;
		};
	};

	const fetchCats = async () => {
		setIsLoading(true);

		try {
			const response = await fetch(`${BASE_URL}/cats`);
			const cats = (await response.json()) as Cat[];
			setCats(cats);

			console.log(cats);
		} catch (e : any) {
			setError(e);
		} finally {
			setIsLoading(false);
		};
	};

	useEffect(() => {
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
			<h1 className="text-3xl mb-4">Hello {userName}, meet your (cutes) friends :</h1>
			{cats.length === 0 ? (
      			<p className="page text-xl font-normal">No cats found. Add a new cat?</p>
    		) : (
      			<ul>
        			{cats.map((cat) => {
          				return <CardCat key={cat._id} _id={cat._id} name={cat.name} color={cat.color} onCatDelete={fetchCats} onCatUpdate={fetchCats} />;
        			})}
      			</ul>
    		)}
			<div className="flex-row-center-between gap-3">
				<p className="text-lg">Add a new cat ?</p>
				<Dialog {...Dialog}>
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
							</div>
							<DialogFooter>
									<Button type="submit" onClick={handleCreateCat}>Create</Button>
							</DialogFooter>
						</DialogContent>
    			</Dialog>
			</div>
		</section>
  	);

};

