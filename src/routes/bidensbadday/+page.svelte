<script lang="ts">
    import { onMount } from 'svelte';
    
    let unityContainer: HTMLCanvasElement;
    let unityInstance: UnityInstance;

    onMount(() => {
        console.log('Mounting Unity instance...');
        const script = document.createElement('script');
        script.src = '/BidensBadDay/Build/BidensBadDay.loader.js';
        
        
        script.onload = () => {
            createUnityInstance(unityContainer, {
                dataUrl: '/BidensBadDay/Build/BidensBadDay.data',
                frameworkUrl: '/BidensBadDay/Build/BidensBadDay.framework.js',
                codeUrl: '/BidensBadDay/Build/BidensBadDay.wasm',
            }).then((createdUnityInstance) => {
                console.log('Unity loaded:', createdUnityInstance);
                unityInstance = createdUnityInstance;
            }).catch((err) => {
                console.error('Unity load error:', err);
            });
        };
        
        document.body.appendChild(script);
    });
    
    function handleFullscreen() {
        if (unityInstance) {
            unityInstance.SetFullscreen(1);
        }
    }
</script>

<script context="module" lang="ts">
    declare function createUnityInstance(
            container: HTMLCanvasElement,
        config: {
            dataUrl: string;
            frameworkUrl: string;
            codeUrl: string;
            streamingAssetsUrl?: string;
            companyName?: string;
            productName?: string;
            productVersion?: string;
        }
    ): Promise<never>;
    
    export interface UnityInstance {
        SendMessage(gameObject: string, methodName: string, parameter?: unknown): void;
        Quit(): Promise<void>;
        SetFullscreen(fullscreen: number): void;
        [key: string]: unknown;
    }
</script>

<div class="flex flex-col items-center justify-center m-20 w-full relative">
    <canvas bind:this={unityContainer} id="unity-canvas" class="bg-black max-h-1/4 w-3/4 -z-10"></canvas>
    <div class="flex flex-row absolute bottom-2 right-[13%] z-10">
        <button on:click={handleFullscreen} class="m-4 text-white bg-primary rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:font-bold hover:translate-y-[-1.5]">
            <svg height="14px" viewBox="0 0 14 14" width="14px" xmlns="http://www.w3.org/2000/svg"><title>Fullscreen</title><desc/><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="#FFFFFF" id="Core" transform="translate(-215.000000, -257.000000)"><g id="fullscreen" transform="translate(215.000000, 257.000000)"><path d="M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z" id="Shape"/></g></g></g></svg>
        </button>
    </div>
</div>
