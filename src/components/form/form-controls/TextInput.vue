<template>
    <div class="form-control">
        <v-text-field
            class="form-textfield"
            type="text"
            :name="name"
            :rules="[rules.required]"
            :placeholder=placeholder
            :label=label
            color="#FB9514"
            required
        ></v-text-field>
    </div>
</template>

<script>
    export default {
        name: 'TextInput',
        components: {       
        },
        props: {
            name: String,
            placeholder: String,
            label: String,
            errors: Object,
        },
        data() {
            return {
                rules: {
                    // required: (value) => !!value || "apple",
                    required: (value) => !!value || this.$options.propsData.errors.required,
                },
            };
        },
    };
</script>