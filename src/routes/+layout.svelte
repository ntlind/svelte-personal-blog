<script lang="ts">
	import '../app.css';
	import '@fontsource/merriweather/900.css';
	import '@fontsource/merriweather/700.css';
	import '@fontsource/inter';
</script>

<div class="max-w-screen-xl mx-auto my-6 text-xl lg:my-14">
	<nav class="flex flex-row justify-between">
		<a href="/">
			<h1 class=" text-title-responsive">Nick Lind</h1>
		</a>
		<h2 class="invisible my-auto space-x-4 text-2xl sm:visible">
			<a href="/about">About</a>
			<a href="/settings">Settings</a>
		</h2>
	</nav>
</div>

<slot />

<style>
	:root {
		--font-min: 16px;
		--font-preferred: 0.8vw;
		--font-max: 24px;
		--title-min: 12px;
		--title-preferred: 6vw;
		--title-max: 52px;
		--lineheight-multiplier: 1.4;
	}

	:global(html) {
		font-family: 'Inter', sans-serif;
	}
	:global(h1) {
		font-family: 'Merriweather', sans-serif;
		@apply text-green-900 font-black tracking-tighter;
	}
	:global(h2) {
		font-family: 'Merriweather', sans-serif;
		@apply text-green-900 font-bold;
	}

	.text-contrast {
		color: #fff;
		mix-blend-mode: difference;
	}
	.text-title-responsive {
		font-size: clamp(var(--title-min), var(--title-preferred), var(--title-max));
		line-height: clamp(
			--lineheight-multipler * var(--title-min),
			--lineheight-multipler * var(--title-preferred),
			--lineheight-multipler * var(--title-max)
		);
	}
	.text-responsive {
		font-size: clamp(var(--font-min), var(--font-preferred), var(--font-max));
		line-height: clamp(
			--lineheight-multipler * var(--font-min),
			--lineheight-multipler * var(--font-preferred),
			--lineheight-multipler * var(--font-max)
		);
	}
</style>
