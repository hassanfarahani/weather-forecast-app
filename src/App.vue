<template>
  <div id="app">
    <navbar />
    <transition name="slide"  mode="out-in" appear>
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

  .slide-enter-active {
    animation: slide-in 800ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 400ms ease-out forwards;
  }


  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    } 
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: translateX(0);
    } 
    100% {
      opacity: 0;
      transform: translateX(20px);
    }
  }

</style>
