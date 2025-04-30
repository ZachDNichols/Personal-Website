<script lang="ts">
	import '../app.css';
	import Navbar from '../components/nav/navbar.svelte'
	let { children } = $props();
</script>

<Navbar />

{@render children()}