import axios from 'axios';

export const api = axios.create({
    baseURL: 'http:prova-lb-873497458.us-east-1.elb.amazonaws.com',
});