import { Link } from 'react-router-dom';
import { DashboardIcon, GitHubLogoIcon, EnterIcon, ExitIcon } from '@radix-ui/react-icons';

import { ModeToggle } from '@/components/config/mode-toggle';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTokenStore } from "@/lib/store";


export default function Header() {

    const { token, signIn, signOut } = useTokenStore();

    return (
        <header className="w-full h-20 border-b-[1px] px-5 fixed top-0 flex-row-center-between">
            <Link to="/">
                <h1 className="font-semibold text-4xl">Cats API</h1>
            </Link>
            <div className="flex flex-row items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button>
                            {token ?
                                'Arthur' : 'Connect'
                            }
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            {token ?
                                'Your Account' : 'Menu'
                            }
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {token ?
                            <>
                                <DropdownMenuItem>
                                    <p className="flex-row-center-between gap-1" onClick={signOut}><EnterIcon/>Sign Out</p>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link to="/" className="flex-row-center-between gap-1"><DashboardIcon/>Dashboard</Link>
                                </DropdownMenuItem>
                            </>
                            :
                            <DropdownMenuItem>
                                <p className="flex-row-center-between gap-1" onClick={signIn}><ExitIcon/>Sign In</p>
                            </DropdownMenuItem>
                        }
                        <DropdownMenuItem>
                            <a href="https://github.com/abroudoux/cats-client" className="flex-row-center-between gap-1" target="_blank"><GitHubLogoIcon/>Github</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <ModeToggle />
            </div>
        </header>
    );
};

