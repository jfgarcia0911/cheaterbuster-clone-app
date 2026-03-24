import { MoveRight } from "lucide-react";
import FaceIcon from "../icons/FaceIcon";

type ActiveItem = "home" | "followingai" | "facetrace" | "reverse-phone-lookup";

// Define the shape of an input field
type InputType = {
  type: string;
  name: string;
  placeholder: string;
};

// Discriminated union for form configurations
type Config =
  | { layout: "1x2"; inputs: InputType[]; buttonText: string; color: string }
  | { layout: "2x1"; inputs: InputType[]; buttonText: string; color: string }
  | { layout: "file"; fileUpload: boolean; buttonText: string; color: string };

interface SearchFormProps {
	activeItem: ActiveItem; // use the exact union type
}

export default function SearchForm({ activeItem }: SearchFormProps) {
	const configMap: Record<ActiveItem, Config> = {
		home: {
			inputs: [
				{
					type: "text",
					name: "first-name",
					placeholder: "Enter first name only.",
				},
			],
			buttonText: "Get Results",
			color: "brand-red",
			layout: "1x2",
		},
		followingai: {
			inputs: [
				{
					type: "text",
					name: "instagram_username",
					placeholder: "@instagram_username",
				},
				{
					type: "text",
					name: "tiktok-username",
					placeholder: "@tiktok_username",
				},
			],
			buttonText: "Analyze Profile",
			color: "brand-yellow",
			layout: "2x1",
		},
		facetrace: {
			fileUpload: true,
			buttonText: "Start Face Search",
			color: "brand-blue",
			layout: "file",
		},
		"reverse-phone-lookup": {
			inputs: [
				{
					type: "text",
					name: "phone-number",
					placeholder: "Enter their phone number.",
				},
			],
			buttonText: "Search",
			color: "brand-gray",
			layout: "1x2",
		},
	};

	// Fallback to home config if activeItem is unknown
	const config = configMap[activeItem] ?? configMap.home;

	const renderForm = () => {
		switch (config.layout) {
			case "1x2":
				return (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="md:col-span-2">
							{config.inputs.map((input, i) => (
								<input
									key={i}
									{...input}
									className="w-full rounded-2xl border border-gray-300 py-4 pl-4 tracking-widest focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition"
								/>
							))}
						</div>
						<button className="flex items-center justify-center gap-2 rounded-xl bg-brand-red/80 py-4 font-bold text-white transition hover:bg-brand-red">
							{config.buttonText} <MoveRight className="h-5 w-5" />
						</button>
					</div>
				);
			case "2x1":
				return (
					<div className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{config.inputs.map((input, i) => (
								<input
									key={i}
									{...input}
									className="w-full rounded-2xl border border-gray-300 py-4 pl-4 tracking-widest focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition"
								/>
							))}
						</div>
						<button className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-yellow/80 py-4 font-bold text-white transition hover:bg-brand-yellow">
							{config.buttonText} <MoveRight className="h-5 w-5" />
						</button>
					</div>
				);
			case "file":
				return (
					<div className="space-y-4">
						<label
							htmlFor="file-input"
							className="flex h-32 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-3 border-dashed  transition hover:border-brand-blue"
						>
							<FaceIcon className="h-10 w-10 text-brand-blue" />
							<span className="text-gray-500">
								Click to start a face search
							</span>
							<input type="file" id="file-input" accept="image/*" hidden />
						</label>
						<button className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue/80 py-4 font-bold text-white transition hover:bg-brand-blue">
							{config.buttonText} <MoveRight className="h-5 w-5" />
						</button>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="flex justify-center ">
			<div className="flex justify-center w-350 mx-5 sm:mx-10 lg:mx-15 bg-white">
				<div className="w-full px-6 py-4">{renderForm()}</div>
			</div>
		</div>
	);
}
