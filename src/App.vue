<template>
  <the-navbar></the-navbar>

  <router-view></router-view>

  <the-footer></the-footer>
  
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'LayoutDefault',
  components: {
    TheNavbar, TheFooter,
  },
}
</script>

<style scoped>

</style>
