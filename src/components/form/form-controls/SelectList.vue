<template>
    <div class="form-control">
        <v-select
            :items="options"
            :rules="[rules.required]"
            :placeholder=label
            color="#FB9514"
            required
            :label=label
        ></v-select>
    </div>
</template>

<script>
    export default {
        name: 'SelectList',
        props: {
            name: String,
            placeholder: String,
            label: String,
            errors: Object,
            options: Array,
        },
        data() {
            return {
                rules: {
                    required: (value) => !!value || this.errors.required,
                },
            };
        },
    };
</script>