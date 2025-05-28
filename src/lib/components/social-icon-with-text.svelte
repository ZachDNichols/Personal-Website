<script>
    let { label, icon, route="", viewBoxHeight = "24", viewBoxWidth = "24", text="" } = $props();
</script>

{#if route.length > 0}
<a href={route} target="_blank" aria-label="{label}" class="flex flex-row items-left justify-start ml-0 border-4 border-primary rounded-xl bg-primary p-2 mt-4 text-white duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:bg-gray-800 hover:border-gray-800">
    <svg role="img" width="30" height="30" viewBox="0 0 {viewBoxHeight} {viewBoxWidth}" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Discord</title>
        <path fill="currentColor" d={icon}/>
        <title>{label}</title>
    </svg>
    <p class="font-bold ml-1 text-lg">{text}</p>
</a>
{:else}
    <div class="flex flex-row items-left justify-start ml-0 border-4 border-primary rounded-xl bg-primary p-2 mt-4 text-white">
        <svg role="img" width="30" height="30" viewBox="0 0 {viewBoxHeight} {viewBoxWidth}" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Discord</title>
            <path fill="currentColor" d={icon}/>
            <title>{label}</title>
        </svg>
        <p class="font-bold ml-1 text-lg">{text}</p>
    </div>
{/if}