<script lang="ts">
    let { data } = $props();
</script>


{#each data.metadata as post}
    <div class="flex flex-col items-center justify-items-start mt-5 mr-10 ml-10 w-11/12">
        <h3 class="text-2xl font-bold">{post.title}</h3>
    </div>
{/each}
    