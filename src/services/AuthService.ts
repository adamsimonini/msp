import store from '../store';

export function isLoggedIn() {
    const token = localStorage.getItem('token')
    return token != null;
}

export function login() {
    const token = {
        username: 'Matilda'
    }
    setToken(token);
}

function setToken(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getUsername() {
    return 'Matilda'
}

export function getUserId() {
    return 1
}