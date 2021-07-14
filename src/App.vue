<template>
  <the-navbar></the-navbar>
  <top></top>
  <douga></douga>
  <soudan></soudan>
  <toi-awase></toi-awase>
  <the-footer></the-footer>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import Top from './components/Top.vue';
import Douga from './components/Douga.vue';
import Soudan from './components/Soudan.vue';
import ToiAwase from './components/ToiAwase.vue';

export default {
  name: 'LayoutDefault',
  components: {
    TheNavbar, Top, Douga, Soudan, ToiAwase,
  },
}
</script>
