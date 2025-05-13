<script>
    import { page } from '$app/state';
</script>

<h1 class="dark:text-white text-4xl font-bold">Bummer, you got a {page.status} error. That sucks.</h1>
<p class="dark:text-white text-2xl">Error message: "{page.error?.message}"</p>
<p class="dark:text-white">If you believe you should not have gotten this error, you can report it on            
    <a class="font-bold select-none transition-all hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-[.15rem] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 after:rounded-2xl" href="https://github.com/ZachDNichols/Personal-Website/issues">Github</a>.
</p>
<p class="dark:text-white">Otherwise, you can go back <a class="font-bold select-none transition-all hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-[.15rem] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 after:rounded-2xl" href="/">Home</a>.
</p>