<script>
	import Atom from './atom.svelte';
	import SectionTitle from './sectionTitle.svelte';

	let editStyle =
		'hover:border-indigo-500 focus:border-indigo-500 border-2 border-white [&[contenteditable]]:active:border-2 [&[contenteditable]]:focus:border-2 [&[contenteditable]]:focus:outline-none ';

	let name = 'Dwight K. Shrute';
	let role = 'Paper salesman';

	let editable = '';

	let index;

	let contact = {
		mail: 'dwightshrute@gmail.com',
		phone: '(555) 123-4567',
		website: 'shrutefarms.com'
	};

	let links = ['github.com/dwightshrute', 'linkedin.com/dwightshrute', 'twitter.com/dwightshrute'];

	let superset = {
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
			{ name: 'Beet Master', desc: 'comprehensive guide for all things beet farming.' },
			{ name: 'Sales Warrior', desc: 'performance tracking system for sales teams.' },
			{
				name: 'Pranksters Pro',
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
				],
				deletable: true
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
	};

	let menuOptions = ['duplicate', 'delete'];
	let menu = false;
	let menuPos = { x: 0, y: 0 };

	let selectedParent = '';
	let selectedAction = '';
	let selectedChild = '';

	function handleRightClick(event) {
		menu = true;
		menuPos.x = event.clientX;
		menuPos.y = event.clientY;
	}

	function handleMenuClick() {
		console.log(selectedAction, selectedChild, 'from/to', selectedParent);

		switch (selectedAction) {
			case 'delete':
				index = superset[selectedParent].indexOf(selectedChild);
				if (index > -1) {
					// only splice array when item is found
					superset[selectedParent].splice(index, 1); // 2nd parameter means remove one item only
					superset[selectedParent] = superset[selectedParent];
				}
				break;
			case 'duplicate':
				index = superset[selectedParent].indexOf(selectedChild); // after which suplicate should be created

				superset[selectedParent].splice(index, 0, selectedChild); // 2nd parameter means remove one item only
				superset[selectedParent] = superset[selectedParent];
				break;
		}
	}
</script>

{#if menu}
	<ul
		style="top:{menuPos.y}px; left:{menuPos.x}px"
		class="absolute rounded-xl bg-lime-0 prose w-40 z-10"
	>
		{#each menuOptions as opt}
			<li class="p-2 hover:bg-lime-300">
				{opt}
			</li>
		{/each}
	</ul>
{/if}

<div class="px-6 pt-4 pb-8 my-8 shadow-md shadow-gray-800 bg-teal-0">
	<div class="section-block p-1 bg-stone-0 flex justify-between my-8">
		<!-- Title ------------------------------------------->
		<section class="section-block p-1 mb-2 bg-stone-0">
			<Atom content={name} baseStyle="m-0 prose text-4xl font-bold" />
			<Atom content={contact.mail} baseStyle="p-0 m-0 text-xs font-light" />
			<Atom content={contact.website} baseStyle="p-0 m-0 text-xs font-light" />
		</section>

		<!-- LINKS ------------------------------------------->
		<section class="section-block p-1 mb-2">
			{#each Object.entries(links) as [key, value]}
				<Atom content={value} baseStyle="p-0 m-0 text-xs italic font-light" />
			{/each}
		</section>
	</div>
	<div>
		<div class="flex">
			<section class="mr-2 w-1/3 grow-0 prose prose-gray">
				<!-- SKILLS ---------------------------------->
				<section class="section-block p-1 mb-2 bg-teal-0">
					<SectionTitle title="Skills" />
					<div class="py-1 flex flex-wrap">
						{#each superset['skills'] as skill}
							<Atom content={skill} baseStyle="bg-gray-100 rounded-xl text-xs m-0.5 px-1" />
						{/each}
					</div>
				</section>
				<!-- CERTIFICATES ---------------------------->
				<section class="section-block p-1 mb-2 bg-red-0">
					<SectionTitle title="Certificates" />
					<div class="py-1 flex flex-wrap">
						{#each superset['certifications'] as certificate}
							<Atom content={certificate} baseStyle="text-xs m-0.5 p-0.5" />
						{/each}
					</div>
				</section>
				<!-- PROJECTS -------------------------------->
				<section class="section-block p-1 mb-2 bg-sky-0">
					<SectionTitle title="Projects" />
					{#each superset['projects'] as project}
						<div class="py-1">
							<Atom content={project.name} baseStyle="text-xs m-0.5 p-0.5 font-semibold" />
							<Atom content={project.desc} baseStyle="text-xs m-0.5 p-0.5 ml-4 italic" />
						</div>
					{/each}
				</section>
				<!-- INTERESTS ------------------------------->
				<section class="section-block p-1 mb-2 bg-lime-0">
					<SectionTitle title="Interests" />
					<div class="py-1">
						{#each superset['interests'] as interest}
							<Atom content={interest} baseStyle="text-xs m-0 p-0" />
						{/each}
					</div>
				</section>
			</section>

			<section class="ml-2 w-2/3 grow-0 prose prose-gray">
				<!-- SUMMARY --------------------------------->
				<section class="section-block p-1 mb-2 bg-violet-0">
					<SectionTitle title="Summary" />
					<div class="py-1">
						{#each superset['summary'] as summary}
							<Atom content={summary} baseStyle="text-xs m-0.5 p-0.5" />
						{/each}
					</div>
				</section>
				<!-- EXPERIENCE ------------------------------>
				<section class="section-block p-1 mb-2 bg-orange-0">
					<SectionTitle title="Experience" />
					{#each superset['experiences'] as experience}
						<div class="text-xs mb-4 bg-red-0">
							<Atom content={experience.role} baseStyle="p-0.5 m-0.5 font-semibold" />
							<div class="flex justify-between">
								<Atom content={experience.company} baseStyle="p-0.5 m-0.5 font-light" />
								<Atom content={experience.duration} baseStyle="p-0.5 m-0.5 italic text-right" />
							</div>
							<hr class="m-0 p-0 my-2" />
							<Atom content={experience.summary} baseStyle="p-0.5 m-0.5" />
							{#each experience.tasks as task}
								<Atom content={`- ${task}`} baseStyle="p-0 m-0" />
							{/each}
						</div>
					{/each}
				</section>
				<!-- EDUCATION ------------------------------->
				<section class="section-block p-1 mb-2 bg-green-0">
					<SectionTitle title="Education" />
					<section class="py-1 text-xs">
						{#each superset['education'] as education}
							<div
								class={''}
								role="menu"
								tabindex="0"
								on:keydown|preventDefault|once={() => {}}
								on:click|preventDefault|stopPropagation={() => {}}
							>
								<Atom content={education.degree} baseStyle="m-0.5 p-0.5 font-semibold" />
								<div class="flex justify-between">
									<Atom content={education.institute} baseStyle="p-0.5 m-0.5 font-light" />
									<Atom content={education.duration} baseStyle="p-0.5 m-0.5 italic text-right" />
								</div>
							</div>
						{/each}
					</section>
				</section>
			</section>
		</div>
	</div>
</div>
