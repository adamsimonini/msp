<template>
  <div>
    <p>{{ $t("message.stageOfFunding") }}</p>
      <v-slider
        :color=color
        min="1"
        max="5"
        step="1"
        :tick-labels="tickLabels"
        :vertical="vertical"
      ></v-slider>
  </div>
</template>

<script>
export default {
    name: 'SliderControl',
    props: {
        label: String,
        color: String,
        errors: Object,
        vertical: Boolean,
    },
    data () {
      return {
        rules: {
          required: (value) => !!value || this.errors.required,
        },
      };
    },
    computed: {
      // a computed getter
      tickLabels: function() {
        return ['all', 'will', 'be', 'revealed', 'friend'];
      }
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