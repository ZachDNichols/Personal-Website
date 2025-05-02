<script lang="ts">
	import '../app.css';
	import Navbar from '../components/nav/navbar.svelte'
	let { children } = $props();
</script>

<Navbar />
<div class="fixed min-h-screen min-w-screen -z-50 bg-white"></div>

<main class="flex flex-col items-center justify-center pt-10">
    {@render children()}
</main>
