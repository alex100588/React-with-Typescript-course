import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '83d83a4f16a84d03a8d05013683fe935'
    }
})