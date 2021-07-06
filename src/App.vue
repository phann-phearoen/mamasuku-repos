<template>
  <the-navbar></the-navbar>
  <top></top>
  <douga></douga>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import Top from './components/Top.vue';
import Douga from './components/Douga.vue';
export default {
  name: 'App',
  components: {
    TheNavbar, Top, Douga
  },
}
</script>

<style>

</style>
