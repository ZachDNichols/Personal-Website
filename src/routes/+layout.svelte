<script lang="ts">
	import '../app.css';
    import Navbar from '$lib/components/nav/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';
    import { onMount } from 'svelte';
    import { env } from '$env/dynamic/public';

	let { children } = $props();

    onMount(() => {
        if (env.PUBLIC_ENVIRONMNET === 'beta' && document.querySelector('main') !== null) {
            document.querySelector('main')?.classList.add('pt-10');
        }
        else
        {
            document.querySelector('main')?.classList.add('pt-5');
        }
    });
</script>

<div class="flex flex-col min-h-screen">
    <Navbar />

    <main class="flex flex-col items-center align-middle font-pixel-primary flex-1">
        {@render children()}
    </main>

    <Footer />
</div>