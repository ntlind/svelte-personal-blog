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

<div class="flex flex-col mx-auto space-y-6 text-xl max-w-prose">
	<div class="flex flex-row text-slate-500">{date} · {time} minute read</div>
	<h1 class="text-6xl tracking-tight">{title}</h1>
	<h2 class="w-9/12 text-2xl font-normal tracking-wide text-slate-700">{description}</h2>
	<div class="pt-4">
		<svg viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
			<line x1="0" y1="0" x2="15" y2="0" stroke="#40E0D0" stroke-width="10" stroke-opacity="50%" />
		</svg>
	</div>
	<div class="pl-24 ml-12 whitespace-pre-wrap text-slate-900 ">{@html body}</div>
</div>
