import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserAuthForm({ className, ...props } : UserAuthFormProps) {

	const BASE_URL = "http://localhost:9090"

    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        fetch(`${BASE_URL}/users`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                body: body,
                userId: Math.random().toString(36).slice(2),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((post) => {
                setUsers((users) => [user, ...users]);
                setName('');
                setBody('');
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const { toast } = useToast();

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            toast({title: "Account successfully created !", description: "You're now a Catmmander's user", action: (<ToastAction altText="Goto schedule to undo">Undo</ToastAction>),});
        }, 2000)
    };

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Sign In</h1>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">Email</Label>
                        <Input id="email" placeholder="name@example.com" type="name" autoCapitalize="none" autoComplete="off" autoCorrect="off" value={name} disabled={isLoading} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In
                    </Button>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                )}{" "}
                Github
            </Button>
        </div>
    );
};
