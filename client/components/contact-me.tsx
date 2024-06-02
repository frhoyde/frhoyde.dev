"use client";
import pictureOfMe from "../public/pictureOfME.jpg";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	CopyIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "./ui/hover-card";
import { Button } from "./ui/button";

export function ContactMe() {
	const { toast } = useToast();
	const copyText = (text: string) => {
		navigator.clipboard.writeText(text);
		console.log("Link Copied");
		toast({
			title: "Link Copied",
			description: text,
		});
	};
	return (
		<div
			className="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[800px] z-10"
			id="ContactMe"
		>
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">
							Let&#39;s Get in Touch
						</h1>
						<p className="text-balance text-muted-foreground">
							Feel free to reach out to me if you
							have any questions or just want to
							say hi!
						</p>
					</div>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Name</Label>
							<Input
								id="name"
								type="name"
								placeholder="Gustavo Fring"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">
									Thoughts
								</Label>
							</div>
							<Textarea
								id="thoughts"
								placeholder="Your thoughts here..."
								required
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
						>
							Send Message
						</Button>
					</div>

					<div className="flex items-center justify-center mt-10 gap-10">
						<HoverCard>
							<HoverCardTrigger asChild>
								<Button variant="link">
									<a href="https://github.com/frhoyde">
										<GitHubLogoIcon
											width={25}
											height={25}
										/>
									</a>
								</Button>
							</HoverCardTrigger>
							<HoverCardContent className="w-auto">
								<div
									onClick={(e) => {
										copyText(
											"https://github.com/frhoyde"
										);
									}}
									className="flex justify-between space-x-4"
								>
									<Button variant={"ghost"}>
										<CopyIcon />
										@Frhoyde
									</Button>
								</div>
							</HoverCardContent>
						</HoverCard>

						<HoverCard>
							<HoverCardTrigger asChild>
								<Button variant="link">
									<a href="https://www.linkedin.com/in/sazidfarhan/">
										<LinkedInLogoIcon
											width={25}
											height={25}
										/>
									</a>
								</Button>
							</HoverCardTrigger>
							<HoverCardContent className="w-auto">
								<div
									onClick={(e) => {
										copyText(
											"https://www.linkedin.com/in/sazidfarhan/"
										);
									}}
									className="flex justify-between space-x-4"
								>
									<Button variant={"ghost"}>
										<CopyIcon />
										/in/SazidFarhan
									</Button>
								</div>
							</HoverCardContent>
						</HoverCard>

						<HoverCard>
							<HoverCardTrigger asChild>
								<Button variant="link">
									<a href="https://instagram.com/farhan_sazid">
										<InstagramLogoIcon
											width={25}
											height={25}
										/>
									</a>
								</Button>
							</HoverCardTrigger>
							<HoverCardContent className="w-auto">
								<div
									onClick={(e) => {
										copyText(
											"https://www.instagram.com/farhan_sazid"
										);
									}}
									className="flex justify-between space-x-4"
								>
									<Button variant={"ghost"}>
										<CopyIcon />
										@farhan_sazid
									</Button>
								</div>
							</HoverCardContent>
						</HoverCard>

						<a href="#"></a>
					</div>
				</div>
			</div>
			<div className="hidden lg:block">
				<Image
					src={pictureOfMe}
					alt="Picture Of Me"
					className="object-cover dark:brightness-[1] w-[35rem] h-[40rem] border-4 border-neutral-950 rounded-lg"
				/>
			</div>
		</div>
	);
}
