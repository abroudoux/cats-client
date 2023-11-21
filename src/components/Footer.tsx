import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@/components/ui/button';


export default function Footer() {

    return (
        <footer className="w-full h-20 border-t-2 px-5 flex-row-center-between">
            <p>© 2023-present <a href="https://github.com/abroudoux" target="_blank">@abroudoux</a></p>
            <Button variant="outline"><a href="https://github.com/abroudoux/cats-client.git" target="_blank">Source Code<FontAwesomeIcon icon={faGithub} className="pl-2" /></a></Button>
        </footer>
    );
};