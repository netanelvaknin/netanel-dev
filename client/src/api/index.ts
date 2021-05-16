import axios from 'axios';

const instanceConfig = {
    baseURL: '/',
    headers: {
        "Content-type": "application/json",
        'Accept': 'application/json'
    },
}

const instance = axios.create(instanceConfig);

export default instance;