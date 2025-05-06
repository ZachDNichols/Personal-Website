<script>
    import NavItem from "./nav-item.svelte";
</script>

<nav class="fixed flex flex-row items-center justify-between top-0 left-0 right-0 h-16 backdrop-blur-3xl">
    <div class="bg-primary fixed w-full opacity-75 z-50 h-16 border-10 border-primary shadow-xl "></div>
    <a class="m-4 z-50 text-2xl font-bold text-white transition-all hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-[.2rem] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 after:rounded-xs" href="/">ZACHDNICHOLS</a>
    <div class="flex flex-row justify-right items-center top-0 left-0 right-0 m-2 z-50">
        <NavItem route="/blog" title="Blog"></NavItem>
    </div>
</nav>