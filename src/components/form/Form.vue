<template>
    <v-form>
        <!-- Shows if the question object is without steps -->
        <v-container v-if=!questions[0].step class="123">
            <h2>Dynamically Generated Form (sans steps)</h2>
            <component 
                v-for="(field, index) in formQuestions"
                :key="index"
                :is="field.fieldType"
                v-bind="field">
            </component>
        </v-container>
        <!-- Shows if the question object has steps -->
        <v-container v-if=questions[0].step>
            <h2>Dynamically Generated Form (with steps)</h2>
            <div 
                v-for="item in formQuestions"
                :key=item.step
            >
                <p>Step {{item.step}}</p>
                <component
                    v-for="question in item.questions"
                    :key="question.name"
                    :is="question.fieldType"
                    v-bind="question"
                    v-show="item.step == page"
                >
                </component>
            </div>
            <v-pagination
                v-model="page"
                :length=formQuestions.length
            ></v-pagination>
        </v-container>
    </v-form>
</template>

<script>
    import SelectList from './form-controls/SelectList';
    import TextInput from './form-controls/TextInput';

    export default {
        name: 'dynamicForm',
        props: {
            questions: Array,
        },
        components: {
            SelectList,
            TextInput
        },
        data: function() {
            return {
                formQuestions: this.questions,
                page: 1,
            }
        },
    }
</script>