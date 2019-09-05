<template>
  <div>
    <p>{{label}}</p>
    <div class="form-control check-control-container">
      <div class="check-control" v-for="(items, i) in options" :key="i">
          <v-checkbox
            :color=color 
            :label=items
            :value=false
          ></v-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Checkbox',
    props: {
        label: String,
        options: Array,
        color: String,
        errors: Object,
    },
    data () {
      return {
        apple: true,
        rules: {
          required: (value) => !!value || this.errors.required,
        },
      };
    },
  };
</script>

<style scoped>
.check-control-container {
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: center;
}

.check-control {
  padding: 0 10px;
}
</style>