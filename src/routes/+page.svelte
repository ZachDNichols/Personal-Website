<script lang="ts">
    import type { YoutubeVideo } from "$lib/scripts/youtubeVideos";
    import SocialIcon from "$lib/components/social-icon.svelte";
    import CodingProject from "$lib/components/coding-project.svelte";
    import SocialIconWithText from "$lib/components/social-icon-with-text.svelte";
    
    import { animateIntersections } from "$lib/scripts/AnimateIntersections";
    import {onMount} from "svelte";


    let { data } = $props<{ videos: YoutubeVideo[] }>();

    let websiteImageAddress = $state("/images/projectPhotos/website-preview-light.png");
    
    onMount(() => {
        animateIntersections();

        const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
        
        websiteImageAddress = darkMode.matches ?
            "/images/projectPhotos/website-preview-dark.png" :
            "/images/projectPhotos/website-preview-light.png";
        
        darkMode.addEventListener('change', event => {
            websiteImageAddress = event.matches ?
                "/images/projectPhotos/website-preview-dark.png" :
                "/images/projectPhotos/website-preview-light.png";
        });
    });
</script>

<svelte:head>
    <title>Zach Nichols | Software Engineer, Thespian, and Video Maker</title>
    <meta name="description" content="Zach Nichols is a software engineer, thespian, and video maker. This is his personal website." />
    <meta name="keywords" content="Zach Nichols, Zach D. Nichols, Zachary Nichols, Zachary D. Nichols, Zachary Dean Nichols, Zachary Dean D. Nichols, Zachary Dean D. Nichols, Zachary Dean D. Nicholls, Zachary Dean D. Nicholls, Zachary Dean D. Nicholles, Zachary Dean D. Nicholles, Zachary Dean D. Nicholles, Zachary Dean D. Nicholles" />
    <meta name="author" content="Zach Nichols" />
    <meta name="title" content="Zach Nichols | Software Engineer, Thespian, and Video Maker" />

    <meta name="og:title" content="Zach Nichols | Software Engineer, Thespian, and Video Maker" />
    <meta name="og:description" content="Zach Nichols is a software engineer, thespian, and video maker. This is his personal website." />
    <meta name="og:image" content="https://zachdnichols.com/images/preview.png"/>
    <meta name="og:image:alt" content="Zach Nichols' personal website"/>
    <meta name="og:url" content="https://zachdnichols.com"/>
    <meta name="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Zach Nichols | Software Engineer, Thespian, and Video Maker" />
    <meta name="twitter:description" content="Zach Nichols is a software engineer, thespian, and video maker. This is his personal website." />
    <meta name="twitter:image" content="https://zachdnichols.com/images/preview.png"/>
    <meta name="twitter:image:alt" content="Zach Nichols' personal website"/>
    <meta name="twitter:url" content="https://zachdnichols.com" />
</svelte:head>

<div class="flex flex-col items-center dark:text-white lg:flex-row lg:m-20 lg:mt-5 lg:mb-10 lg:items-start lg:justify-center lg:w-11/12 lg:p-20 lg:pt-0 lg:pb-0">
    <img loading="lazy" alt="Zach Nichols, the creator, owner, and maintainer of this website" src="/images/Zach-Nichols.webp" class="max-w-1/2 w-150 bg-primary rounded-2xl border-primary border-t-30 shadow-2xl hidden-animation"/>
    <div class="flex flex-col items-center justify-center text-center w-11/12 mt-10 row hidden-animation lg:w-full lg:mt-0 lg:m-10 lg:text-left lg:justify-items-normal lg:items-start xl:pt-10">
        <h1 class="font-bold w-full text-5xl hidden-animation">ZACH NICHOLS</h1>
        <h2 class="text-3xl font-bold mt-4 hidden-animation ">ABOUT</h2>
        <p class="mt-1 mb-4 hidden-animation">Zach Nichols is a programmer, theater enthusiast, and all-around creative. While his day job is in programming, he spends his free time acting in local plays, enjoying the outdoors, and pursuing other creative endeavors like YouTube and photography. Feel free to explore the website for more information or follow him on social media below!</p>
        <div class="flex flex-col items-center text-center justify-center w-full mb-4 hidden-animation lg:w-full lg:text-left lg:justify-items-normal lg:items-start">
            <h3 class="font-bold w-full text-3xl mt-2 mb-2 hidden-animation lg:mb-0">SOCIALS</h3>
            <p>Feel free to follow me on social media!</p>
        </div>
        <div class="flex flex-wrap items-center justify-center align-middle w-11/12 lg:w-full gap-2 hidden-animation lg:justify-items-normal lg:justify-start lg:items-start">
            <SocialIcon label="Instagram" route="https://www.instagram.com/zachdnichols" icon="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></SocialIcon>
            <SocialIcon label="YouTube" route="https://www.youtube.com/@zachdnichols" icon="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            <SocialIcon label="GitHub" route="https://github.com/ZachDNichols" icon="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            <SocialIcon label="LinkedIn" route="https://www.linkedin.com/in/zach-nichols-8bb2b8207/" viewBoxHeight="16" viewBoxWidth="16" icon="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            <SocialIcon label="Facebook" route="https://www.facebook.com/zach.nichols.7587" icon="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </div>
        <SocialIconWithText label="Discord" text="mrfishward" route="https://discordapp.com/users/358033640904720386" icon="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        <div class="flex flex-col items-center justify-center w-full mt-4 text-center hidden-animation lg:jusify-items-normal lg:items-start lg:text-left">
            <h3 class="font-bold w-full text-3xl mt-2 mb-2">CONTACT</h3>
            <p>Where to reach out!</p>
        </div>
        <div class="flex flex-wrap items-center justify-center align-middle gap-2 hidden-animation lg:justify-items-normal lg:justify-start lg:items-start">
            <SocialIconWithText text="Email" label="Email" viewBoxWidth="1920" viewBoxHeight="1920" route="mailto:zachdnichols@gmail.com" icon="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"/>
        </div>
    </div>
</div>

<div class="flex flex-col items-center justify-center w-11/12 mb-0 mt-15 dark:text-white hidden-animation">
    <h2 class="text-6xl font-bold mt-4">VIDEOS</h2>
    <p class="text-center">Sometimes I do this YouTube thing. Here are my latest uploads!</p>
</div>
{#if data && data.videos.length > 0}
    <div class="flex flex-col w-11/12 dark:text-white justify-center items-center hidden-animation lg:grid lg:grid-cols-3">

        {#each data.videos as video (video.embedUrl)}
            <div class="w-full justify-center items-center text-center overflow-hidden gap-6 p-6 md:p-10 lg:p-4 lg:gap-4">                <div class="flex flex-row items-center justify-center w-full mb-2 lg:h-18">
                    <a href={video.videoUrl} class="text-xl font-bold text-center border-6 transition-all ease-in-out duration-150 bg-transparent border-transparent hover:bg-primary hover:shadow-lg hover:scale-105 hover:text-white relative rounded-lg">{video.title}</a>
                </div>
                <div class="relative pt-[56.25%] shadow-lg">
                    <iframe
                            class="absolute top-0 left-0 w-full h-full" 
                            src={video.embedUrl} 
                            title={video.title}
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            loading="lazy"
                    ></iframe>
                </div>
            </div>
        {/each}
    </div>
{:else}
    <p class="text-red-500 text-center uppercase">No videos found.</p>
{/if}

<div class="flex flex-row items-center justify-center w-full dark:text-white hidden-animation"> 
    <a class="mb-4 text-2xl font-bold text-white bg-primary rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:translate-y-[-1.5] uppercase" target="_blank" href="https://www.youtube.com/@zachdnichols">See more on YouTube</a>
</div>

<div class="flex flex-col items-center justify-center w-full mb-4 mt-15 lg:mb-0 dark:text-white hidden-animation">
    <h2 class="text-6xl font-bold m-4 text-center uppercase">Coding Projects</h2> 
    <p>I do a little coding... Here are my favorites!</p>
</div>
<div class="flex flex-col w-11/12 justify-center align-center items-center text-left dark:text-white hidden-animation lg:grid lg:grid-cols-2 lg:justify-evenly lg:items-start lg:w-11/12">
    <CodingProject 
        title="Personal Website"
        description="This website! Built with SvelteKit, TailwindCSS, and TypeScript."
        image = {websiteImageAddress}
        url="https://github.com/ZachDNichols/Personal-Website"
        caption="Woah, that's a bit meta. Seeing a photo of the website you're on right now? Crazy!"
        altText="A screenshot of the homepage of this website, showing a photo of Zach Nichols and some text about him."
    />
    <CodingProject
            title="LiDAR"
            description="A short demo for a video game developed in Unreal Engine 5. The player wields a LiDAR gun and creates a point cloud of their environment. Currently on pause, but I may revisit it in the future."
            image = "/images/projectPhotos/LiDAR-In-Editor.png"
            url="https://github.com/ZachDNichols/LiDAR"
            caption="Image of the editor window for LiDAR. The player can shoot a LiDAR gun."
            altText="A screenshot of the Unreal Engine 5 editor window, showing the LiDAR gun and part of the level."
    />
    
</div>

<a href="https://github.com/ZachDNichols?tab=repositories" class=" mb-20 uppercase text-2xl text-white bg-primary rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl font-bold hover:translate-y-[-1.5] m-4">See more on Github</a>
