import {YOUTUBE_API_KEY} from "$env/static/private";

interface Video {
    url : string;
    title : string;
}

export async function load() {
    try {
       const videoList = await GetVideos();
         return {
                videos : videoList
          };
    }
    catch (error) {
        console.log(error);
        return {
            videos : []
        };
    }
}

async function GetVideos () {
    const videosWithoutDuration = await GetVideosWithoutDuration();

    const videoUrls: Video[] = [];
    let videosFound = 0;

    for (const video of videosWithoutDuration) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=${video.id}&key=${YOUTUBE_API_KEY}`);

        const json = await response.json();
        const duration = json.items[0].contentDetails.duration;
        const match = duration.match(/PT(\d+)S/);

        if (!match) {
            videosFound++;
            videoUrls.push({ url : `https://www.youtube.com/watch?v=${video.id}`, title : video.title});
        }

        if (videosFound === 3) {
            return videoUrls;
        }
    }
    
    return videoUrls;
}

async function GetVideosWithoutDuration () {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUfd1oMzWrciuc0EZZtKoFxA&key=${YOUTUBE_API_KEY}`;

    const response = await fetch(url);
    const json = await response.json();
    const videos= [];

    for (const item of json.items) {
        videos.push({id : item.snippet.resourceId.videoId, title : item.snippet.title});
    }

    return videos;
}