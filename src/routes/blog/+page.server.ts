import { getFilesForDirectory } from "$lib/scripts/googleCloud";
const bucketName = 'zachdnichols.com';

export interface BlogMetadata {
    title: string, 
    slug: string,
    date: string, 
    tags: string[],
    description: string,
    image: string,
    published: boolean,
}

export async function load() {
    const files = await getFilesForDirectory(bucketName, 'metadata/');
    
    const metadataFiles = files.filter(file => file.name.endsWith('.json'));
    
    const blogMetadata = await Promise.all(
        metadataFiles.map(async (file) => {
        const contents = await file.download();
        const text = contents[0].toString();
        const json = JSON.parse(text);
        return json as BlogMetadata;
    }));
    
    return {
        metadata: blogMetadata
    }
}