<template>
    <div>
      <v-container>
        <v-row>
          <p>Partnerships</p>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Number of Partners"
              type="number"
              min=1
              v-model="amount"
            ></v-text-field>
            <div class="plusMinus">
              <v-btn @click="decrement()">-</v-btn>
              <v-btn @click="increment()">+</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <div class="form-example-container" v-if="partnershipQuestions">
          <Form
            v-for="n in parseInt(amount)"
            :key=n
            :questions="partnershipQuestions" 
            class="standard-form form-example"
          />
        </div>
      </v-container>
    </div>
</template>

<script>
  import * as partnershipForm from '@/components/form/form-questions/PartnershipForm';

  import Form from "@/components/form/Form";
  export default {
    name: 'partnerships',
    components: {
      Form,
    },
    data() {
      return {
        amount: 2,
        partnershipQuestions: partnershipForm.partnershipQuestions,
      };
    },
    methods: {
      decrement() {
        if(this.amount !== 1) {
          this.amount--;
        }
      },
      increment() {
        this.amount++;
      }
    },
  };
</script>

<style scoped>
.button-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.form-example-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 20px;
}
.plusMinus {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.form-example {
  min-height: 600px;
  margin: 10px 0;
}
.form-example:nth-child(odd) {
  border: 1px solid #FFC107;
}
.form-example:nth-child(even) {
  border: 1px solid red;
}
.form-box {
  margin: 10px 10px;
}
</style>