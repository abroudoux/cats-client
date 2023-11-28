import { Button } from '@/components/ui/button';
import Dashboard from '@/components/Dashboard';
import { useStore } from "@/lib/store";


export default function Home() {

	const { token, signIn } = useStore();

	if (!token) {
		return (
			<section className="page flec-col-center-center gap-10">
				<h1 className="text-2xl max-w-xs text-center">To start managing chats, sign in or create an account</h1>
				<Button onClick={signIn}>Sign In</Button>
			</section>
		);
	};

	return (
		<Dashboard />
  	);

};

