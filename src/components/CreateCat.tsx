import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


export default function CardWithForm() {

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Create cat</CardTitle>
                <CardDescription>Create a new cat</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name of your cat" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="color">Color</Label>
                            <Select>
                                <SelectTrigger id="color">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="orange">Orange</SelectItem>
                                    <SelectItem value="black">Black</SelectItem>
                                    <SelectItem value="white">White</SelectItem>
                                    <SelectItem value="grey">Grey</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    );
};
