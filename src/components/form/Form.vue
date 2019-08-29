<template>
    <v-form class="form-box">
        <!-- Shows if the question object is without steps -->
        <v-container v-if=!questions[0].step class="question-container">
            <h2>Dynamically Generated Form (sans steps)</h2>
            <component 
                v-for="(field, index) in formQuestions"
                :key="index"
                :is="field.fieldType"
                v-bind="field"
            >
            </component>
        </v-container>
        <!-- Shows if the question object has steps -->
        <v-container v-if=questions[0].step class="question-container">
            <h2>Dynamically Generated Form (with steps)</h2>
            <div 
                v-for="item in formQuestions"
                :key=item.step
            >
                <p v-show="item.step == page">{{item.stepName}}</p>
                <component
                    v-for="question in item.questions"
                    :key="question.name"
                    :is="question.fieldType"
                    v-bind="question"
                    v-show="item.step == page"
                >
                </component>
            </div>
        </v-container>
        <v-pagination
            circle
            color="#FB9514"
            v-if=questions[0].step
            class="form-pagination"
            v-model="page"
            :length=formQuestions.length
        ></v-pagination>
    </v-form>
</template>

<script>
    import SelectList from './form-controls/SelectList';
    import TextInput from './form-controls/TextInput';
    import DatePicker from './form-controls/DatePicker';
    import SwitchControl from './form-controls/SwitchControl';
    import NumberControl from './form-controls/NumberControl';

    export default {
        name: 'dynamicForm',
        props: {
            questions: Array,
        },
        components: {
            SelectList,
            TextInput,
            DatePicker,
            SwitchControl,
            NumberControl
        },
        data: function() {
            return {
                formQuestions: this.questions,
                page: 1,
            }
        },
    }
</script>

<style scoped>
.form-box {
    display: grid;
    grid-template-areas:
        "questions"
        "pagination";
    grid-template-rows: 5fr 1fr;
}
.question-container {
    grid-area: questions;
}
.form-pagination {
    grid-area: pagination;
}
</style>