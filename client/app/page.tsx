import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import {
	IconHome,
	IconMessage,
	IconUser,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavMenu } from "@/components/navbar";
import { ContactMe } from "@/components/contact-me";
import { Footer } from "@/components/footer";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";

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
			<div className="flex w-full flex-col items-center pt-5 bg-inherit">
				<NavMenu />
			</div>
			<HeroSection />
			{/* <Experience /> */}
			<Experience />
			<Skills />
			<ContactMe />
			<Footer />
			<BackgroundBeams className="bg-background" />
		</main>
	);
}
