<script>
	export let data;
	let entries = Object.values(data.posts).slice(1, 5);
	let links = ['GitHub', 'LinkedIn', 'HackerNews', 'Goodreads'];
</script>

<div class="max-w-screen-xl mx-auto">
	<h1 class="flex flex-col text-title-responsive  h-[40vh] pb-6">
		<div class="mx-6 my-auto md:mx-20 lg:mx-32">
			<div>I’m a developer & designer.</div>
			<div>Currently based anywhere.</div>
			<div>I love building products.</div>
		</div>
	</h1>
	<div class="mx-2 font-bold underline uppercase md:mx-10">Latest Posts</div>
	<div class="flex flex-col mx-2 mb-12 md:space-x-12 md:mx-10 md:grid md:grid-cols-12">
		<div class="flex flex-col justify-between col-span-8">
			{#each entries as post, i}
				<div
					class="flex flex-col justify-center h-24 align-middle border-b-2 border-emerald-900 grow"
				>
					<h1 class="text-3xl tracking-tight">{post.attributes.title}</h1>
					<div class="flex flex-row text-base md:text-lg text-slate-500">
						{post.attributes.date} · {Math.round(post.html.split(' ').length / 238)} minute read
					</div>
				</div>
			{/each}
			<div class="justify-end py-8 text-lg text-right underline">View All Posts -></div>
		</div>
		<div
			class="grid grid-cols-12 col-span-4 space-x-2 md:space-x-0 md:space-y-4 md:flex md:flex-col"
		>
			<div class="col-span-6 px-6 py-6 space-y-2 text-2xl text-white bg-green-900">
				<h1 class="text-white">Find me elsewhere</h1>
				{#each links as link}
					<div class="text-base">• <span class="underline">{link}</span></div>
				{/each}
			</div>
			<div class="flex flex-col col-span-6 px-6 py-6 space-y-2 border-4 border-emerald-900">
				<h1 class="text-2xl">🔔 Get Notified</h1>
				<div>Receive an email every new post. No more, no less.</div>
				<input
					class="border-b-2 text-emerald-900 border-emerald-900"
					placeholder="your_email@example.com"
				/><button class="py-2 text-sm text-white uppercase bg-emerald-900 ">Subscribe</button>
			</div>
		</div>
	</div>
</div>
