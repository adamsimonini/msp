<template>
    <div>
        <h2>All Tasks</h2>
        <router-link to="/tasks/new">
            <v-btn color="warning">Create Task</v-btn>
        </router-link>
    </div>
</template>

<script>
    import * as taskService from '../../services/TaskService';

    export default {
        name: 'tasks-all',
        beforeRouteEnter(to, from, next) {
            taskService.getAllTasks().then((res) => {
                console.log(res);
                next();
            });
        },
    };
</script>