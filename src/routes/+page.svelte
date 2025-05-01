<script lang="ts">
    interface Video {
        url: string;
        title: string;
    }
    
    let { data } = $props<{ videos: Video[] }>();

    console.log(data);
    console.log(data.videos);
</script>

<div class="w-11/12 flex flex-row items-center justify-center m-2">
    <img alt="Zach Nichols, the creator, owner, and maintainer of this website" src="/images/TransparentHeadshot.webp" class="max-w-1/4 w-150"/>
    <div class="flex flex-col">
        <h1 class="font-bold w-full text-4xl">Zach Nichols</h1>
        <p >Zach Nichols is a guy who exists in the world.</p>
    </div>
</div>

<div class="grid grid-cols-3 w-11/12">
    {#if data || data.videos.length > 0}
        {#each data.videos as video (video.url)}
            <div class="flex flex-col">
                <h2 class="font-bold text-2xl">{video.title}</h2>
                <p>{video.url}</p>
            </div>
        {/each}
    {:else}
        <p class="text-red-500">No videos found.</p>
    {/if}
</div>