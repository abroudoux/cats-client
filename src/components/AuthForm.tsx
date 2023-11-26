import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Icons } from '@/components/ui/icons';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';


export default function AuthForm() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const { toast } = useToast();

    async function signin(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false)
            toast({title: "Account successfully created !", description: "You're now a Catmmander's user", action: (<ToastAction altText="Goto schedule to undo">Undo</ToastAction>),});
        }, 2000)
    };

    async function login(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            navigate("/");
        }, 2000)
    };

    return (
        <Tabs defaultValue="signin" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="login">Log In</TabsTrigger>
                </TabsList>
                <form onSubmit={signin}>
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
                                    <Input id="name" type="text" placeholder="Your name" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Your email" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" placeholder="Enter a password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Create
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </form>
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