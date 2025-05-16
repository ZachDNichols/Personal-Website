<script lang="ts">
	import '../app.css';
    import Navbar from '$lib/components/nav/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
    <title>Zach Nichols | Software Engineer, Thespian, and Video Maker</title>
    <meta name="description" content="Zach Nichols is a software engineer, thespian, and video maker. This is his personal website." />
    <meta name="keywords" content="Zach Nichols, Zach D. Nichols, Zachary Nichols, Zachary D. Nichols, Zachary Dean Nichols, Zachary Dean D. Nichols, Zachary Dean D. Nichols, Zachary Dean D. Nicholls, Zachary Dean D. Nicholls, Zachary Dean D. Nicholles, Zachary Dean D. Nicholles, Zachary Dean D. Nicholles, Zachary Dean D. Nicholles" />
    <meta name="author" content="Zach Nichols" />
    
    <meta name="og:title" content="Zach Nichols | Software Engineer, Thespian, and Video Maker" />
    <meta name="og:description" content="Zach Nichols is a software engineer, thespian, and video maker. This is his personal website." />
    <meta name="og:image" content="https://zachdnichols.com/images/preview.png"/>
    <meta name="og:image:alt" content="Zach Nichols' personal website"/>
    <meta name="og:url" content="https://zachnichols.com"/>
    <meta name="og:type" content="website" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Zach Nichols | Software Engineer, Thespian, and Video Maker" />
    <meta name="twitter:description" content="Zach Nichols is a software engineer, thespian, and video maker. This is his personal website." />
    <meta name="twitter:image" content="https://zachdnichols.com/images/preview.png"/>
    <meta name="twitter:image:alt" content="Zach Nichols' personal website"/>
    <meta name="twitter:url" content="https://zachnichols.com" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<Navbar />

<div class="fixed min-h-screen min-w-screen w-screen h-screen -z-100 bg-white dark:bg-gray-900"></div>

<main class="flex flex-col items-center justify-center pt-8 font-pixel-primary">
    {@render children()}
</main>

<Footer />
