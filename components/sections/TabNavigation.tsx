import React from "react";

export default function TabNavigation() {
	return (
		<div className="flex  justify-center">
			<div className="flex justify-center w-350 mx-5 sm:mx-10 lg:mx-15  ">
				<div className="flex w-full ">
					<div className="w-2/3 py-1 text-center rounded-t-2xl bg-white font-bold text-lg">
						Bust a Cheater
					</div>
					<div className="w-1/3 py-1 text-center rounded-t-2xl bg-brand-red font-bold text-lg text-white mr-4">
						DateSafe Tools
					</div>
				</div>
			</div>
		</div>
	);
}
