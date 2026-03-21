import React from "react";


type ContainerProps = {
  children: React.ReactNode;
};


export default function Container({ children }: ContainerProps) {
	return (
		<div className="flex  justify-center">
			<div className="flex justify-center w-350 mx-5 sm:mx-10 md:mx-25  bg-white  ">
				{children}
			</div>
		</div>
	);
}
