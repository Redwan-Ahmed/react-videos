import axios from 'axios';

const KEY = 'AIzaSyDAK5y5tDUJV16wjTB2KPwtumlKpNROWKA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});