import { Link } from 'react-router-dom';

import { ModeToggle } from '@/components/config/mode-toggle';
import { Button } from '@/components/ui/button';


export default function Header() {

    return (

        <header className="w-full h-20 border-b-[1px] px-5 fixed top-0 flex-row-center-between">
            <Link to="/">
                <h1 className="font-semibold text-4xl">Cats API</h1>
            </Link>
            <div className="flex flex-row items-center gap-4">
                <Button><Link to="/auth">Login</Link></Button>
                <ModeToggle />
            </div>
        </header>

    );
};