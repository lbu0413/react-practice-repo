import axios from 'axios'

const KEY = 'AIzaSyADrKwP3DV1ipcHL-cZSD3i8T-knyj4-ds'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})