<script lang="ts">
    interface Video {
        url: string;
        title: string;
    }
    
    let { data } = $props<{ videos: Video[] }>();
</script>

<div class="flex flex-row items-start justify-start m-20">
    <img alt="Zach Nichols, the creator, owner, and maintainer of this website" src="/images/TransparentHeadshotCropped.webp" class="max-w-1/2 w-150 bg-primary rounded-2xl border-primary border-t-30 shadow-2xl"/>
    <div class="flex flex-col items-start justify-center w-1/2 m-20">
        <h1 class="font-bold w-full text-4xl">Zach Nichols</h1>
        <p >Zach Nichols is a guy who exists in the world.</p>
    </div>
</div>

<div class="flex flex-col items-center justify-center w-full">
    <h2 class="text-6xl font-bold m-4">Videos</h2>
    <p>Sometimes I do this YouTube thing. Here are my latest uploads!</p>
</div>
<div class="grid grid-cols-3 w-full">
    {#if data && data.videos.length > 0}
        {#each data.videos as video (video.url)}
            <div class="w-full overflow-hidden gap-6 p-6">
                <div class="flex flex-row items-center justify-center h-16">
                    <h2 class="text-xl font-bold text-center">{video.title}</h2>
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