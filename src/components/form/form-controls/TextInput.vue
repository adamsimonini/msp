<template>
    <div class="form-control">
        <label>{{label}}</label>
        <v-text-field
            class="form-textfield"
            type="text"
            :name="name"
            :rules="[v => !!v || 'Item is required']"
            placeholder="placeholder"
            color="#FB9514"
            required
        ></v-text-field>
    </div>
</template>

<script>
    export default {
        name: 'TextInput',
        props: {
            'placeholder': String,
            'label': String,
            'name': String,
        },
    }
</script>