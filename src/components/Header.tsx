import { Link } from 'react-router-dom';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';


export default function Header() {

    return (

        <header className="w-full h-20 border-b-2 px-5 flex-row-center-between">
            <Link to="/">
                <h1 className="font-semibold text-4xl">Catmmander</h1>
            </Link>
            <div className="flex flex-row items-center gap-5">
                <Button><Link to="/cats">Create</Link></Button>
                <Button variant="outline"><Link to="/users">Login</Link></Button>
                <ModeToggle />
            </div>
        </header>

    )
}