import { Storage } from '@google-cloud/storage';
const storage = new Storage();

export async function getFile(bucket: string, file: string) {
    const contents = await storage.bucket(bucket).file(file).download();
    
    return {
        text: contents.toString()
    };
}


export async function getFilesForDirectory(bucketName: string, path: string) {
    const [files] = await storage.bucket(bucketName).getFiles({prefix: path});
    
    return files;
}