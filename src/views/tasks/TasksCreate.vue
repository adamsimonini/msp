<template>
  <div>
    <h2>{{ $t("message.newTask") }}</h2>
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
        {{ $t("message.addTask") }}
      </v-btn>
  </div>
</template>

<script>
  import * as taskService from '@/services/TaskService';

  export default {
    name: 'task-create',
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
    methods: {
      async onSubmit() {
          const request = {
              task: this.task,
          };
          try {
            await taskService.createTask(request);
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