import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


export default function Footer() {

    return (
        <footer className="w-full h-20 asbolute fixed bottom-0 border-t-[1px] px-5 flex-row-center-between">
            <p>© 2023-present
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant="link"><a href="https://github.com/abroudoux" target="_blank">@abroudoux</a></Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                            <Avatar>
                                <AvatarImage src="https://avatars.githubusercontent.com/u/115638259?v=4" />
                                <AvatarFallback>AB</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">@abroudoux</h4>
                                <p className="text-sm">
                                    Web Developer, creative coder & cats enjoyer
                                </p>
                                <div className="flex items-center pt-2">
                                    <span className="text-xs text-muted-foreground">
                                        Follow me on Github to see more!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </p>
            <Button variant="outline"><a href="https://github.com/abroudoux/cats-client.git" target="_blank">Source Code<FontAwesomeIcon icon={faGithub} className="pl-2" /></a></Button>
        </footer>
    );
};