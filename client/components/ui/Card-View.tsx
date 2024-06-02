import {
	BellIcon,
	CheckIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface CardProps {
	className?: string;
	companyname: string;
	jobtitle: string;
	description: {
		title: string;
		description: string[];
	}[];
}
export function CardView({
	className,
	...props
}: CardProps) {
	return (
		<Card
			className={cn("w-[500px]", className)}
			{...props}
		>
			<CardHeader>
				<CardTitle className="tracking-wide leading-relaxed">
					{props.jobtitle}
				</CardTitle>
				<CardDescription>
					{props.companyname}
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div>
					{props.description.map((des, index) => (
						<div
							key={index}
							className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
						>
							<span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
							<div className="space-y-1">
								<p className="text-sm leading-relaxed tracking-wide mb-7 text-zinc-300">
									{des.title}
								</p>
								{des.description.map(
									(descr, index) => (
										<div
											key={index}
											className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
										>
											<span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-800" />
											<p className="text-sm text-muted-foreground">
												{descr}
											</p>
										</div>
									)
								)}
							</div>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
}
