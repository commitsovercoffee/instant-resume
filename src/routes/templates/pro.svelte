<script>
	import { details } from "../stores/details.js";
	import Atom from "../components/atom.svelte";
</script>

<div class="p-8 shadow-zinc-800 shadow-md">
	<!-- Applicant Name -------------------------------------------------->
	<div class="my-8">
		<Atom
			content={$details.profile.name.toUpperCase()}
			type="block"
			style="font-thin text-center text-3xl"
		/>
		<Atom
			type="block"
			content={$details.profile.contact}
			parent="schools"
			style="text-xs text-center"
		/>
	</div>

	<!-- Education Section ----------------------------------------------->
	<div class="mb-4">
		<Atom
			content="EDUCATION"
			type="block"
			style="text-xl font-thin"
		/>
		<hr class="m-0 mb-2" />
		{#each $details.schools as school, i}
			<Atom type="section" items={["schools"]} index={i}>
				<section class="flex justify-between">
					<Atom
						type="block"
						content={school.institute}
						parent="schools"
						style="font-bold"
						index={i}
					/>
					<Atom
						type="block"
						content={school.duration}
						parent="schools"
						style="font-thin tracking-tighter"
						index={i}
					/>
				</section>
				<Atom
					type="block"
					content={school.course}
					parent="schools"
					style="text-xs"
					index={i}
				/>

				{#each school.details as detail}
					<li class="ml-8 my-0">
						<Atom
							type="block"
							content={detail}
							parent="details"
							style="text-xs"
							index={i}
						/>
					</li>
				{/each}
			</Atom>
		{/each}
	</div>

	<!-- Experience Section ---------------------------------------------->
	<div class="mb-4">
		<Atom
			content="EXPERIENCE"
			type="block"
			style="text-xl font-thin"
		/>
		<hr class="m-0 mb-2" />

		{#each $details.experiences as experience, i}
			<Atom type="section" items={["experiences"]} index={i}>
				<section class="flex justify-between">
					<Atom
						type="block"
						content={experience.company}
						parent="experiences[i]"
						style="font-bold"
						index={i}
					/>
					<Atom
						type="block"
						content={experience.duration}
						parent="experiences[i]"
						style="font-thin tracking-tighter"
						index={i}
					/>
				</section>
				<Atom
					type="block"
					content={experience.role}
					parent="experiences[i]"
					style="text-xs"
					index={i}
				/>

				{#each experience.tasks as task}
					<li class="ml-8 my-0">
						<Atom
							type="block"
							content={task}
							parent="tasks"
							style="text-xs"
							index={i}
						/>
					</li>
				{/each}
			</Atom>
		{/each}
	</div>

	<!-- Skills Section -------------------------------------------------->
	<div class="mb-4">
		<Atom content="SKILLS" type="block" style="text-xl font-thin" />
		<hr class="m-0 mb-2" />
		<Atom
			type="block"
			content={$details.skills}
			parent="skills"
			style="text-xs m-0 p-0"
		/>
	</div>

	<!-- Projects Section ------------------------------------------------>
	<div class="mb-4">
		<Atom
			content="PROJECTS"
			type="block"
			style="text-xl font-thin"
		/>
		<hr class="m-0 mb-2" />
		{#each $details.projects as project, i}
			<Atom type="section" items={["projects"]} index={i}>
				<Atom
					type="block"
					content={project.name}
					parent="projects[i]"
					style="font-bold"
					index={i}
				/>
				<Atom
					type="block"
					content={project.desc}
					parent="projects[i]"
					style="text-xs"
					index={i}
				/>
			</Atom>
		{/each}
	</div>
</div>
