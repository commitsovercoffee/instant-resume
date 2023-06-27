<script>
	import Atom from './atom.svelte';
	import SectionTitle from './sectionTitle.svelte';

	let menu = {
		hidden: false,
		rect: { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 },
		options: ['duplicate', 'Edit', 'delete'],
		action: ''
	};

	function handleMessage(event) {
		menu.hidden = event.detail.status;
		menu.rect = event.detail.rect;
	}

	let data = {
		contact: {
			name: 'Dwight K. Shrute',
			mail: 'dwightshrute@gmail.com',
			phone: '(555) 123-4567',
			website: 'shrutefarms.com'
		},
		links: ['github.com/dwightshrute', 'linkedin.com/dwightshrute', 'twitter.com/dwightshrute'],
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
			'Beets/Agriculture',
			'Marshal Arts',
			'Survival Skills',
			'Outdoor Activities',
			'Hunting/Fishing'
		],

		summary: [
			"I'm a senior paper salesman with a proven track record of managing and growing a substantial client portfolio at Dunder Mifflin, seeking a challenging position that leverages my diverse skillset."
		],

		experiences: [
			{
				role: ' Assistant Regional Manager',
				company: 'Dunder Mifflin, Scranton, PA',
				duration: '2010 - Present',
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
</script>

<div class="flex">
	<div class="px-6 pt-4 pb-8 my-8 shadow-md shadow-gray-800 bg-teal-00">
		<div id="section-to-print">
			<div class="section-block p-1 bg-stone-0 flex justify-between my-8">
				<!-- Title ------------------------------------------->
				<section class="section-block p-1 mb-2 bg-stone-0">
					<Atom
						on:menuStateChange={handleMessage}
						content={data['contact'].name}
						baseStyle="p-0 m-0 text-4xl font-bold"
					/>
					<Atom
						on:menuStateChange={handleMessage}
						content={data['contact'].mail}
						baseStyle="p-0 m-0  font-light"
					/>
					<Atom
						on:menuStateChange={handleMessage}
						content={data['contact'].website}
						baseStyle="p-0 m-0  font-light"
					/>
				</section>

				<!-- LINKS ------------------------------------------->
				<section class="section-block p-1 mb-2">
					{#each data['links'] as link}
						<Atom
							on:menuStateChange={handleMessage}
							content={link}
							baseStyle="p-0 m-0  italic font-light text-right"
						/>
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
								{#each data['skills'] as skill}
									<Atom
										on:menuStateChange={handleMessage}
										content={skill}
										baseStyle="bg-gray-100 rounded-xl  m-0.5 px-1"
									/>
								{/each}
							</div>
						</section>

						<!-- CERTIFICATES ---------------------------->
						<section class="section-block p-1 mb-2 bg-red-0">
							<SectionTitle title="Certificates" />
							<div class="py-1 flex flex-wrap">
								{#each data['certifications'] as certificate}
									<Atom
										on:menuStateChange={handleMessage}
										content={certificate}
										baseStyle=" m-0.5 p-0.5"
									/>
								{/each}
							</div>
						</section>

						<!-- PROJECTS -------------------------------->
						<section class="section-block p-1 mb-2 bg-sky-0">
							<SectionTitle title="Projects" />
							{#each data['projects'] as project}
								<div class="py-1">
									<Atom
										on:menuStateChange={handleMessage}
										content={project.name}
										baseStyle=" m-0.5 p-0.5 font-semibold"
									/>
									<Atom
										on:menuStateChange={handleMessage}
										content={project.desc}
										baseStyle=" m-0.5 p-0.5 ml-4 italic"
									/>
								</div>
							{/each}
						</section>

						<!-- INTERESTS ------------------------------->
						<section class="section-block p-1 mb-2 bg-lime-0">
							<SectionTitle title="Interests" />
							<div class="py-1">
								{#each data['interests'] as interest}
									<Atom
										on:menuStateChange={handleMessage}
										content={interest}
										baseStyle=" m-0 p-0"
									/>
								{/each}
							</div>
						</section>
					</section>

					<section class="ml-2 w-2/3 grow-0 prose prose-gray">
						<!-- SUMMARY --------------------------------->
						<section class="section-block p-1 mb-2 bg-violet-0">
							<SectionTitle title="Summary" />
							<div class="py-1">
								{#each data['summary'] as summary}
									<Atom
										on:menuStateChange={handleMessage}
										content={summary}
										baseStyle=" m-0.5 p-0.5"
									/>
								{/each}
							</div>
						</section>

						<!-- EXPERIENCE ------------------------------>
						<section class="section-block p-1 mb-2 bg-orange-0">
							<SectionTitle title="Experience" />
							{#each data['experiences'] as experience}
								<div class=" mb-4 bg-red-0">
									<Atom
										on:menuStateChange={handleMessage}
										content={experience.company}
										baseStyle="p-0.5 m-0.5 font-semibold"
									/>
									<hr class="m-0 p-0 my-2" />
									<div class="flex justify-between py-1">
										<Atom
											on:menuStateChange={handleMessage}
											content={experience.role}
											baseStyle="px-0.5 m-0 italic"
										/>
										<Atom
											on:menuStateChange={handleMessage}
											content={experience.duration}
											baseStyle="px-0.5 m-0 italic text-right"
										/>
									</div>
									{#each experience.tasks as task}
										<li class="m-0 ml-8">
											<Atom
												on:menuStateChange={handleMessage}
												content={`${task}`}
												baseStyle="p-0 m-0"
											/>
										</li>
									{/each}
								</div>
							{/each}
						</section>

						<!-- EDUCATION ------------------------------->
						<section class="section-block p-1 mb-2 bg-green-0">
							<SectionTitle title="Education" />
							<section class="py-1">
								{#each data['education'] as education}
									<Atom
										on:menuStateChange={handleMessage}
										content={education.degree}
										baseStyle="m-0.5 p-0.5 font-semibold"
									/>
									<div class="flex justify-between">
										<Atom
											on:menuStateChange={handleMessage}
											content={education.institute}
											baseStyle="p-0.5 m-0.5 font-light"
										/>
										<Atom
											on:menuStateChange={handleMessage}
											content={education.duration}
											baseStyle="p-0.5 m-0.5 italic text-right"
										/>
									</div>
								{/each}
							</section>
						</section>
					</section>
				</div>
			</div>
		</div>
	</div>
	{#if menu.hidden}
		<ul
			style="left:{menu.rect.left}px; top:{menu.rect.top - 120}px;  "
			class="absolute rounded-xl bg-lime-100 prose w-40 h-[128px] z-40"
		>
			{#each menu.options as opt}
				<li
					class="p-2 hover:bg-lime-300"
					on:click={() => {
						menu.hidden.action = opt;
					}}
				>
					{opt}
				</li>
			{/each}
		</ul>
	{/if}
</div>
