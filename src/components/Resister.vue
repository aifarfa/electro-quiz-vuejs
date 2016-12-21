<template>
  <div class="col-xs-1">
  	<div class="resistor" v-on:click="handleClick">{{value}}&Omega;</div>
  </div>
</template>

<script>
export default {
  name: 'resistor-block',
  props: ['value'],
  methods: {
    handleClick: function () {
      this.$emit('click', this.value)
      console.log('handleClick', this.value)
    }
  }
}
</script>
