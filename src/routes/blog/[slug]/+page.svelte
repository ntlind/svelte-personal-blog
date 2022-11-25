<script>
	export let data;
	let entries = Object.values(data.posts).slice(1, 4);

	$: posts = data.posts;
	$: slug = data.slug;
	$: post = posts[slug];

	$: title = post.attributes.title;
	$: date = post.attributes.date;
	$: time = Math.round(post.html.split(' ').length / 238);
	$: description = post.attributes.description;
	$: body = post.html;
</script>

<div class="flex flex-col mx-auto text-xl max-w-prose">
	<div class="mx-4 space-y-4">
		<div class="flex flex-row text-sm md:text-base text-slate-500">{date} · {time} minute read</div>
		<h1 class="tracking-tight text-title-responsive">{title}</h1>
		<h2 class="text-2xl tracking-wide md:w-9/12 text-slate-500">
			{description}
		</h2>
		<div class="pt-4">
			<svg viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg">
				<line
					x1="0"
					y1="0"
					x2="15"
					y2="0"
					stroke="#40E0D0"
					stroke-width="5%"
					stroke-opacity="30%"
				/>
			</svg>
		</div>
		<div class="whitespace-pre-wrap lg:ml-12 lg:pl-24 text-slate-900">{@html body}</div>
	</div>
	<div class="my-auto mt-4 mb-12 text-2xl bg-emerald-900">
		<div class="grid grid-cols-2 mx-6 my-4 space-x-12">
			<div class="col-span-1 space-y-4">
				<h2 class="text-white">
					Hey - My name is Nick Lind. I'm a designer & developer who travels the world.
				</h2>
				<h2 class="text-white">If you liked my writing, check out more posts or subscribe.</h2>
			</div>
			<div
				class="flex flex-col justify-center col-span-1 my-auto space-y-2 text-white align-middle"
			>
				<input
					class="text-sm text-white bg-emerald-900"
					placeholder="your_email@example.com"
				/><button class="py-2 text-sm uppercase bg-white text-emerald-900">Subscribe</button>
			</div>
		</div>
	</div>
</div>
<div class="mx-6">
	<div class="text-sm font-bold underline uppercase text-emerald-900">More Posts</div>
	<div class="grid grid-cols-3 mx-4 space-x-16">
		{#each entries as post, i}
			{#if i != 2}
				<div class="flex flex-col col-span-1 my-12 border-r-2 border-emerald-900">
					<div class="flex flex-row mb-2 text-sm md:text-base text-slate-500">
						{post.attributes.date} · {Math.round(post.html.split(' ').length / 238)} minute read
					</div>
					<h1 class="text-2xl tracking-tight">{post.attributes.title}</h1>
				</div>
			{:else}
				<div class="flex flex-col col-span-1 my-12">
					<div class="flex flex-row mb-2 text-sm md:text-base text-slate-500">
						{post.attributes.date} · {Math.round(post.html.split(' ').length / 238)} minute read
					</div>
					<h1 class="text-2xl tracking-tight">{post.attributes.title}</h1>
				</div>
			{/if}
		{/each}
	</div>
</div>
