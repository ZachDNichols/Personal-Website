<script>
    let { label, icon, route, viewBoxHeight = "24", viewBoxWidth = "24" } = $props();
</script>

    <a class="align-center justify-center items-center duration-300 ease-in-out hover:shadow-lg hover:scale-110 bg-primary border-primary hover:bg-gray-800 text-white border-6 rounded-xl hover:border-gray-800" href={route} target="_blank" aria-label={label}>
        <svg width="30" height="30" viewBox="0 0 {viewBoxWidth} {viewBoxHeight}" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <title>{label}</title>
            <path d={icon} fill="currentColor"/>
        </svg>
    </a>
