<template>
    <v-form class="form-box" ref="form">
        <!-- Only if the question object is without steps -->
        <v-container v-if=!questions[0].step class="question-container">
            <component
                v-for="(field, index) in formQuestions"
                :key="index"
                :is="field.fieldType"
                v-bind="field"
            >
            </component>
        </v-container>
        <!-- Only if the question object has steps -->
        <v-container v-if=questions[0].step class="question-container">
            <div 
                v-for="item in formQuestions"
                :key=item.step
            >
                <component
                    v-for="question in item.questions"
                    :key="question.name"
                    :is="question.fieldType"
                    v-bind="question"
                    v-show="item.step == paginationIndex"
                >
                </component>
            </div>
        </v-container>
        <div class="form-pagination">
            <v-pagination
                circle
                color="#FB9514"
                v-if=questions[0].step
                v-model="paginationIndex"
                :length=formQuestions.length
            ></v-pagination>
            <v-btn
                v-if="!questions[0].step || paginationIndex == questions.length"
                class="submit-button"
                :disabled="!valid"
                color="#FB9514"
                @click="validate"
            >
                {{ $t("message.submit") }}
            </v-btn>
        </div>
    </v-form>
</template>

<script>
    // Fully importing all possible controls into the form component
    import SelectList from './form-controls/SelectList';
    import TextInput from './form-controls/TextInput';
    import DatePicker from './form-controls/DatePicker';
    import SwitchControl from './form-controls/SwitchControl';
    import NumberControl from './form-controls/NumberControl';
    import CheckboxControl from './form-controls/CheckboxControl';
    import RadioControl from './form-controls/RadioControl';
    import SliderControl from './form-controls/SliderControl';

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
            NumberControl,
            CheckboxControl,
            RadioControl,
            SliderControl,
        },
        data() {
            return {
                valid: true,
                formQuestions: this.questions,
                paginationIndex: 1,
            };
        },
        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true;
                }
            },
        },
    };
</script>

<style scoped>
.form-box {
    display: grid;
    grid-template-areas:
        "questions"
        "pagination";
    grid-template-rows: 5fr 150px;
    max-width: 500px;
}
.question-container {
    grid-area: questions;
}
.form-pagination {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    grid-area: pagination;
}
.submit-button {
    color: white;
}
</style>