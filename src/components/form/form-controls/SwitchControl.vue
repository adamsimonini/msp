<template>
    <div class="form-control">
        <label>{{label}}</label>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="switchState"
              :label="`${switchState.toString()}`"
              color="orange"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Swtch',
    props: {
        label: String,
    },
    data () {
      return {
        switch1: true,
        switchState: false,
    };
  },
};
</script>