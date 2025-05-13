import { env } from "$env/dynamic/private";

export interface YoutubeVideo {
    embedUrl: string;
    title: string;
    videoUrl: string;
}

export async function getYoutubeVideos () {
    const videosWithoutDuration = await getVideosFromApi();

    const videoUrls: YoutubeVideo[] = [];
    let videosFound = 0;
    const videosToFind = 3;

    for (const video of videosWithoutDuration) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=${video.id}&key=${env.YOUTUBE_API_KEY}`);

        const json = await response.json();
        const duration = json.items[0].contentDetails.duration;
        const match = duration.match(/PT(\d+)S/);

        if (!match) {
            videosFound++;
            videoUrls.push({embedUrl: `https://www.youtube.com/embed/${video.id}`, title: video.title, videoUrl: `https://www.youtube.com/watch?v=${video.id}`});
        }

        if (videosFound === videosToFind) {
            return videoUrls;
        }
    }

    return videoUrls;
}

async function getVideosFromApi () {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUfd1oMzWrciuc0EZZtKoFxA&key=${env.YOUTUBE_API_KEY}`;

    const response = await fetch(url);
    const json = await response.json();
    const videos= [];

    for (const item of json.items) {
        videos.push({id : item.snippet.resourceId.videoId, title : item.snippet.title});
    }

    return videos;
}

