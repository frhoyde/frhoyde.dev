import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import {
	IconHome,
	IconMessage,
	IconUser,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavMenu } from "@/components/navbar";

export default function Home() {
	const navItems = [
		{
			name: "Home",
			link: "/",
			icon: (
				<IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
			),
		},
		{
			name: "About",
			link: "/about",
			icon: (
				<IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
			),
		},
		{
			name: "Contact",
			link: "/contact",
			icon: (
				<IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
			),
		},
	];
	return (
		<main className="flex flex-col">
			<NavMenu />
			<HeroSection />
			<BackgroundBeams />
		</main>
	);
}
