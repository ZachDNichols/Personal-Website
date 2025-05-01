<script lang="ts">
    interface Video {
        url: string;
        title: string;
    }
    
    let { data } = $props<{ videos: Video[] }>();

    console.log(data);
    console.log(data.videos);
</script>

<div class="flex flex-row items-center justify-center m-10">
    <img alt="Zach Nichols, the creator, owner, and maintainer of this website" src="/images/TransparentHeadshot.webp" class="max-w-1/2 w-150"/>
    <div class="flex flex-col">
        <h1 class="font-bold w-full text-4xl">Zach Nichols</h1>
        <p >Zach Nichols is a guy who exists in the world.</p>
    </div>
</div>

<h2 class="text-6xl font-bold">Videos</h2>
<div class="grid grid-cols-3 w-full">
    {#if data && data.videos.length > 0}
        {#each data.videos as video (video.url)}
            <div class="w-full rounded-lg overflow-hidden gap-6 p-6">
                <div class="flex flex-row items-center justify-center h-16">
                    <h2 class="text-2xl font-bold mb-4 text-center">{video.title}</h2>
                </div>
                <div class="relative pt-[56.25%] shadow-lg">
                    <iframe 
                            class="absolute top-0 left-0 w-full h-full" 
                            src={video.url} 
                            title={video.title}
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                    ></iframe>
                </div>
            </div>
        {/each}
    {:else}
        <p class="text-red-500">No videos found.</p>
    {/if}
</div>