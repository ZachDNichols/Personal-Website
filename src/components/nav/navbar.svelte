<script>
    import NavItem from "./nav-item.svelte";
    import NavSpacer from "./nav-spacer.svelte";
</script>

<nav class="fixed flex flex-row items-center justify-between top-0 left-0 right-0 h-16 backdrop-blur-3xl">
    <div class="bg-primary fixed w-full opacity-75 z-50 h-16 border-10 border-primary shadow-l"></div>
    <a class="m-4 z-50 text-2xl font-bold text-white" href="/">ZACHDNICHOLS</a>
    <div class="flex flex-row justify-right items-center top-0 left-0 right-0 m-2 z-50">
        <NavItem route="/contact" title="Contact"></NavItem>
        <NavSpacer />
        <NavItem route="/blog" title="Blog"></NavItem>
    </div>
</nav>