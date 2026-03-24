"use client";
import HeroTitle from "@/components/sections/HeroTitle";
import IncludedTools from "@/components/sections/IncludedTools";
import ProductHighlights from "@/components/sections/ProductHighlights";
import SearchForm from "@/components/sections/SearchForm";
import TabNavigation from "@/components/sections/TabNavigation";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TopBanner from "@/components/sections/TopBanner";
import { usePathname } from "next/navigation";

const pathMap: Record<
	string,
	| "home"
	| "followingai"
	| "facetrace"
	| "reverse-phone-lookup"
	| "name-search"
	| "address-search"
> = {
	"/": "home",
	"/followingai": "followingai",
	"/facetrace": "facetrace",
	"/reverse-phone-lookup": "reverse-phone-lookup",
	"/name-search": "name-search",
	"/address-search": "address-search",
};

export default function FollowingAIPage() {
	const pathname = usePathname();
	const current = pathMap[pathname] ?? "home";

	return (
		<>
			<TopBanner activeItem={pathname} />
			<HeroTitle activeItem={current} />
			<TabNavigation activeItem={pathname} />
			<ProductHighlights activeItem={current} />
			<SearchForm activeItem={current} />
			<IncludedTools />
			<TestimonialSection />
		</>
	);
}
