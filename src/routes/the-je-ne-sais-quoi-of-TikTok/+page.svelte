<script>
	var date = 'September 13, 2022';
	var time = '13';
	var title = 'The “je ne sais quoi” of TikTok';
	var description = 'How a misunderstood platform has completely taken over the world.';
	var body = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `;
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
	<div class="pl-24 ml-12 whitespace-pre-wrap text-slate-900 ">{body}</div>
</div>
