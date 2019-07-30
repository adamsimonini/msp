import { http } from './HttpService';

export function getAllTasks() {
    return http().get('/task');
}

export function getTaskById(id: any) {
    return http().get(`/task/${id}`);
}

export function createTask(task: any) {
    return http().post('/task', task);
}

// export function createTask(task: any) {
//     return http().post('/task/', task);
// }

export function deleteTask(id: any) {
    return http().delete(`/task/${id}`);
}

export function updateTask(task: any) {
    return http().put('/task', task);
}
