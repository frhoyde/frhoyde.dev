"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Separator } from "./ui/separator";

export function HeroSection() {
	return (
		<div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-200  text-center font-bold font-sans">
					Hello, <br /> I&apos;m{" "}
					<span className="bg-gradient-to-b text-transparent bg-clip-text from-slate-200 to-slate-800">
						SAZID
					</span>
				</h1>
				<div className="text-slate-300 max-w-lg mx-auto my-2 text-center text-md relative z-10">
					<Separator className="my-4" />
					<div className="flex h-5 items-center space-x-4">
						<div>Software Engineer</div>
						<Separator orientation="vertical" />
						<div>Game Developer</div>
						<Separator orientation="vertical" />
						<div>AI Enthusiast</div>
					</div>
				</div>
			</div>
		</div>
	);
}
