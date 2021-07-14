<template>
<div class="root">
  <div>
    <top></top>
  </div>

  <div v-scroll-spy>
    <div id="douga">
        <douga></douga>
    </div>
    <div id="soudan">
        <soudan></soudan>
    </div>
    <div id="toi-awase">
        <toi-awase></toi-awase>
    </div>
  </div>  
</div>  
</template>

<script>
import Top from './Top.vue';
import Douga from './Douga.vue';
import Soudan from './Soudan.vue';
import ToiAwase from './ToiAwase.vue';

export default {
    components: { Top, Douga, Soudan, ToiAwase, },

}
</script>
<style scoped>
.root{
  width: 100%
}
</style>