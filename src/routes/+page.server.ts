import { getYoutubeVideos } from "$lib/scripts/youtubeVideos";

export async function load() {
    try {
       const videoList = await getYoutubeVideos();
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