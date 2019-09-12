<template>
  <div class="timer">{{ this.time }}</div>
</template>

<script>
export default {
  name: 'Timer',
  props: [ 'time' ]
};
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');

  .timer {
    position: absolute;
    width: 300px;
    height: 100px;
    background-color: rgb(36, 36, 36);
    font-family: 'Orbitron';
    font-size: 80px;
    color: white;
    text-align: center;
    border-radius: 10px;
  }
</style>