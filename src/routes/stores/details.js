import { writable } from "svelte/store";

export const details = writable({
	contact: [
		{
			name: "Dwight K. Shrute",
			mail: "dwightshrute@gmail.com",
			phone: "(555) 123-4567",
			website: "shrutefarms.com",
		},
	],
	links: [
		"github.com/dwightshrute",
		"linkedin.com/dwightshrute",
		"twitter.com/dwightshrute",
	],
	skills: [
		"Sales Techniques",
		"Customer Relations",
		"Account Management",
		"Cold Calling",
		"MS Office",
	],

	certifications: [
		"Certified Sales Professional (CSP)",
		"Certified Crop Advisor (CCA)",
		"Crisis Intervention Training (CIT) Certification",
	],

	projects: [
		{
			name: "Beet Master",
			desc: "comprehensive guide for all things beet farming.",
		},
		{
			name: "Sales Warrior",
			desc: "performance tracking system for sales teams.",
		},
		{
			name: "Pranksters Pro",
			desc: "pranks to outwit and outsmart Jim Halpert.",
		},
	],

	interests: [
		"Beets/Agriculture",
		"Marshal Arts",
		"Survival Skills",
		"Outdoor Activities",
		"Hunting/Fishing",
	],

	summary: [
		"I'm a senior paper salesman with a proven track record of managing and growing a substantial client portfolio at Dunder Mifflin, seeking a challenging position that leverages my diverse skillset.",
	],

	experiences: [
		{
			role: " Assistant Regional Manager",
			company: "Dunder Mifflin, Scranton, PA",
			duration: "2010 - Present",
			tasks: [
				"Increased sales and client retention.",
				"Improved customer satisfaction.",
				"Cost savings through streamlined administrative processes.",
			],
			deletable: true,
		},
		{
			role: " Assistant to the Regional Manager",
			company: " Dunder Mifflin, Scranton, PA",
			duration: " 2005 - 2010",
			tasks: [
				"Improved filing system accessibility.",
				"Increased revenue from sales strategies.",
				"Enhanced communication between Regional Manager and staff.",
			],
		},
		{
			role: "Sales Associate",
			company: "Staples, Scranton, PA",
			duration: "2003 - 2005",
			tasks: [
				"Exceeded sales targets consistently.",
				"High customer satisfaction and repeat business.",
				"Recognition for outstanding performance.",
			],
		},
	],

	education: [
		{
			degree: "B.Sc in Agriculture (Honors)",
			institute: "Scranton University, Scranton",
			duration: "2003",
		},
	],
});
