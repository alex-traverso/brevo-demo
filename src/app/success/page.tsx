import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
	return (
		<div className="flex flex-col gap-y-4 items-center justify-center h-screen">
			<h1 className="text-3xl font-bold">Formulario enviado con exito</h1>
			<Link href="/" className="bg-green-500 hover:bg-green-600 transition-all">
				<Button>Volver al inicio</Button>
			</Link>
		</div>
	);
}
