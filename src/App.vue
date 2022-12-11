<template>
  <div id="app">
    <div class='m-scene scene_element--fadein'>
      <router-link to="/"></router-link>
      <router-link to="/LandingPage"></router-link>
      <router-link to="/SearchPage"></router-link>
      <router-link to="/AboutUsPage"></router-link>
      <router-link to="/SignUpPage"></router-link>
      <router-link to="/LoginPage"></router-link>
      <router-link to="/ForgotPasswordPage"></router-link>
      <router-link to="/RateReservationPage"></router-link>
      <router-link to="/ViewBookingsPage"></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.m-scene {
  /** Basic styles for an animated element */
  .scene_element {
    animation-duration: 0.25s;
    transition-timing-function: ease-in;
    animation-fill-mode: both;

  }

  /** An element that fades in */
  .scene_element--fadein {
    animation-name: fadeIn;
  }

  /** An element that fades in and slides up */
  .scene_element--fadeinup {
    animation-name: fadeInUp;
  }

  /** An element that fades in and slides from the right */
  .scene_element--fadeinright {
    animation-name: fadeInRight;
  }
}
</style>

