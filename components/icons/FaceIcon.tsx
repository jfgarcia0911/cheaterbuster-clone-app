import React from "react";

export default function FaceIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			{...props}
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M7 3H5a2 2 0 0 0-2 2v2m0 10v2a2 2 0 0 0 2 2h2m10 0h2a2 2 0 0 0 2-2v-2m0-10V5a2 2 0 0 0-2-2h-2"
				></path>
				<circle
					cx="12"
					cy="9"
					r="3"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				></circle>
				<path
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M17 16c0-2.21-2.239-4-5-4s-5 1.79-5 4"
				></path>
			</g>
		</svg>
	);
}
