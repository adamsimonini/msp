<template>
  <v-row class="datepicker-row">
    <label>{{label}}</label>
    <v-date-picker 
      v-model="picker"
      color="#FB9514"
      :label=label
    ></v-date-picker>
  </v-row>
</template>

<script>
    export default {
        name: 'DatePicker',
        props: {
          label: String,
        },
        data() {
            return {
                picker: new Date().toISOString().substr(0, 10),
            };
        },
    };
</script>

<style scoped>
.datepicker-row{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>