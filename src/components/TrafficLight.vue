<template>
  <div class="traffic-light">
    <!-- If the route matches the bulb and TrafficLight is not blinking apply .lit class -->
    <Bulb color="red" :class="this.$route.params.id == '1' && !isBlinking && 'lit'"/>
    <Bulb color="yellow" :class="this.$route.params.id == '2' && !isBlinking && 'lit'"/>
    <Bulb color="green" :class="this.$route.params.id == '3' && !isBlinking && 'lit'"/>
  </div>
</template>

<script>
import Bulb from './Bulb.vue'
export default {
  name: 'TrafficLight',
  components: { Bulb },
  props: [ 'isBlinking' ]
};
</script>

<style lang="scss" scoped>
  .traffic-light {
    margin: 0 auto;
    padding: 30px;
    width: 200px;
    background-color: black;
    border-radius: 100px;

    :last-child {
      margin-bottom: 0;
    }
  }
</style>