<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <stakeless-quiz></stakeless-quiz>
  </div>
</template>

<script>
import StakelessQuiz from './components/StakelessQuiz'

export default {
  name: 'app',
  components: { StakelessQuiz }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.board {
  border: 1px solid #888;
  height: 150px;
  padding: 20px 0;
}
.resistor {
  background-color: rgba(0, 100, 200, .5);
  border: 1px solid #888;
  cursor: pointer;
  line-height: 80px;
  height: 80px;
  width: 40px;
  text-align: center;
  vertical-align: bottom;
}
.resistor:hover {
  background-color: rgba(200, 200, 0, 1)
}
.block {
  padding: 10px;
}
</style>
