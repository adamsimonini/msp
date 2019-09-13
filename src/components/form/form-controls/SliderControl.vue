<template>
  <div>
    <p>{{ $t("message.stageOfFunding") }}</p>
      <v-slider
        :color=color
        min="1"
        :max="getTickLabels().length"
        :tick-labels="getTickLabels()"
        :vertical="vertical"
        tick-size=4
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
        tickLabels: Array,
        vertical: Boolean,
    },
    data () {
      return {
        translatedLabels: [],
        rules: {
          required: (value) => !!value || this.errors.required,
        },
      };
    },
    methods: {
      getTickLabels: function() {
        let translatedTickLabels = [];
        for (let i = 0; i < this.tickLabels.length; i++) {
          let translation = this.$i18n.t(`message.${this.tickLabels[i]}`);
          translatedTickLabels.push(translation);
        }
        return translatedTickLabels;
      },
      getValue: function() {
        return this.getTickLabels()[this.step];
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