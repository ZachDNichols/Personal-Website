import { findFile } from "$lib/scripts/googleCloud";

export async function load() {
    const value = await findFile('zachdnichols.com', 'text.txt');
    if (value.status === 200) {
        return {
            text: value.body!.toString()
        };
    }
    return {
        text: 'File not found'
    };
}