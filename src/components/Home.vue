<template>
  <div class="root">
    <div id="top">
      <top></top>
    </div>
    <div id="douga">
      <douga></douga>
    </div>

    <div v-scroll-spy="{ allowNoActive: true, offset: 130, time: 200, steps: 30 }">

      <soudan></soudan>
    
      <toi-awase></toi-awase>

    </div>

  </div>
</template>

<script>
import Top from "./Top.vue";
import Douga from "./Douga.vue";
import Soudan from "./Soudan.vue";
import ToiAwase from "./ToiAwase.vue";

export default {
  components: { Top, Douga, Soudan, ToiAwase },
};
</script>
<style scoped></style>
