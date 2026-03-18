import React from "react";
import Image from "next/image";

interface CustomImageProps {
  link?: string;
  dimensions: string
}


export default function CustomImage({ link, dimensions }: CustomImageProps) {
	return (
		<div className={`relative ${dimensions}`}>
			<Image
				src={link || "/picutres.png"}
				fill
				priority
				alt="brand logo"
				className={`object-contain   `}
			/>
		</div>
	);
}
