<script>
    import { page }  from '$app/state'
    import {env} from "$env/dynamic/public";
</script>

{#if page.status === 200}
    <div class="flex flex-col relative w-full z-50">
        {#if (env.PUBLIC_ENVIRONMNET === 'beta')}
            <div class="absolute top-0 left-0 w-full h-8 bg-red-800 z-50">
                <p class="text-white text-center font-bold text-xl">Beta Version</p>
            </div>
        {/if}

        <nav class="relative flex flex-row items-center justify-center top-0 left-0 w-full h-16 z-50">
            <div class="bg-primary absolute w-full h-16 border-10 border-primary shadow-xl"></div>
            <p class="m-4 z-50 text-2xl font-bold text-white transition-all relative select-none">ZACHDNICHOLS.COM</p>
        </nav>
    </div>
{/if}