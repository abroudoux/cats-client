import { useEffect, useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
  } from '@/components/ui/dialog';
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
								<Input id="name" placeholder="What's his name?" className="col-span-3" />
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="color" className="text-right">Color</Label>
								<Input id="color" placeholder="Which color is it?" className="col-span-3" />
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
                            	<Label htmlFor="status" className="text-right">Status</Label>
								<Select>
									<SelectTrigger id="status">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="true">Adopted</SelectItem>
										<SelectItem value="false">Not Adopted</SelectItem>
									</SelectContent>
								</Select>
                        	</div>
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
