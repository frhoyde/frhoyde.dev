import React from "react";

type Props = {};

import { CardView } from "./ui/Card-View";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
import react from "../public/react.png";
import node from "../public/node.png";
import Js from "../public/Js.png";
import Html from "../public/html.png";
import python from "../public/python.png";
import git from "../public/git.png";
import css from "../public/css.png";
import ts from "../public/ts.png";
import nest from "../public/nest.png";
import prisma from "../public/prisma.svg";
import mongo from "../public/mongo.png";
import postgres from "../public/postgres.png";
import tailwind from "../public/tailwind.png";
import redux from "../public/redux.png";

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

export const Skills = (props: Props) => {
	return (
		<section
			className="z-10 m-15 mb-20 h-[50rem]"
			id="skills"
		>
			<div className="flex items-center justify-center gap-10 mb-10">
				<div className="flex-row items-start justify-between gap-20">
					<h1 className="text-3xl lg:text-4xl bg-gradient-to-b text-transparent bg-clip-text from-slate-200 to-slate-800">
						Expertise
					</h1>
				</div>
			</div>
			<div className="flex gap-5 items-center justify-center ">
				<Image
					src={Html}
					alt="Html"
					className="rounded-lg"
					height={100}
					width={100}
				/>
				<Image
					src={css}
					alt="CSS"
					className="rounded-lg"
					height={120}
					width={120}
				/>
				<Image
					src={Js}
					alt="JavaScript"
					className="rounded-lg"
					height={130}
					width={130}
				/>
				<Image
					src={react}
					alt="React"
					className="rounded-lg"
					height={120}
					width={120}
				/>
				<Image
					src={redux}
					alt="Redux"
					className="rounded-lg"
					height={130}
					width={130}
				/>
				<Image
					src={tailwind}
					alt="Tailwind CSS"
					className="rounded-lg"
					height={150}
					width={150}
				/>
			</div>
			<div className="flex gap-5 items-center justify-center ">
				<Image
					src={nest}
					alt="NestJS"
					className="rounded-lg"
					height={120}
					width={120}
				/>
				<Image
					src={node}
					alt="Node JS"
					className="rounded-lg"
					height={180}
					width={180}
				/>
				<Image
					src={python}
					alt="Python"
					className="rounded-lg"
					height={140}
					width={140}
				/>
				<Image
					src={ts}
					alt="TypeScript"
					className="rounded-lg"
					height={170}
					width={170}
				/>
				<Image
					src={prisma}
					alt="Git"
					className="rounded-lg"
					height={120}
					width={120}
				/>
				<Image
					src={mongo}
					alt="MongoDB"
					className="rounded-lg"
					height={120}
					width={120}
				/>
				<Image
					src={postgres}
					alt="Postgres"
					className="rounded-lg"
					height={120}
					width={120}
				/>
				<Image
					src={git}
					alt="React"
					className="rounded-lg"
					height={110}
					width={110}
				/>
			</div>
		</section>
	);
};
