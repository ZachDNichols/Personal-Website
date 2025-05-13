<script>
    let { title, route } = $props();
</script>

<a class="font-bold text-white text-2xl m-2 select-none transition-all hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-[.2rem] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 after:rounded-xs" href={route}>{title}</a>