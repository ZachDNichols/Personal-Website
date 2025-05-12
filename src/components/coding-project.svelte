<script>
    import {handleImageError} from "$lib/scripts/errorHandling";

    let { title, description, image, url, caption = "" } = $props();
</script>

<div class="flex flex-col items-center justify-items-start mt-5 mr-10 ml-10 w-11/12 hidden-animation">
    <h3 class="text-2xl font-bold">{title}</h3>
    <p class="text-center bg-gray-800 rounded-2xl w-full m-2 p-2">{description}</p>
    <img src={image} onerror="{handleImageError}" alt={title} class="justify-center shadow-lg rounded" />
    <p class="text-center text-xs mb-1">{caption}</p>
    <a href="{url}" class="text-sm mb-4 p-1 transition-all duration-300 ease-in-out underline">View on GitHub</a>
</div>