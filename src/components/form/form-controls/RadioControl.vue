<template>
  <div>
    <p>{{ $t(`message.${label}`) }}</p>
    <v-radio-group 
      class="form-control radio-control-container"
      :column=column
      >
      <v-radio
        v-for="(item, i) in options"
        :key=item
        :label="$t(`message.${options[i]}`)"
        :value=options[i]
        :color=color
      ></v-radio>
    </v-radio-group>
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
        column: Boolean,
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