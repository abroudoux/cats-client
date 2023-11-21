import React from 'react';

import CreateCat from '../components/CreateCat';
import { ModeToggle } from '@/components/mode-toggle';


export default function Home() {

	return (

		<section>

			<CreateCat />
			<ModeToggle />

		</section>
  	)

}
