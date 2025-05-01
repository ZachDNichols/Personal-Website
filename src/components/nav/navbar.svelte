<script>
    import NavItem from "./nav-item.svelte";
    import NavSpacer from "./nav-spacer.svelte";
</script>

<nav class="z-50 bg-primary fixed flex flex-row items-center justify-between top-4 left-4 right-4 border-10 border-primary rounded">
    <a href="/">ZACHDNICHOLS</a>
    <div class="justify-right">
        <NavItem route="/contact" title="Contact"></NavItem>
        <NavSpacer />
        <NavItem route="/blog" title="Blog"></NavItem>
    </div>
</nav>