import store from '../store';
import { http } from './HttpService';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login(user: any) {
    console.log('logging in...');
    return http().post('/auth', user)
    .then((res: any) => {
        if (res) {
            const fakeToken = {
                token: 'my-token',
            };
            setToken(fakeToken);
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
    console.log('registering...');
    return http().post('/register', user);
}
