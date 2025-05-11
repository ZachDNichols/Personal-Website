import {type DownloadResponse, Storage} from '@google-cloud/storage';

interface Response {
    status: number;
    body: DownloadResponse | null;
}

export async function findFile(bucket: string, file: string) {
    const value = await downloadIntoMemory(bucket, file);
    
    
    let response: Response;
    
    if (value) {
        response = {
            status: 200,
            body: value
        };
    } else {
        response = {
            status: 404,
            body: null
        };
    }
    
    return response;
}

async function downloadIntoMemory(bucketName : string, fileName: string) {
    
    const storage = new Storage();
    
    const contents = await storage.bucket(bucketName).file(fileName).download();

    console.log(
        `Contents of gs://${bucketName}/${fileName} are ${contents.toString()}.`
    );
    
    return contents;
}