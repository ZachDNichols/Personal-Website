<script>
    import {handleImageError} from "../scripts/errorHandling.js";

    let { title, description, image, url, caption = "" } = $props();
</script>

<div class="flex flex-col items-center justify-items-start mt-10 mr-10 ml-10 w-1/2">
    <h3 class="text-2xl font-bold">{title}</h3>
    <p class="text-center">{description}</p>
    <img src={image} onerror="{handleImageError}" alt={title} class="justify-center shadow-2xl rounded" />
    <p class="text-center text-sm">{caption}</p>
    <a href="{url}" class="mb-4 text-white bg-primary rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:font-bold hover:translate-y-[-1.5] m-4">View on GitHub</a>
</div>