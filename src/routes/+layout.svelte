<script lang="ts">
	import '../app.css';
	import Navbar from '../components/nav/navbar.svelte'
	let { children } = $props();
</script>

<Navbar />
<div class="fixed min-h-screen min-w-screen -z-50 bg-gray-700"></div>

<main class="pt-20 flex flex-col items-center justify-center">
    {@render children()}
</main>
