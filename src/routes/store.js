import { writable } from 'svelte/store';

export const superset = writable({
	skills: [
		'Sales Techniques',
		'Customer Relations',
		'Account Management',
		'Cold Calling',
		'MS Office'
	],

	certifications: [
		'Certified Sales Professional (CSP)',
		'Certified Crop Advisor (CCA)',
		'Crisis Intervention Training (CIT) Certification'
	],

	projects: [
		{ name: 'beetmaster', desc: 'comprehensive guide for all things beet farming.' },
		{ name: 'salesWarrior', desc: 'performance tracking system for sales teams.' },
		{
			name: 'pranksters-paradise',
			desc: 'pranks to outwit and outsmart Jim Halpert.'
		}
	],

	interests: [
		'Beets / Agriculture',
		'Marshal Arts',
		'Survival Skills',
		'Outdoor Activities',
		'Hunting / Fishing'
	],

	summary: [
		"I'm a senior paper salesman with a proven track record of managing and growing a substantial client portfolio at Dunder Mifflin, seeking a challenging position that leverages my diverse skillset."
	],

	experiences: [
		{
			role: ' Assistant Regional Manager',
			company: 'Dunder Mifflin, Scranton, PA',
			duration: '2010 - Present',
			summary:
				'I support the Regional Manager in daily operations, strategic planning, customer service, employee training, and administrative streamlining, resulting in improved sales, satisfaction, and cost efficiency.',
			tasks: [
				'Increased sales and client retention.',
				'Improved customer satisfaction.',
				'Cost savings through streamlined administrative processes.'
			]
		},
		{
			role: ' Assistant to the Regional Manager',
			company: ' Dunder Mifflin, Scranton, PA',
			duration: ' 2005 - 2010',
			summary:
				'Implemented efficient filing system for improved accessibility and document retrieval. Assisted in developing and executing sales strategies for increased revenue and market share.',
			tasks: [
				'Improved filing system accessibility.',
				'Increased revenue from sales strategies.',
				'Enhanced communication between Regional Manager and staff.'
			]
		},
		{
			role: 'Sales Associate',
			company: 'Staples, Scranton, PA',
			duration: '2003 - 2005',
			summary:
				'Conducted product demonstrations, built strong client relationships, and received recognition for outstanding performance.',
			tasks: [
				'Exceeded sales targets consistently.',
				'High customer satisfaction and repeat business.',
				'Recognition for outstanding performance.'
			]
		}
	],

	education: [
		{
			degree: 'B.Sc in Agriculture (Honors)',
			institute: 'Scranton University, Scranton',
			duration: '2003'
		}
	]
});
