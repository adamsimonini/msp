<template>
  <div>
    <h2>Edit Task</h2>
      <v-text-field
          v-model="task.title"
          :rules="titleRules"
          label="Title"
          required
      ></v-text-field>

      <v-text-field
          v-model="task.body"
          :rules="bodyRules"
          label="Body"
          required
      ></v-text-field>
      <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="task.dueDate"
              label="Due Date"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="task.dueDate"
            max="2022-12-31"
            min="2019-07-20"
            @change="save"
          ></v-date-picker>
        </v-menu>

      <v-btn
        :disabled="!valid"
        color="warning"
        @click="onSubmit"
      >
        Update Task
      </v-btn>
  </div>
</template>

<script>
  import * as taskService from '@/services/TaskService';

  export default {
    name: 'task-edit',
    data: () => ({
        task: {
          title: '',
          body: '',
          dueDate: null,
        },
        menu: false,
        valid: true,
        titleRules: [
          (v) => !!v || 'Title is required',
        ],
        bodyRules: [
          (v) => !!v || 'Content is required',
        ],
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'));
      },
    },
    beforeRouteEnter(to, from, next) {
        console.log('before enter started...');
        taskService.getTaskById(to.params.id).then((response) => {
            if (!response) {
                console.log('no task to update found...')
                next('/tasks')
            } else {
                next((vm) => {
                    const task = response.data.task;
                    task.dueDate = moment(task.dueDate).format('DD-MM-YYYY');
                    vm.task = task;
                });
            }
        });
    },
    methods: {
      async onSubmit() {
          const request = {
              task: this.task,
          };
          try {
            await taskService.updateTask(request);
            this.$router.push({ name: 'tasks-all' });
          } catch (error) {
              return error;
          }
      },
      save(date) {
        this.$refs.menu.save(date);
      },
    },
  };
</script>