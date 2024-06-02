"use client";
import React from "react";

type Props = {};

import { CardView } from "./ui/Card-View";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const jobs = [
	{
		title:
			"Leading a small team of developers on a project designed for educational institutions based on legacy codebase.",
		description: [
			"Refactored legacy codebase to increase modularity and solved existing issues.",
			"Restructured 4 modules and implemented 8+ new modules to address specific requirements.",
			"Co-designed database schema and API in NestJs and Prisma.",
			"Worked with agile development methods.",
			"Reviewed code on github based on company defined conventions.",
		],
	},
	{
		title:
			"Worked on multiple projects as a full stack developer.",
		description: [
			"Implemented a template managing module using state management from Redux-toolkit.",
		],
	},
];

const jobs2 = [
	{
		title:
			"Worked on BinduHealth as a full stack developer.",
		description: [
			"Worked on implementing new features in prescription module.",
			"Reported 3+ issues and provided them with optimal solutions.",
			"Created 3 core reusable components along with documentation.",
		],
	},
	{
		title:
			"Conducted R&D on International Classification of Diseases - 11 API",
		description: [
			"Created a Scraper Script to scrape, flatten and format the ICD codes to as per the requirement.",
			"Implemented database seeders that seeds information for the ICD codes into the database.",
		],
	},
];

export const Experience = (props: Props) => {
	return (
		<section
			className="z-10 h-[60rem]"
			id="resume"
		>
			<div className="flex items-center justify-center gap-10">
				<div className="flex-row items-start justify-between gap-20">
					<h1 className="text-3xl lg:text-4xl bg-gradient-to-b text-transparent bg-clip-text from-slate-200 to-slate-800">
						Experience
					</h1>
					<div className="mt-10">
						<HoverBorderGradient
							containerClassName="rounded-full"
							as="button"
							className="dark:bg-slate-800 bg-white text-black dark:text-white flex items-center space-x-2"
						>
							<span>
								<a
									onClick={() => {
										window.open(
											"/Sazid-Abdullah-Farhan-Resume.pdf",
											"_blank"
										);
									}}
									download
								>
									Download Resume
								</a>
							</span>
						</HoverBorderGradient>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center gap-20">
				<CardView
					className="m-10"
					jobtitle="Junior Software Engineer"
					companyname="Bindulogic Limited"
					description={jobs}
				/>
				<CardView
					className="m-10"
					jobtitle="Software Engineering Intern"
					companyname="Bindulogic Limited"
					description={jobs2}
				/>
			</div>
		</section>
	);
};
