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
      </div>
      <div v-if="answer != 0">
        <pre>
          Your answer: {{answer}}
          selected R: {{selected}}
          expected: {{expected}}
        </pre>
        <div v-if="isCorrect" class="block bg-success">Correct!</div>
        <div v-if="!isCorrect" class="block bg-warning">Wrong!</div>
      </div>
    </div>
  </div>
</template>

<script>
import Resister from './Resister'
import * as quiz from '../modules/stakeless-quiz'
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
  resistors: [],
  selected: 0,
  expected: 0,
  isCorrect: false
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
      const numberOfR = _.random(4, 9) // 4-9 R
      this.resistors = _.sampleSize(this.availableResistor, numberOfR)
      this.question = _.sample(this.availableQuestions)
      this.answer = 0
      console.log('random result', this.question.text, this.resistors)
    },
    setAnswer: function (value) {
      // check if value is correct answer?
      const allR = quiz.getResistanceList(this.resistors)
      const answerMap = {
        min: quiz.min(allR),
        max: quiz.max(allR)
      }
      this.answer = value
      this.selected = quiz.getTotalResistance(this.resistors, this.answer)
      this.expected = answerMap[this.question.key]
      this.isCorrect = (this.selected === this.expected)
    }
  }
}
</script>
