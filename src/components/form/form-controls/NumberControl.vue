<template>
    <div class="form-control">
        <v-text-field
            :label=label
            v-model="numberValue"
            type="number"
            :rules="[rules.required, rules.counter]"
            min="0"
        ></v-text-field>
    </div>
</template>

<script>
    export default {
        name: 'NumberControl',
        props: {
            label: String,
            errors: Object,
        },
        data() {
            return {
                numberValue: "",
                rules: {
                    required: (value) => !!value || this.errors.required,
                    counter: (value) => parseInt(value) <= this.errors.counter.maxValue || this.errors.counter.message,
                },
            };
        },
    };
</script>