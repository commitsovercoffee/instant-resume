<script>

	let editable = false;
	let name = 'Dwight K. Shrute';
	let role = 'Paper salesman';
	let index;

	let contact = {
		mail: 'dwightshrute@gmail.com',
		phone: '(555) 123-4567',
		website: 'shrutefarms.com'
	};

	let links = ['github.com/dwightshrute', 'linkedin.com/dwightshrute', 'twitter.com/dwightshrute'];

let superset = {
	skills : [
		'Sales Techniques',
		'Customer Relations',
		'Account Management',
		'Cold Calling',
		'MS Office'
	],

 certifications : [
		'Certified Sales Professional (CSP)',
		'Certified Crop Advisor (CCA)',
		'Crisis Intervention Training (CIT) Certification'
	],



	projects : [
		{ name: 'beetmaster', desc: 'comprehensive guide for all things beet farming.' },
		{ name: 'salesWarrior', desc: 'performance tracking system for sales teams.' },
		{
			name: 'pranksters-paradise',
			desc: 'pranks to outwit and outsmart Jim Halpert.'
		}
	],


	interests : [
		'Beets / Agriculture',
		'Marshal Arts',
		'Survival Skills',
		'Outdoor Activities',
		'Hunting / Fishing'
	],

	summary :
		["I'm a senior paper salesman with a proven track record of managing and growing a substantial client portfolio at Dunder Mifflin, seeking a challenging position that leverages my diverse skillset."],

	experiences : [
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

	education :[ {
		degree: 'B.Sc in Agriculture (Honors)',
		institute: 'Scranton University, Scranton',
		duration: '2003'
	},],
	}

	function toggleMode() {
		editable = !editable;
		console.log(editable);
	}

	let menuOptions = ['duplicate', 'Edit', 'delete'];
	let menu = false;
	let menuPos = { x: 0, y: 0 };


	let selectedParent = '';
	let selectedAction = '';
	let selectedChild ;

	function handleRightClick(event) {
		menu = true;
		menuPos.x = event.clientX;
		menuPos.y = event.clientY;
	} 


	function handleMenuClick() {
		console.log(selectedAction, selectedChild, 'from/to', selectedParent);


switch(selectedAction) {
case 'delete': 		index = superset[selectedParent].indexOf(selectedChild);
				if (index > -1) {
					// only splice array when item is found
					superset[selectedParent].splice(index, 1); // 2nd parameter means remove one item only
					superset[selectedParent] = superset[selectedParent];
				}
break;
case 'duplicate': 		index = superset[selectedParent].indexOf(selectedChild); // after which suplicate should be created

					superset[selectedParent].splice(index,0, selectedChild); // 2nd parameter means remove one item only
					superset[selectedParent] = superset[selectedParent];
break;


}

	}

</script>

<button
	on:click={function () {
		editable = !editable;
	}}
	class="fixed bottom-16 right-32 p-2 m-1 basis-1/6 rounded-xl transition duration-300 bg-zinc-200 hover:bg-stone-300 hover:dark:bg-stone-600 active:bg-slate-300 active:dark:bg-slate-600 active:translate-y-1"
	>{editable ? 'edit mode' : 'view mode'}</button
>

<svelte:window
	on:contextmenu|preventDefault
	on:click={() => {
		menu = false;
	}}
	on:contextmenu|preventDefault={handleRightClick}
/>

{#if menu}
	<ul
		style="top:{menuPos.y}px; left:{menuPos.x}px"
		class="absolute rounded-xl bg-lime-100 prose w-40 z-10"
	>
		{#each menuOptions as opt}
			<li
				class="p-2 hover:bg-lime-300"
				on:click={() => {
					selectedAction = opt;
					handleMenuClick();
				}}
			>
				{opt}
			</li>
		{/each}
	</ul>
{/if}

<div class="px-8 py-16 border-gray-600 border-t-8 shadow-md shadow-gray-800 border mt-16">
	<div>
		<div class="w-full">
			<div class="flex justify-between">
				<div>
					{#if !editable}
						<h1 class="m-0 prose text-4xl font-bold">{name}</h1>
						<p class="m-0 prose">{role}</p>
					{:else}
						<h1 bind:innerText={name} contenteditable="true" class="m-0 prose text-4xl font-bold">
							{name}
						</h1>
						<p bind:innerText={role} contenteditable="true" class="m-0 prose" />
					{/if}
				</div>

				<div class="prose">
					{#if !editable}
						<p class="p-0 m-0 text-xs">{contact.mail}</p>
						<p class="p-0 m-0 text-xs">{contact.phone}</p>
						<p class="p-0 m-0 text-xs">{contact.website}</p>
					{:else}
						<p class="p-0 m-0 text-xs" bind:innerText={contact.mail} contenteditable="true" />
						<p class="p-0 m-0 text-xs" bind:innerText={contact.phone} contenteditable="true" />
						<p class="p-0 m-0 text-xs" bind:innerText={contact.website} contenteditable="true" />
					{/if}
					<section class="mt-2">
						{#each Object.entries(links) as [key, value]}
							{#if !editable}
								<p class="p-0 m-0 text-xs">{value}</p>
							{:else}
								<p class="p-0 m-0 text-xs" bind:innerText={value} contenteditable="true" />{/if}
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
						{#each superset['skills'] as skill}
							{#if !editable}
								<p class="bg-gray-100 rounded-xl m-1 p-1"

		on:contextmenu={() => {
					selectedParent = 'skills';
					selectedChild = skill;
				}}
		


								>
									{skill}
								</p>
							{:else}
								<p
									bind:innerText={skill}
									contenteditable="true"
									class="bg-gray-100 rounded-xl m-1 p-1"
								/>{/if}
						{/each}
					</div>
				</section>

				<!-- certifications -->
				<section>
					<p class="font-bold underline underline-offset-4">Certificates</p>
					<ul class="text-xs pl-0 list-outside">
						{#each superset['certifications'] as certificate}
							{#if !editable}
								<li
		on:contextmenu={() => {
					selectedParent = 'certifications';
					selectedChild = certificate;
				}}


								>{certificate}</li>
							{:else}
								<li bind:innerText={certificate} contenteditable="true" />{/if}
						{/each}
					</ul>
				</section>

				<!-- projects -->
				<section>
					<p class="font-bold underline underline-offset-4">Projects</p>
					{#each superset['projects'] as project}
						<div class="flex flex-col text-xs">
							{#if !editable}
							<div
		on:contextmenu={() => {
					selectedParent = 'projects';
					selectedChild = project;
				}}


							>
								<p class=" font-semibold">{project.name}</p>
								<p class="m-0 ml-6 text-xs italic">{project.desc}</p>
							</div>
							{:else}
							<div>
								<p bind:innerText={project.name} contenteditable="true" class=" font-semibold" />
								<p
									bind:innerText={project.desc}
									contenteditable="true"
									class="m-0 ml-6 text-xs italic"
								/>
							</div>
							{/if}
						</div>
					{/each}
				</section>

				<!-- interests -->
				<section>
					<p class="font-bold underline underline-offset-4">Interests</p>
					<ul class="text-xs pl-0 list-outside">
						{#each superset['interests'] as interest}
							{#if !editable}
								<li
		on:contextmenu={() => {
					selectedParent = 'interests';
					selectedChild = interest;
				}}


								>{interest}</li>
							{:else}
								<li
		on:contextmenu={() => {
					selectedParent = 'interests';
					selectedChild = interest;
				}}

								bind:innerText={interest} contenteditable="true" />{/if}
						{/each}
					</ul>
				</section>
			</section>

			<!-- col right -->
			<section class="ml-2 w-2/3 grow-0 prose prose-gray">
				<!-- summary -->
					<p class="font-bold underline underline-offset-4">Summary</p>
				<section>
					{#each superset['summary'] as summary}
					{#if !editable}
						<p
		on:contextmenu={() => {
					selectedParent = 'summary';
					selectedChild = summary;
				}}


						class="m-0 p-0 text-xs">{summary}</p>
					{:else}
						<p
		on:contextmenu={() => {
					selectedParent = 'summary';
					selectedChild = summary;
				}}


						bind:innerText={summary} contenteditable="true" class="m-0 p-0 text-xs" />
					{/if}
					{/each}
				</section>

				<!-- experience -->
				<section>
					<p class="font-bold underline underline-offset-4">Experience</p>
					{#each superset['experiences'] as experience}
						<div class="flex flex-col justify-between text-xs mb-2" 



						>
							{#if !editable}
							<div
		on:contextmenu={() => {
					selectedParent = 'experiences';
					selectedChild = experience;
				}}

							>
								<p class="p-0 m-0 font-semibold">
									{experience.role}
								</p>

								<div class="flex justify-between">
									<p class="p-0 m-0 font-light">
										{experience.company}
									</p>
									<p class="p-0 m-0 italic">
										{experience.duration}
									</p>
								</div>
								<hr class="m-0 p-0 my-2" />
								<p class="m-0 p-0">
									{experience.summary}
								</p>
								<ul>
									{#each experience.tasks as task}
										<li class="m-0 p-0">{task}</li>
									{/each}
								</ul>
							</div>
							{:else}
							<div
		on:contextmenu={() => {
					selectedParent = 'experiences';
					selectedChild = experience;
				}}

							>

								<p
									class="p-0 m-0 font-semibold"
									bind:innerText={experience.role}
									contenteditable="true"
								/>

								<div class="flex justify-between">
									<p
										class="p-0 m-0 font-light"
										bind:innerText={experience.company}
										contenteditable="true"
									/>
									<p
										class="p-0 m-0 italic"
										bind:innerText={experience.duration}
										contenteditable="true"
									/>
								</div>
								<hr class="m-0 p-0 my-2" />
								<p class="m-0 p-0" bind:innerText={experience.summary} contenteditable="true" />
								<ul>
									{#each experience.tasks as task}
										<li class="m-0 p-0" bind:innerText={task} contenteditable="true" />
									{/each}
								</ul>
							</div>
							{/if}
						</div>
					{/each}
				</section>

				<!-- education -->
				<section>
					<p class="font-bold underline underline-offset-4">Education</p>
					<div class="flex flex-col justify-between text-xs mb-2">
					{#each superset['education'] as education }
						{#if !editable}
						<div 
	on:contextmenu={() => {
					selectedParent = 'education';
					selectedChild = education;
				}}

						> 
							<p class="p-0 m-0 font-semibold">{education.degree}</p>
							<div class="flex justify-between">
								<p class="p-0 m-0 font-light">{education.institute}</p>
								<p class="p-0 m-0 italic">{education.duration}</p>
							</div>
						</div>
						{:else}
						<div
	on:contextmenu={() => {
					selectedParent = 'education';
					selectedChild = education;
				}} >

							<p
								class="p-0 m-0 font-semibold"
								bind:innerText={education.degree}
								contenteditable="true"
							/>
							<div class="flex justify-between">
								<p
									class="p-0 m-0 font-light"
									bind:innerText={education.institute}
									contenteditable="true"
								/>
								<p
									class="p-0 m-0 italic"
									 contenteditable="true" 
								>{education.duration}</p>
							</div>
						</div>
						{/if}
						{/each}
					</div>
				</section>
			</section>
		</div>
	</div>
</div>
