<template>
    <div class="form-control">
        <v-select
            :label="$t(`message.${label}`)"
            :items="options"
            :rules="[rules.required]"
            :placeholder=placeholder
            color="#FB9514"
            required
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
    // TODO: this component is generating a translation warning in console when toggling languages
</script>
