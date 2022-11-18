<script>
	import '../app.css';
	import '@fontsource/questrial';
	import '@fontsource/inter';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

<slot />

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
	:global(h1),
	:global(h2) {
		font-family: 'Questrial', sans-serif;
	}

	h1 {
		font-weight: 400;
		font-size: 800px;
	}
	h2 {
		font-weight: 700;
	}
</style>
