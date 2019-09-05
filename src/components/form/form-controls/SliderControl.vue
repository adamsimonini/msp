<template>
  <div>
      <v-slider
        :label=label
        :color=color
        min="10"
        max="50"
        step="10"
      ></v-slider>
  </div>
</template>

<script>
export default {
    name: 'RadioControl',
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
.radio-control-container {
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: center;
}

.check-control {
  padding: 0 10px;
}
</style>