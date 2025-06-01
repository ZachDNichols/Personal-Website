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
            <SocialIcon label="TikTok" route="https://www.tiktok.com/@zachdnichols" icon="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            <SocialIcon label="BlueSky" route="https://bsky.app/profile/zachdnichols.bsky.social" icon="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
            <SocialIcon label="Threads" route="https://www.threads.com/@zachdnichols" icon="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
            <SocialIcon label="Facebook" route="https://www.facebook.com/zach.nichols.7587" icon="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
            <SocialIcon label="Reddit" route="https://www.reddit.com/user/MrFishward/" icon="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/>
        </div>
        <SocialIconWithText label="Discord" text="mrfishward" icon="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
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
