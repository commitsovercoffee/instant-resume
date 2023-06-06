<script>
	let name = 'Dwight K. Shrute';
	let role = 'Paper salesman';

	let about = {
		location: 'Scranton',
		mail: 'dwightshrute@gmail.com',
		website: 'shrutefarms.com',
		linkedin: 'dwightshrute',
		github: 'dwightshrute',
		twitter: 'dwightshrute',
		phone: '(555) 123-4567'
	};

	let skills = [
		'Sales Techniques',
		'Customer Relationship Management',
		'Account Management',
		'Cold Calling',
		'MS Office'
	];

	let interests = [
		'Beets / Agriculture',
		'Marshal Arts',
		'Survival Skills',
		'Outdoor Activities',
		'Hunting / Fishing'
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
		institute: 'Scranton University',
		duration: '2003',
		location: 'Scranton'
	};

	let references = [
		{
			quote:
				"Dwight is an absolute rockstar! I mean, he's like a sales machine, always going above and beyond. He's got the work ethic of a champion and knows how to get things done. I've seen him manage clients like nobody's business, expanding our base like it's nobody's beeswax. And let me tell you, his knowledge is off the charts! From beets to sales techniques, he's a walking encyclopedia. Dwight is a born leader and a valuable asset to any team. You'd be crazy not to snatch him up!",
			from: 'Michael Scott Former Regional Manager, Dunder Mifflin - Scranton'
		},
		{
			quote:
				"Dwight has been an exceptional performer during his time at Dunder Mifflin. When it comes to sales, he's a force to be reckoned with. Dwight consistently hits those sales targets with ease, and his dedication to delivering top-notch customer service is unparalleled. With his leadership qualities and broad skill set, Dwight is the kind of employee any organization would be lucky to have. Trust me, he's a winner.",
			from: 'David Wallace CEO, Dunder Mifflin'
		},
		{
			quote:
				" Dwight Shrute is an intense and uniquely talented individual. His exceptional sales skills and unwavering dedication set him apart. Dwight's deep knowledge of agriculture adds a captivating dimension to his expertise. I highly recommend Dwight for any endeavor.",
			from: ' Former CEO, Dunder Mifflin Sabre'
		}
	];
</script>

<div class="p-16 border-gray-600 border-t-8 shadow-md shadow-gray-800 border mt-16">
	<section class="flex flex-col mb-8 prose prose-gray">
		<h1 bind:textContent={name} contenteditable="true" class="m-0" />
		<p bind:textContent={role} contenteditable="true" class="m-0" />
	</section>

	<div class="flex">
		<!-- col left -->
		<section class="p-2 m-2 w-1/3 grow-0 prose prose-gray">
			<!-- about -->
			<section>
				<p class="font-bold underline underline-offset-4">About</p>
				<ul class="text-xs pl-0">
					{#each Object.entries(about) as [key, value]}
						<li bind:textContent={value} contenteditable="true">{value}</li>
					{/each}
				</ul>
			</section>

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

			<!-- interests -->
			<section>
				<p class="font-bold underline underline-offset-4">Interests</p>
				<ul class="text-xs pl-0">
					{#each interests as interest}
						<li bind:textContent={interest} contenteditable="true">{interest}</li>
					{/each}
				</ul>
			</section>

			<!-- education -->
			<section>
				<p class="font-bold underline underline-offset-4">Education</p>

				<div class="text-xs mb-2">
					<p class="p-0 m-0 font-bold" bind:textContent={education.degree} contenteditable="true" />

					<p
						class="p-0 m-0 font-semibold"
						bind:textContent={education.institute}
						contenteditable="true"
					/>
					<p
						class="p-0 m-0 font-light"
						bind:textContent={education.location}
						contenteditable="true"
					/>
					<p class="p-0 m-0 italic" bind:textContent={education.duration} contenteditable="true" />
				</div>
			</section>
		</section>

		<!-- col right -->
		<section class="p-2 m-2 w-2/3 grow-0 prose prose-gray">
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
		</section>
	</div>
</div>
