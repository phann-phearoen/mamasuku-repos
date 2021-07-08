<template>
  <the-navbar></the-navbar>
  <top></top>
  <douga></douga>
  <soudan></soudan>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import Top from './components/Top.vue';
import Douga from './components/Douga.vue';
import Soudan from './components/Soudan.vue';

export default {
  name: 'LayoutDefault',
  components: {
    TheNavbar, Top, Douga, Soudan
  },
}
</script>
