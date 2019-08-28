<template>
    <div class="form-control">
        <label>{{label}}</label>
        <v-select
            :items="options"
            :rules="[v => !!v || 'Item is required']"
            placeholder="placeholder"
            color="#FB9514"
            required
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