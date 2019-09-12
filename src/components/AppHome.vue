<template>
  <div>
    <Timer :time="this.time"/>
    <TrafficLight :isBlinking="this.isBlinking"/>
  </div>
</template>

<script>
import TrafficLight from './TrafficLight.vue'
import Timer from './Timer.vue'

export default {
  name: 'AppHome',
  components: { TrafficLight, Timer },
  data() {
    return {
      timeRed: 10,
      timeYellow: 3,
      timeGreen: 15,
      // For the light changing direction
      toGreen: true,
      // For the timer
      time: 0,
      // For the blinking
      isBlinking: false,
      blinkingStartTime: 3
    }
  },
  methods: {
    setTimeAndDirection() {
      switch (this.$route.params.id) {
        case "1":
          this.time = this.timeRed;
          this.toGreen = true;
          break;
        case "2":
          this.time = this.timeYellow;
          break;
        case "3":
          this.time = this.timeGreen;
          this.toGreen = false;
          break;
      }
    },
    startTimers() {
      // Set time and direction
      this.setTimeAndDirection();

      let timer = setInterval(() => {
        // Decrease seconds
        this.time--;
      }, 1000);

      let blinkingTimer = setInterval(() => {
        // If the time is right and it's not a yellow bulb
        if (this.time <= this.blinkingStartTime && this.$route.params.id != "2") {
          // Blink
          this.isBlinking = !this.isBlinking;
        }
      }, 500);

      let routeChangingTimer = setInterval(() => {
        // Time is off
        if (this.time <= 0) {
          // Stop blinking
          this.isBlinking = false;
          // Change the route
          this.$router.push((this.toGreen ? parseInt(this.$route.params.id) + 1 : parseInt(this.$route.params.id) - 1).toString());
        }
      }, 1000);
    }
  },
  // On first loading of component
  mounted() {
    this.startTimers();
  },
  // On changing the route id (mounted() isn't called, component is being reused)
  watch: {
    '$route.params.id' () {
      this.setTimeAndDirection();
    }
  }
};
</script>