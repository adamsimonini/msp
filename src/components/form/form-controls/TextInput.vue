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
        props: {
            name: String,
            placeholder: String,
            label: String,
            errors: String,
        },
        data: function() {
            return {
                rules: {
                    required: value => !!value || this.errors.required,
                }
            }
        }
    }
</script>