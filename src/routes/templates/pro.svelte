<script>
	import { details } from "../stores/details.js";
	import Atom from "../components/atom.svelte";
</script>

<p>Pro Component</p>

<div>
	<!-- Applicant Name -->
	<Atom
		content={$details.name.toUpperCase()}
		type="block"
		style="font-thin text-center text-3xl"
	/>

	<!-- Education Section -->
	<Atom content="EDUCATION" type="block" style="text-xl font-thin" />
	<hr class="m-0 mb-2" />

	<!-- Institute -->
	{#each $details.institutes as institute, i}
		<Atom
			type="section"
			items={["institutes", "degrees", "details"]}
			style="p-4"
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

	<!-- Experience Section -->
	<Atom content="EXPERIENCE" type="block" style="text-xl font-thin" />
	<hr class="m-0 mb-2" />

	<!-- Institute -->
	{#each $details.companies as company, i}
		<Atom
			type="section"
			items={["companies", "roles", "tasks"]}
			style="p-4"
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

	<!-- Skills Section -->
	<Atom content="SKILLS" type="block" style="text-xl font-thin" />
	<hr class="m-0 mb-2" />
	{#each $details.skills as task}
		<li class="ml-8 my-0">
			<Atom
				type="block"
				content={task}
				parent="tasks"
				style="text-xs"
			/>
		</li>
	{/each}
</div>
