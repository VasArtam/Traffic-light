<template>
  <div class="bulb" :class="color"></div>
</template>

<script>
export default {
  name: 'Bulb',
  props: [ 'color' ]
};
</script>

<style lang="scss" scoped>
  .bulb {
    width: 80%;
    height: 160px;
    margin: 0 auto;
    margin-bottom: 10%;
    border-radius: 50%;
  }
  .red {
    background-color: rgb(64, 32, 32);
    &.lit {
      background-color: red;
    }
  }
  .yellow {
    background-color: rgb(64, 64, 32);
    &.lit {
      background-color: yellow;
    }
  }
  .green {
    background-color: rgb(32, 64, 32);
    &.lit {
      background-color: rgb(0, 255, 0);
    }
  }
</style>