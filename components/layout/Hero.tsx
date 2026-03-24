"use client";
import TopBanner from "../sections/TopBanner";
import HeroTitle from "../sections/HeroTitle";
import TabNavigation from "../sections/TabNavigation";
import ProductHighlights from "../sections/ProductHighlights";
import SearchForm from "../sections/SearchForm";
import { usePathname } from "next/navigation";
import IncludedTools from "../sections/IncludedTools";
import TestimonialSection from "../sections/TestimonialSection";
// Define the allowed path values (same as your Path type)
const pathMap: Record<
	string,
	"home" | "followingai" | "facetrace" | "reverse-phone-lookup"
> = {
	"/": "home",
	"/followingai": "followingai",
	"/facetrace": "facetrace",
	"/reverse-phone-lookup": "reverse-phone-lookup",
};

export default function Hero() {
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
			<TestimonialSection/>
		</>
	);
}
