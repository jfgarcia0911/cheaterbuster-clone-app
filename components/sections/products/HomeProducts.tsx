import EChartsIcon from "@/components/icons/EchartsIcon";
import Container from "@/components/ui/Container";
import React from "react";
import { Anton } from "next/font/google";
import Image from "next/image";
import FireIcon from "@/components/icons/FireIcon";

const roboto = Anton({ weight: "400", subsets: ["latin"] });

export default function HomeProducts() {
	return (
		<Container className="mb-10 text-white">
			<div className="w-full flex flex-col gap-4 flex-wrap">
				<div>
					<h1 className="font-bold text-3xl mb-1 ">What you&apos;ll get</h1>
					<p className="text-white/70">Products included with your payment:</p>
				</div>
				{/* Card */}
				<article className="relative rounded-4xl py-8 px-10 bg-[rgba(36,38,43,0.5)] overflow-hidden ">
					<div className="absolute bottom-0 right-0 h-[175%] w-[150%] bg-[radial-gradient(circle,rgba(255,46,41,0.5)_0%,rgba(0,0,0,0)_46%)] md:right-[10%]"></div>
					<h2
						className={` ${roboto.className} flex items-center gap-2 text-2xl text-red-500`}
					>
						{" "}
						<EChartsIcon className="w-10 h-10" /> DATING APP SEARCH{" "}
					</h2>
					<p className={`font-extrabold text-red-500 `}>AI DATING APP SEARCH</p>
					<div className="flex flex-col gap-4 lg:flex-row md:justify-between">
						<div className="basis-[35%] space-y-4 mt-4">
							<p className="tracking-wider brightness-90">
								Search from millions of profiles by{" "}
								<span className="brightness-120 font-bold">name, face</span> and
								location. Get
								<span className="brightness-120 font-bold">
									{" "}
									recent dating app activity,
								</span>{" "}
								new profiles created, location changes, changes in bio, pics,
								etc.
							</p>
							<ul className="flex flex-col gap-4 ">
								<li className="px-4 py-3 tracking-tight border rounded-3xl">
									<span className="block brightness-150  text-xl font-bold">
										SECRET PROFILES{" "}
									</span>
									& Activity on the app
								</li>
								<li className="px-4 py-3 tracking-tight border rounded-3xl">
									<span className="block brightness-150  text-xl font-bold">
										SECRET PROFILES{" "}
									</span>
									& Activity on the app
								</li>
								<li className="px-4 py-3 tracking-tight border rounded-3xl">
									<span className="block brightness-150  text-xl font-bold">
										SECRET PROFILES{" "}
									</span>
									& Activity on the app
								</li>
							</ul>
							<p>
								🤯 People with 3+ dating profiles are 42% more likely to be
								actively cheating.
							</p>
						</div>
						<div className="my-1 flex w-full justify-between">
							<Image
								src="/info-card-1.webp"
								width="160"
								height="200"
								priority
								className="w-[30%] object-contain"
								alt="Info card"
							/>
							<Image
								src="/info-card-2.webp"
								width="160"
								height="200"
								priority
								className="w-[32%] object-contain"
								alt="Info card"
							/>
							<Image
								src="/info-card-3.webp"
								width="160"
								height="200"
								priority
								className="w-[32%] object-contain"
								alt="Info card"
							/>
						</div>
					</div>
				</article>
				<article className="relative rounded-4xl px-10 overflow-hidden w-[49%]">
          <div className="absolute -right-[16%] bottom-0 h-[175%] w-[150%] bg-[radial-gradient(circle,rgba(237,175,73,0.5)_0%,rgba(0,0,0,0)_60%)]"></div>
					<div>
            <h2
						className={` ${roboto.className} flex items-center gap-2 text-2xl text-yellow-500`}
					>
						<FireIcon className="w-6 h-10" />  FOLLOWING AI
					</h2>
          </div>
				</article>
			</div>
		</Container>
	);
}
