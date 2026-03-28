import React from "react";
import FaceIcon from "../icons/FaceIcon";
import CustomImage from "../ui/CustomImage";
import PhoneIcon from "../icons/PhoneIcon";

export default function IncludedTools() {
	return (
		<div className="flex  justify-center mb-15 ">
			<div className="flex justify-center w-350 mx-5 sm:mx-10 lg:mx-15  bg-white  rounded-b-2xl">
				<div className="w-full">
          <div className="w-full mt-2 pb-4">
            <div className="border-t  mx-6"></div>
          </div>
					<div className="flex flex-col lg:flex-row w-ful justify-between lg:items-center px-6 gap-4 pb-4">
						<div className="gap-2 flex items-center lg:items-start flex-row lg:flex-col w-ful ">
							<CustomImage
								link="/date-safe.png"
								dimensions="h-10 w-35 lg:w-55"
                alt="Data Safe Logo"
							/>
							<p className=" text-sm lg:text-xs">
								Also included with your search:
							</p>
						</div>
						<div className="flex flex-wrap items-center w-full gap-2 ">
							<div className="flex-1 flex items-center justify-center space-x-2 border  p-2 rounded-xl border-brand-blue text-brand-blue text-nowrap">
								<FaceIcon className="h-6 w-6 " />
								<h1 className="text-xs font-extrabold">FACE TRACE</h1>
							</div>
							<div className="flex-1 flex items-center justify-center space-x-2 border  p-2 rounded-xl  text-nowrap">
								<PhoneIcon className="h-6 w-6 " />
								<h1 className="text-xs font-extrabold">PHONE SEARCH</h1>
							</div>
							<div className="flex-1 flex items-center justify-center space-x-2 border  p-2 rounded-xl  text-nowrap">
								<FaceIcon className="h-6 w-6 " />
								<h1 className="text-xs font-extrabold">NAME SEARCH</h1>
							</div>
							<div className="flex-1 flex items-center justify-center space-x-2 border p-2 rounded-xl  text-nowrap">
								<FaceIcon className="h-6 w-6 " />
								<h1 className="text-xs font-extrabold">ADDRESS SEARCH</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
