import React from "react";
import Image from "next/image";

interface CustomImageProps {
  link?: string | null;
  dimensions: string
}


export default function CustomImage({ link, dimensions }: CustomImageProps) {
	return (
		<div className={`relative ${dimensions}`}>
			<Image
				src={link || "/picutres.png"}
				fill
        sizes="(max-width: 200px) 100px, 150px"
				priority
				alt="brand logo"
				className={`object-contain   `}
			/>
		</div>
	);
}
