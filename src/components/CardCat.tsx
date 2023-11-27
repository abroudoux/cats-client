import React, { FC, useState } from 'react';

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Loader2 } from 'lucide-react';
import loading from '@/lib/loading';
import { Icons } from './ui/icons';


type CardCatProps = {
    _id : string;
    name : string;
    color : string;
    onCatDelete : () => void;
    onCatUpdate : () => void;
};

interface CatUpdated {
	name ? : string,
	color ? : string
};


export const CardCat : FC<CardCatProps> = ( props ) => {

    const BASE_URL = "http://localhost:9090";

    const { toast } = useToast();

    const [error, setError] = useState();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const [catData, setCatData] = useState({
        name : '',
        color : '',
    });

    const [catDataUpdated, setCatDataUpdated] = useState({
        name : '',
        color : '',
    });

    const handleDelete = async () => {

        setIsDeleting(true);
        await loading(2000);

        try {
            const response = await fetch(`${BASE_URL}/cats/${props._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                props.onCatDelete();
                toast({title: "Cat successfully deleted !", action: (<ToastAction altText="Goto schedule to undo">OK</ToastAction>)});
            } else {
                toast({title: "Failed to delete cat", action: (<ToastAction altText="Understand">OK</ToastAction>)});
                throw new Error('Failed to delete cat');
            };

        } catch (error) {
            console.log("Error during cat deletion", error)
            toast({title: "Error during cat deletion", action: (<ToastAction altText="Goto schedule to undo">Undo</ToastAction>),});
        } finally {
            setIsDeleting(false);
        };
    };

    const handleSheetOpen = async () => {

        setIsLoading(true);
        await loading(1000);

        try {
            const response = await fetch(`${BASE_URL}/cats/${props._id}`);

            setIsUpdating(true);

            if (response.ok) {
                setIsLoading(false);
                const catData = await response.json();
                setCatData(catData);
                console.log(catData)
            } else {
                setIsUpdating(false);
                toast({title: "Failed to update cat", action: (<ToastAction altText="Understand">OK</ToastAction>)});
            };

        } catch (error) {
            console.error('Error fetching cat data', error);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleUpdate = async () => {

        setIsUpdating(true);
        await loading(2000);

        try {
            const response = await fetch(`${BASE_URL}/cats/${props._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(catDataUpdated),
            });

            if (response.ok) {
                setCatData({ ...catData, ...catDataUpdated });
                props.onCatUpdate();
                toast({ title: "Cat updated successfully", action: (<ToastAction altText="Goto schedule to undo">Undo</ToastAction>) });
            } else {
                toast({ title: "Error during cat update", action: (<ToastAction altText="Understand">OK</ToastAction>) });
                throw new Error('Failed to update cat');
            };

            console.log(catDataUpdated);
        } catch (error) {
            console.log("Error during cat update", error);
            toast({title: "Error while cat update", description: "Try again", action: (<ToastAction altText="Understand">OK</ToastAction>),});
        } finally {
            setIsUpdating(false);
        };

    };


    return (
        <li className="rounded-lg my-6 border-grey-light border-[1px] flex-row-center-between py-3 px-5 w-96" key={ props._id || 'defaultKey' }>
            <ul className="flex-col-center-between">
                <li className="text-2xl font-normal">{ props.name }</li>
                <li className="font-light text-base">Color : { props.color }</li>
            </ul>
            <ul className="flex-row-center-center gap-3">
                <li className="cursor-pointer">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" onClick={handleSheetOpen} disabled={isUpdating || isDeleting}>
                                {isUpdating ?
                                    <Icons.spinner className="h-4 w-4 animate-spin" /> 
                                    :
                                    '🔎'
                                }
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Edit cat</SheetTitle>
                                <SheetDescription>
                                    Make changes to your cat here.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4 h-10">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    {isLoading ? 
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> 
                                        :
                                        <Input id="name" className="col-span-3" defaultValue={catData.name} onChange={(e) => setCatDataUpdated({ ...catDataUpdated, name: e.target.value })}/>
                                    }
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4 h-10">
                                    <Label htmlFor="color" className="text-right">
                                        Color
                                    </Label>
                                    {isLoading ? 
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> 
                                        :
                                        <Input id="color" className="col-span-3" defaultValue={catData.color} onChange={(e) => setCatDataUpdated({ ...catDataUpdated, color: e.target.value })}/>
                                    }
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit" onClick={handleUpdate}>
                                        {isUpdating && (
											<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
										)}
                                        {isUpdating ? 'Updating..' : 'Update'}

                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </li>
                <li className="cursor-pointer">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline" className="flex-col-center-center" size="icon" disabled={isDeleting || isUpdating}>
                                {isDeleting ?
                                    <Icons.spinner className="h-4 w-4 animate-spin" /> 
                                    :
                                    '❌'
                                }
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your (beautiful) cat.
                                    </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => setIsDeleting(false)}>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>
                                    {isDeleting && (
											<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
										)}
                                    {isDeleting ? 'Deleting...' : 'Delete'}
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </li>
            </ul>
        </li>
    );
};
