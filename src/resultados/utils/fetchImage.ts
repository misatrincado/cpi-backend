import axios from 'axios'

export async function fetchImage(src:string) {
    const image = await axios
        .get(src, {
            responseType: 'arraybuffer'
        })
    return image.data;
}