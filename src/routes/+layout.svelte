<script lang="ts">
	import '../app.css';
	import '@fontsource/merriweather';
	import '@fontsource/inter';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

<slot />

<style>
	:global(html) {
		font-family: 'Inter', sans-serif;
	}
	:global(h1),
	:global(h2) {
		font-family: 'Merriweather', sans-serif;
	}
</style>
