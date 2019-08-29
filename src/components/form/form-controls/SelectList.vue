<template>
    <div class="form-control">
        <v-select
            :items="options"
            :rules="[v => !!v || 'Item is required']"
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
            'multi': Boolean, 
            'options': Array,
            'name': String,
            'label': String,
        },
        data: function() {
            return {

            }
        }
    }
</script>