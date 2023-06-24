<script>
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

<svelte:window
	on:contextmenu|preventDefault
	on:click={() => {
		selectedChild = '';
		editable = '';
	}}
/>

{#if menu}
	<ul
		style="top:{menuPos.y}px; left:{menuPos.x}px"
		class="absolute rounded-xl bg-lime-100 prose w-40 z-10"
	>
		{#each menuOptions as opt}
			<li class="p-2 hover:bg-lime-300">
				{opt}
			</li>
		{/each}
	</ul>
{/if}

<!-- resume page-->
<div class="px-8 py-16 border-gray-600 border-t-8 shadow-md shadow-gray-800 border mt-16">
	<!-- resume page-->
	<div>
		<!-- header -->
		<div class={'flex justify-between '}>
			<div>
				<!-- name -->
				<h1
					contenteditable="false"
					class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default m-0 prose text-4xl font-bold"
					on:keydown={() => {}}
				>
					{name}
				</h1>

				<!-- role -->
				<p
					contenteditable="false"
					class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default m-0 prose"
				>
					{name}
				</p>
			</div>

			<!-- contact details -->
			<div class="prose">
				<!-- mail -->
				<p
					contenteditable="false"
					class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default p-0 m-0 text-xs"
				>
					{contact.mail}
				</p>
				<!-- phone -->
				<p
					contenteditable="false"
					class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default p-0 m-0 text-xs"
				>
					{contact.phone}
				</p>
				<!-- website -->
				<p
					contenteditable="false"
					class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default p-0 m-0 text-xs"
				>
					{contact.website}
				</p>
				<!-- links -->
				<section class="mt-2">
					{#each Object.entries(links) as [key, value]}
						<p
							contenteditable="false"
							class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default p-0 m-0 text-xs"
						>
							{value}
						</p>
					{/each}
				</section>
			</div>
		</div>

		<div class="flex">
			<!-- col left -->
			<section class="mr-2 w-1/3 grow-0 prose prose-gray">
				<!-- skills section -->
				<section>
					<!-- section title -->
					<p
						contenteditable="false"
						class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default font-bold underline underline-offset-4"
					>
						Skills
					</p>

					<!-- skills -->
					<div class="text-xs pl-0 flex flex-wrap">
						{#each superset['skills'] as skill}
							<p
								contenteditable="false"
								class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default bg-gray-100 rounded-xl m-1 p-1"
							>
								{skill}
							</p>
						{/each}
					</div>
				</section>

				<!-- certifications section -->
				<section>
					<!-- section title -->
					<p
						contenteditable="false"
						class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default font-bold underline underline-offset-4"
					>
						Certificates
					</p>
					<!-- certifications -->
					<ul class="text-xs pl-0 list-outside list-none">
						{#each superset['certifications'] as certificate}
							<li
								class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default"
								contenteditable="false"
							>
								{certificate}
							</li>
						{/each}
					</ul>
				</section>

				<!-- projects section -->
				<section>
					<!-- section title -->
					<p
						contenteditable="false"
						class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default font-bold underline underline-offset-4"
					>
						Projects
					</p>
					<!-- projects -->
					{#each superset['projects'] as project}
						<div class="flex flex-col text-xs">
							<div>
								<p
									contenteditable="false"
									class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default font-semibold"
								>
									{project.name}
								</p>
								<p
									contenteditable="false"
									class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default m-0 ml-6 text-xs italic"
								>
									{project.desc}
								</p>
							</div>
						</div>
					{/each}
				</section>

				<!-- interests section -->
				<section>
					<!-- section title -->
					<p
						class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default font-bold underline underline-offset-4"
					>
						Interests
					</p>
					<!-- interests -->
					<ul class="text-xs pl-0 list-inside">
						{#each superset['interests'] as interest}
							<li
								contenteditable="false"
								class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default"
							>
								{interest}
							</li>
						{/each}
					</ul>
				</section>
			</section>

			<!-- col right -->
			<section class="ml-2 w-2/3 grow-0 prose prose-gray">
				<!-- summary section -->
				<section>
					<!-- summary title -->
					<p
						contenteditable="false"
						class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default font-bold underline underline-offset-4"
					>
						Summary
					</p>

					<!-- summaries -->
					<section>
						{#each superset['summary'] as summary}
							<p
								contenteditable="false"
								class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default m-0 p-0 text-xs"
							>
								{summary}
							</p>
						{/each}
					</section>
				</section>

				<!-- experience section -->
				<section>
					<!-- experience title -->
					<p
						class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default font-bold underline underline-offset-4"
					>
						Experience
					</p>
					<!-- experiences -->
					<section>
						{#each superset['experiences'] as experience}
							<div class="flex flex-col justify-between text-xs mb-2">
								<!-- role -->
								<p
									contenteditable="false"
									class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default p-0 m-0 font-semibold"
								>
									{experience.role}
								</p>

								<!-- company detail -->
								<div class="flex justify-between">
									<!-- comapany name -->
									<p
										contenteditable="false"
										class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default p-0 m-0 font-light"
									>
										{experience.company}
									</p>
									<!-- company duration -->
									<p
										contenteditable="false"
										class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default p-0 m-0 italic"
									>
										{experience.duration}
									</p>
								</div>
								<!-- divider -->
								<hr class="m-0 p-0 my-2" />
								<!-- experience summary -->
								<p
									contenteditable="false"
									class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default m-0 p-0"
								>
									{experience.summary}
								</p>
								<!-- experience pointers -->
								<ul>
									{#each experience.tasks as task}
										<li
											contenteditable="false"
											class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default m-0 p-0"
										>
											{task}
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</section>
				</section>

				<!-- education section -->
				<section>
					<!-- education title -->
					<p
						class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default font-bold underline underline-offset-4"
						contenteditable={selectedChild === 'education'}
						on:dblclick={() => {
							selectedChild = 'education';
						}}
					>
						Education
					</p>
					<!--  educations -->
					<section>
						{#each superset['education'] as education}
							<div class={'flex flex-col justify-between text-xs mb-2 '}>
								<!-- degree -->
								<p
									class="hover:border-indigo-500 focus:border-indigo-500 border-2 border-white cursor-default p-2 m-0 font-semibold"
									contenteditable={selectedChild === education.degree}
									on:dblclick={() => {
										selectedChild = education.degree;
									}}
								>
									{education.degree}
								</p>
								<div class="flex overflow-hidden">
									<!-- institute -->
									<button
										class={'p-2 pt-0 m-0 font-light max-w-xs overflow-ellipsis  ' + editStyle}
										contenteditable={selectedChild === education.institute}
										on:dblclick={() => {
											selectedChild = education.institute;
										}}
									>
										{education.institute}
									</button>
									<!-- year -->
									<p
										tabindex="-1"
										on:keydown={() => {}}
										on:dblclick|preventDefault|stopPropagation={() => {
											editable = education.duration;
										}}
										on:click|preventDefault|stopPropagation={() => {
											selectedChild = education.duration;
										}}
										contenteditable={editable === education.duration}
										class={`p-2 pt-0 m-0 italic w-16 break-words ${editStyle} ${
											editable === education.duration ? 'cursor-text' : 'cursor-default select-none'
										}`}
									>
										{education.duration}
									</p>
								</div>
							</div>
						{/each}
					</section>
				</section>
			</section>
		</div>
	</div>
</div>
