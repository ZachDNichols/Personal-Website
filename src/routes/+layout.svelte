<script lang="ts">
	import '../app.css';
	import Navbar from '../components/nav/navbar.svelte'
    import Footer from '../components/footer.svelte';
    
	let { children } = $props();
</script>

<Navbar />

<div class="fixed min-h-screen min-w-screen w-screen h-screen -z-100 bg-white dark:bg-gray-900"></div>

<main class="flex flex-col items-center justify-center pt-20">
    {@render children()}
</main>

<Footer />
