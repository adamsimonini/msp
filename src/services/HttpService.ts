import store from '../store';
import axios from 'axios';

export function http() {
    console.log('http service activating...');
    return axios.create({
        baseURL: store.state.apiUrl,
     });
}
