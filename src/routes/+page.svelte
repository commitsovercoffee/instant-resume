<script>
	let name = 'Dwight K. Shrute';
	let role = 'Paper salesman';

	let contact = {
		mail: 'dwightshrute@gmail.com',
		phone: '(555) 123-4567',
		website: 'shrutefarms.com'
	};

	let links = ['github.com/dwightshrute', 'linkedin.com/dwightshrute', 'twitter.com/dwightshrute'];

	let skills = [
		'Sales Techniques',
		'Customer Relations',
		'Account Management',
		'Cold Calling',
		'MS Office'
	];

	let projects = [
		{ name: 'beetmaster', desc: 'comprehensive guide for all things beet farming.' },
		{ name: 'salesWarrior', desc: 'performance tracking system for sales teams.' },
		{
			name: 'pranksters-paradise',
			desc: 'pranks to outwit and outsmart Jim Halpert.'
		}
	];

	let interests = [
		'Beets / Agriculture',
		'Marshal Arts',
		'Survival Skills',
		'Outdoor Activities',
		'Hunting / Fishing'
	];

	let certifications = [
		'Certified Sales Professional (CSP)',
		'Certified Crop Advisor (CCA)',
		'Crisis Intervention Training (CIT) Certification'
	];

	let summary =
		"I'm a senior paper salesman with a proven track record of managing and growing a substantial client portfolio at Dunder Mifflin, seeking a challenging position that leverages my diverse skillset.";

	const experiences = [
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
	];

	let education = {
		degree: 'B.Sc in Agriculture (Honors)',
		institute: 'Scranton University, Scranton',
		duration: '2003'
	};
</script>

<div class="px-8 py-16 border-gray-600 border-t-8 shadow-md shadow-gray-800 border mt-16">
	<div>
		<div class="w-full">
			<div class="flex justify-between">
				<div>
					<h1 bind:textContent={name} contenteditable="true" class="m-0 prose text-4xl font-bold" />
					<p bind:textContent={role} contenteditable="true" class="m-0 prose" />
				</div>

				<div class="prose">
					<p class="p-0 m-0 text-xs" bind:textContent={contact.mail} contenteditable="true" />
					<p class="p-0 m-0 text-xs" bind:textContent={contact.phone} contenteditable="true" />
					<p class="p-0 m-0 text-xs" bind:textContent={contact.website} contenteditable="true" />
					<section class="mt-2">
						{#each Object.entries(links) as [key, value]}
							<p class="p-0 m-0 text-xs" bind:textContent={value} contenteditable="true">{value}</p>
						{/each}
					</section>
				</div>
			</div>
		</div>

		<div class="flex">
			<!-- col left -->
			<section class="mr-2 w-1/3 grow-0 prose prose-gray">
				<!-- skills -->
				<section>
					<p class="font-bold underline underline-offset-4">Skills</p>
					<div class="text-xs pl-0 flex flex-wrap">
						{#each skills as skill}
							<p
								bind:textContent={skill}
								contenteditable="true"
								class="bg-gray-100 rounded-xl m-1 p-1"
							>
								{skill}
							</p>
						{/each}
					</div>
				</section>

				<!-- certifications -->
				<section>
					<p class="font-bold underline underline-offset-4">Certificates</p>
					<ul class="text-xs pl-0 list-outside">
						{#each certifications as certificate}
							<li bind:textContent={certificate} contenteditable="true" />{/each}
					</ul>
				</section>

				<!-- projects -->
				<section>
					<p class="font-bold underline underline-offset-4">Projects</p>
					{#each projects as project}
						<div class="flex flex-col text-xs">
							<p bind:textContent={project.name} contenteditable="true" class=" font-semibold" />
							<p
								bind:textContent={project.desc}
								contenteditable="true"
								class="m-0 ml-6 text-xs italic"
							/>
						</div>
					{/each}
				</section>

				<!-- interests -->
				<section>
					<p class="font-bold underline underline-offset-4">Interests</p>
					<ul class="text-xs pl-0 list-outside">
						{#each interests as interest}
							<li bind:textContent={interest} contenteditable="true">{interest}</li>
						{/each}
					</ul>
				</section>
			</section>

			<!-- col right -->
			<section class="ml-2 w-2/3 grow-0 prose prose-gray">
				<!-- summary -->
				<section>
					<p class="font-bold underline underline-offset-4">Summary</p>
					<p bind:textContent={summary} contenteditable="true" class="m-0 p-0 text-xs" />
				</section>

				<!-- experience -->
				<section>
					<p class="font-bold underline underline-offset-4">Experience</p>
					{#each experiences as experience}
						<div class="flex flex-col justify-between text-xs mb-2">
							<p
								class="p-0 m-0 font-semibold"
								bind:textContent={experience.role}
								contenteditable="true"
							/>

							<div class="flex justify-between">
								<p
									class="p-0 m-0 font-light"
									bind:textContent={experience.company}
									contenteditable="true"
								/>
								<p
									class="p-0 m-0 italic"
									bind:textContent={experience.duration}
									contenteditable="true"
								/>
							</div>
							<hr class="m-0 p-0 my-2" />
							<p class="m-0 p-0" bind:textContent={experience.summary} contenteditable="true" />
							<ul>
								{#each experience.tasks as task}
									<li class="m-0 p-0" bind:textContent={task} contenteditable="true" />
								{/each}
							</ul>
						</div>
					{/each}
				</section>

				<!-- education -->
				<section>
					<p class="font-bold underline underline-offset-4">Education</p>
					<div class="flex flex-col justify-between text-xs mb-2">
						<p
							class="p-0 m-0 font-semibold"
							bind:textContent={education.degree}
							contenteditable="true"
						/>

						<div class="flex justify-between">
							<p
								class="p-0 m-0 font-light"
								bind:textContent={education.institute}
								contenteditable="true"
							/>
							<p
								class="p-0 m-0 italic"
								bind:textContent={education.duration}
								contenteditable="true"
							/>
						</div>
					</div>
				</section>
			</section>
		</div>
	</div>
</div>
