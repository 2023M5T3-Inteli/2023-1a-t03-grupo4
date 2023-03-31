import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://wags-lb-566112077.us-east-1.elb.amazonaws.com',
});