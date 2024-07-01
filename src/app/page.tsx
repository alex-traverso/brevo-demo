import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { handleForm } from "@/actions/handleForm";

export default function HomePage() {
	return (
		<div className="flex items-center justify-center h-screen ">
			<form
				action={handleForm}
				method="POST"
				className="flex flex-col gap-4 w-[30vw]"
			>
				<Input
					name="title"
					type="text"
					placeholder="Email Title"
					className="placeholder:text-gray-300 placeholder:font-light"
				/>
				<Input
					name="to_name"
					type="text"
					placeholder="Write the name of the person you want to send the email to"
					className="placeholder:text-gray-300 placeholder:font-light"
				/>
				<Input
					name="to_email"
					type="email"
					placeholder="Write the email of the person you want to send the email to"
					className="placeholder:text-gray-300 placeholder:font-light"
				/>
				<Textarea
					name="content"
					placeholder="Content"
					className="placeholder:text-gray-300 placeholder:font-light"
				/>
				<Button className="bg-green-500 hover:bg-green-600 transition-all">
					Enviar
				</Button>
			</form>
		</div>
	);
}
