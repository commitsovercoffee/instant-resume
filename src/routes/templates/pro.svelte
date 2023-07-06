<script>
	import { details } from "../stores/details.js";
	import Atom from "../components/atom.svelte";
</script>

<div class="p-8 shadow-zinc-800 shadow-md">
	<!-- Applicant Name -------------------------------------------------->
	<div class="my-2">
		<Atom
			content={$details.name.toUpperCase()}
			type="block"
			style="font-thin text-center text-3xl"
		/>
	</div>

	<!-- Education Section ----------------------------------------------->
	<div class="my-2">
		<Atom
			content="EDUCATION"
			type="block"
			style="text-xl font-thin"
		/>
		<hr class="m-0 mb-2" />

		<!-- Institute -->
		{#each $details.institutes as institute, i}
			<Atom
				type="section"
				items={[
					"institutes",
					"degrees",
					"details",
					"periods",
				]}
				index={i}
			>
				<section class="flex justify-between">
					<Atom
						type="block"
						content={$details.institutes[i]}
						parent="institutes"
						style="font-bold"
						index={i}
					/>
					<Atom
						type="block"
						content={$details.terms[i]}
						parent="terms"
						style="font-thin tracking-tighter"
						index={i}
					/>
				</section>

				<Atom
					type="block"
					content={$details.degrees[i]}
					parent="degrees"
					style="italic"
					index={i}
				/>
				{#each $details.details[i] as detail}
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
	<div class="my-2">
		<Atom
			content="EXPERIENCE"
			type="block"
			style="text-xl font-thin"
		/>
		<hr class="m-0 mb-2" />

		{#each $details.companies as company, i}
			<Atom
				type="section"
				items={["companies", "roles", "tasks"]}
				index={i}
			>
				<section class="flex justify-between">
					<Atom
						type="block"
						content={$details.companies[i]}
						parent="companies"
						style="font-bold"
						index={i}
					/>
					<Atom
						type="block"
						content={$details.periods[i]}
						parent="terms"
						style="font-thin tracking-tighter"
						index={i}
					/>
				</section>

				<Atom
					type="block"
					content={$details.roles[i]}
					parent="roles"
					style="text-xs"
					index={i}
				/>
				{#each $details.tasks[i] as task}
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
	<div class="my-2">
		<Atom content="SKILLS" type="block" style="text-xl font-thin" />
		<hr class="m-0 mb-2" />
		{#each $details.skills as _, i}
			<Atom
				type="block"
				content={$details.skills[i]}
				parent="skills"
				style="text-xs ml-0 p-4"
			/>
		{/each}
	</div>

	<!-- Projects Section ------------------------------------------------>
	<div class="my-2">
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
