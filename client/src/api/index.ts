import axios from 'axios';
const dotenv = require("dotenv");
dotenv.config();

const instanceConfig = {
    baseURL: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:5000',
    headers: {
        "Content-type": "application/json",
        'Accept': 'application/json'
    },
}

const instance = axios.create(instanceConfig);

export default instance;