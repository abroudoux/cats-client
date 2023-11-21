import { Button } from "./ui/button";

export default function Footer() {

    return (
        <footer className="w-full h-20 border-t-2 px-5 flex-row-center-between">
            <p>© 2023-present @abroudoux</p>
            <Button variant="outline"><a href="https://github.com/abroudoux/cats-client.git" target="_blank">Source Code</a></Button>
        </footer>
    );
};