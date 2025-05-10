function findFile ( bucket: string, file: string){
    const bucketName = bucket;
    const fileName = file;

    const {Storage} = require('@google-cloud/storage');
    
    const storage = new Storage();
    
    downloadIntoMemory(storage, bucketName, fileName).catch(console.error);
    
}

async function downloadIntoMemory(storage : Storage, bucketName : string, fileName: string) {
    // Downloads the file into a buffer in memory.
    const contents = await storage.bucket(bucketName).file(fileName).download();

    console.log(
        `Contents of gs://${bucketName}/${fileName} are ${contents.toString()}.`
    );
}