<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import '@fontsource/merriweather/900.css';
	// import '@fontsource/merriweather/700.css';
	import '@fontsource/inter';

	import Circle from './images/circle.svg';
	import Triangle from './images/tri.svg';
	import Square from './images/square.svg';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={Circle} />
	<title
		>{$page.url.pathname === '/'
			? "Home | Nick's Personal Blog"
			: $page.url.pathname + " | Nick's Personal Blog"}</title
	>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div class="overflow-hidden">
	<div class="relative max-w-screen-xl py-8 mx-auto text-xl md:py-16">
		<div class={$page.url.pathname === '/' ? 'invisible' : ''}>
			<div class="absolute z-0 object-cover w-[20rem] -top-48 -left-32 opacity-50">
				<img src={Circle} alt="blob decorative shape" class="fade-in" />
			</div>
			<div class="absolute z-0 object-cover w-[12rem] -top-48 right-56 opacity-90 ">
				<img src={Triangle} alt="blob 2decorative shape" class="fade-in" />
			</div>
			<div class="absolute z-0 object-cover w-[20rem] -right-48 -top-24 rotate-45 opacity-70">
				<img src={Square} alt="blob decorative shape" class="fade-in" />
			</div>
		</div>
		<nav class="flex flex-row justify-between mx-4">
			<a href="/" class="z-50">
				<h1 class=" text-title-responsive">Nick Lind</h1>
			</a>
			<h2 class="z-50 my-auto space-x-4 text-lg md:text-2xl md:space-x-16">
				<a href="/archive">Archive</a>
				<a href="mailto: abc@example.com" class="px-4 py-2 text-white bg-emerald-900">Contact </a>
			</h2>
		</nav>
	</div>
</div>
<main>
	<slot />
</main>
<footer class="flex flex-col max-w-screen-xl mx-auto">
	<div class="h-16 mx-2 border-t-4 md:mx-10 border-emerald-900">
		<h2 class="my-auto">© 2022 Nick Lind</h2>
	</div>
</footer>
