<template>
  <div id="quiz">
    <div class="board row">
      <resistor-block v-for="r in resistors" v-bind:value="r" v-on:click="setAnswer"></resistor-block>
    </div>
    <div class="block">
      <button class="btn btn-info btn-block" v-on:click="randomSerie">Random</button>
    </div>
    <div class="block">
      <div v-if="question">
        <h2>{{question.text}}</h2>
        <code>TODO: finding {{question.key}} R</code>
      </div>
      <div v-if="answer != 0">
        <pre>Your answer: {{answer}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import Resister from './Resister'
import _ from 'lodash'

const initialState = {
  answer: 0,
  availableResistor: [5, 5, 5, 5, 5, 10, 10, 10, 50, 50],
  availableQuestions: [{
    text: 'which one has Maximum resistance?',
    key: 'max'
  }, {
    text: 'which one has Minimum resistance?',
    key: 'min'
  }],
  question: null,
  resistors: []
}

export default {
  name: 'stakeless-quiz',
  components: {
    'resistor-block': Resister
  },
  data: function () {
    return initialState
  },
  methods: {
    randomSerie: function () {
      // random sample 9
      this.resistors = _.sampleSize(this.availableResistor, 9)
      this.question = _.sample(this.availableQuestions)
      this.answer = 0
      console.log('random result', this.question.text, this.resistors)
    },
    setAnswer: function (value) {
      // TODO: check if value is correct answer?
      console.log('setAnswer', value)
      this.answer = value
    }
  }
}
</script>
