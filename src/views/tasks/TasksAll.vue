<template>
    <div class='all-tasks-container '>
        <h2>{{ $t("message.tasks") }}</h2>
        <div class="all-button">
            <router-link to="/tasks/new" exact>
                <v-btn color="warning">{{ $t("message.addTask") }}</v-btn>
            </router-link>
        </div>
        <div v-if="tasks && tasks.length > 0" class='tasks-box'>
            <template>
                <v-card 
                    v-for="task in tasks" 
                    :key="task._id"
                    class="task-card"
                    :class="{'late-task': taskIsLate(task.dueDate) && !task.completed}"
                >
                    <!-- class="task-card" -->
                    <v-card-title>{{task.title}}</v-card-title>
                    <v-card-text>{{task.body}}</v-card-text>
                    <v-card-text>Due Date: {{task.dueDate | dateFix}}</v-card-text>
                    <v-card-text>Creator: {{task.author.username}}</v-card-text>
                    <v-card-actions class='actions'>
                        <div v-if="task.author._id === $store.state.userId">
                            <input 
                                type="checkbox" 
                                class="complete-checkbox" 
                                :disabled="task.completed"
                                v-model="task.completed"
                                :click="completed(task)"
                                />
                            <label for="complete-checkbox">{{ $t("message.completed") }}</label>
                        </div>
                        <!-- task.author._id === $store.state.userId" -->
                        <v-btn v-if="false" text>
                            <router-link :to="{name: 'tasks-edit', params: { id: task._id }}" exact>
                                {{ $t("message.edit") }}
                            </router-link>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                            v-if="task.author._id === $store.state.userId" 
                            v-on:click.prevent="currentTaskId = task._id"
                            @click="deleteTask(task)"
                            depressed 
                            small
                            color="error"
                        >
                            {{ $t("message.delete") }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </div>
    </div>
</template>

<script>
    import * as taskService from '../../services/TaskService';
    import moment from 'moment';

    export default {
        name: 'tasks-all',
        data: () => ({
            tasks: null,
            currentTaskId: null,

        }),
        methods: {
            completed(task) {
               task.completed = false;
               const request = {
                   task,
               };
               taskService.updateTask(request);
            },
           async deleteTask(task) {
                alert(`"${task.title}" has been deleted`);
                await taskService.deleteTask(this.currentTaskId);
                const index = this.tasks.findIndex((task) => task._id === this.currentTaskId);
                this.tasks.splice(index, 1);
                this.currentTaskId = null;
            },
            taskIsLate(date) {
                return moment(date).isBefore();
            },
        },
        beforeRouteEnter(to, from, next) {
            taskService.getAllTasks().then((res) => {
                next((vm) => {
                    vm.tasks = res.data.tasks;
                });
            });
        },
    };
</script>

<style scoped>
    .all-button {
        width: 100%;
        text-align: center;
    }
    .all-tasks-container {
        width: 100%;
    }
    .tasks-box {
        display: flex;
        flex-flow: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
        margin: 10px 0;
        width: 100%;
    }
    .task-card {
        margin: 10px 0;
        width: 350px;
        min-height: 250px;
    }
    .actions {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .actions div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .late-task {
        background-color: pink;
    }
    .actions button span {
        font-size: 1rem !important;
    }
    .delete {
        font-size: 1rem !important;
    }
</style>