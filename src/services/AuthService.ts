import store from '../store';
import { http } from './HttpService';
import jwt from 'jsonwebtoken';

export function isLoggedIn() {
    const token: any = localStorage.getItem('token');
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

export function logout() {
    localStorage.clear();
    store.dispatch('authenticate');
    console.log('logging out...');
}

function setToken(token: any) {
    localStorage.setItem('token', token);
    store.dispatch('authenticate');
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getUsername() {
    const token: any = decodeToken();
    if (!token) {
        return null;
    }
    return token.user.username;
}

export function getUserId() {
    const token: any = decodeToken();
    if (!token) {
        return null;
    }
    return token.user.id;
}

export function registerUser(user: any) {
    return http().post('/register', user);
}

function decodeToken() {
    const token: any = getToken();
    if (!token) {
        return null;
    }
    return jwt.decode(token);
}
