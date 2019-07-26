import store from '../store';
import { http } from './HttpService';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login(user: any) {
    return http().post('/auth', user)
    .then((res: any) => {
        if (res) {
            setToken(res.data.token);
        }
    });
}


function setToken(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getUsername() {
    return 'Matilda';
}

export function getUserId() {
    return 1;
}

export function registerUser(user: any) {
    return http().post('/register', user);
}
