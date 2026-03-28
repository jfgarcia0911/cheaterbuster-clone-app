import React from "react";
import Image from "next/image";

interface CustomImageProps {
  link?: string | null;
  dimensions: string;
  alt: string
}


export default function CustomImage({ link, dimensions, alt = " " }: CustomImageProps) {
	return (
		<div className={`relative ${dimensions}`}>
			<Image
				src={link || "/pictures.png"}
				fill
        sizes="(max-width: 200px) 100px, 150px"
				priority
				alt={alt}
				className={`object-contain  `}
			/>
		</div>
	);
}
