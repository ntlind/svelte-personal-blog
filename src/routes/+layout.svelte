<script lang="ts">
	import '../app.css';
	import '@fontsource/merriweather/900.css';
	import '@fontsource/merriweather/700.css';
	import '@fontsource/inter';

	import Circle from '/images/circle.svg';
	import Triangle from '/images/tri.svg';
	import Square from '/images/square.svg';
</script>

<div class="overflow-hidden">
	<div class="relative max-w-screen-xl py-10 pb-12 mx-auto text-xl">
		<div class="absolute z-0 object-cover w-[20rem] -top-48 -left-32 opacity-90">
			<img src={Circle} alt="blob decorative shape" />
		</div>
		<div class="absolute z-0 object-cover w-[12rem] -top-48 right-56 opacity-50 rotate-45 ">
			<img src={Triangle} alt="blob 2decorative shape" />
		</div>
		<div class="absolute z-0 object-cover w-[20rem] -right-48 -top-24 rotate-12 opacity-70">
			<img src={Square} alt="blob decorative shape" />
		</div>
		<nav class="flex flex-row justify-between">
			<a href="/" class="z-50">
				<h1 class=" text-title-responsive">Nick Lind</h1>
			</a>
			<h2 class="z-50 invisible my-auto space-x-16 text-2xl sm:visible">
				<a href="/about">About</a>
				<a href="/settings" class="px-4 py-2 text-white bg-emerald-900"> Contact </a>
			</h2>
		</nav>
	</div>
</div>
<main>
	<slot />
</main>
