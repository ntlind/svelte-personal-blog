<script>
	export let data;
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
</div>
