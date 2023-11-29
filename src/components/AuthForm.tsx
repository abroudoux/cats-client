import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useStore from '@/lib/store';
import loading from '@/lib/loading';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Icons } from '@/components/ui/icons';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';


export default function AuthForm() {

    const { token, username, signIn, setUsername } = useStore();

    const BASE_URL = "http://localhost:9090";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const { toast } = useToast();

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
		switch (e.target.id) {
			case 'name':
				setName(e.target.value);
			    break;
			case 'email':
				setEmail(e.target.value);
			    break;
            case 'password':
                setPassword(e.target.value);
                break;
			default:
			    break;
		};
	};

    const createUser = async () => {

        setIsLoading(true);
        await loading(2000);

        if (name.length <= 1) {
            toast({title: "Choose a username with 2 characters or more", description: "Please retry" ,action: (<ToastAction altText="Understand">OK</ToastAction>),});
        } else if (email.length <= 1) {
            toast({title: "Choose an email with 2 characters or more", description: "Please retry" ,action: (<ToastAction altText="Understand">OK</ToastAction>),});
        } else if (password.length <= 1) {
            toast({title: "Choose a password with 2 characters or more", description: "Please retry" ,action: (<ToastAction altText="Understand">OK</ToastAction>),});
        } else {
            try {
                const response = await fetch(`${BASE_URL}/users`, {
                    method: 'POST',
                    headers: {
                          'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                  });

                if (response.ok) {
                    navigate("/");
                    setUsername(name);
                    signIn();
                } else {
                    toast({title: "Failed during registrationt", description: "Please retry" ,action: (<ToastAction altText="Understand">OK</ToastAction>),});
                    throw new Error('Failed during registration');
                };

            } catch (error) {
                console.log("Error during registration", error);
                toast({title: "Error during registration", description: "Try again", action: (<ToastAction altText="Understand">OK</ToastAction>),});
            } finally {
                setIsLoading(false);
            };
        };

        setIsLoading(false);
    };

    async function login(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            navigate("/");
        }, 2000)
    };

    if (token) {
        return <div>Welcome to your account {username}</div>
    };

    return (
        <Tabs defaultValue="signin" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="login">Log In</TabsTrigger>
            </TabsList>
                <TabsContent value="signin">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign In</CardTitle>
                            <CardDescription>
                                New here ? Create an account to manage your cats
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input autoComplete="off" id="name" type="text" value={name} placeholder="Your name" onChange={handleChange} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input autoComplete="off" id="email" type="email" value={email} placeholder="Your email" onChange={handleChange} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" value={password} placeholder="Enter a password" onChange={handleChange} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={isLoading} onClick={createUser}>
                                {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Create
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            <form onSubmit={login}>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Log In</CardTitle>
                            <CardDescription>
                                Access your space
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Your email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Enter yout password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={isLoading}>
                                {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Connect
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </form>
        </Tabs>
    );
};