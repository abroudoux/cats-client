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
	isAdopted : boolean,
};


export default function Home() {

	const userName = 'Arthur';
	const BASE_URL = "http://localhost:9090"

	const [error, setError] = useState();
	const [cats, setCats] = useState<Cat[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		color: '',
		// isAdopted: false,
	});

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

	const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
		const { name, value, type, checked } = e.target;
		const fieldValue = type === 'checkbox' ? checked : value;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: fieldValue,
		}));
	};

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		try {
			const response = await fetch(`${BASE_URL}/cats`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Cat created successfully');
			} else {
				console.error('Failed to create cat');
			}

		} catch (error) {
			console.error('An error occurred', error);
		};
	};

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
					return <CardCat id={cat.id} name={cat.name} color={cat.color} isAdopted={cat.isAdopted} />
				})}
			</ul>
			<div className="flex-row-center-between gap-3">
				<p className="text-lg">Add a new cat ?</p>
				<Dialog>
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
								<Input id="name" placeholder="What's his name?" className="col-span-3" value={formData.name} onChange={handleChange} />
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="color" className="text-right">Color</Label>
								<Input id="color" placeholder="Which color is it?" className="col-span-3" value={formData.color} onChange={handleChange} />
							</div>
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
          					<Button type="submit">Create</Button>
        				</DialogFooter>
      				</DialogContent>
    			</Dialog>
			</div>

		</section>
  	);

};

