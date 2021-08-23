<template>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="col-12 px-0">
        <normal v-if="screenMode === 'normal'">
          <div id="douga-start" class="row">
            <base-title :title="title"></base-title>
          </div>
          <douga-grid></douga-grid>
        </normal>

        <tablet v-else-if="screenMode === 'tablet'">
          <div id="douga-start" class="row">
            <base-title :title="title"></base-title>
          </div>
          <douga-grid></douga-grid>
        </tablet>

        <mobile v-else>
          <div id="douga-start" class="row">
            <base-title :title="title"></base-title>
          </div>
          <douga-grid></douga-grid>
        </mobile>
      </div>
    </div>
  </div>
</template>

<script>
import Mobile from "./douga-toggles/Mobile.vue";
import Normal from "./douga-toggles/Normal.vue";
import Tablet from "./douga-toggles/Tablet.vue";
import DougaGrid from "./douga-toggles/DougaGrid.vue";
import BaseTitle from "./base/BaseTitle.vue";

export default {
  components: { Normal, Tablet, Mobile, DougaGrid, BaseTitle },

  data() {
    return {
      screenMode: null,
      screenWidth: 0,
      title: "動画を視聴する",
    };
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
    toggleMore() {
      this.moreClicked = !this.moreClicked;
    },
  },
  watch: {
    screenWidth(val) {
      if (val < 500) this.screenMode = "mobile";
      else if (val < 960) this.screenMode = "tablet";
      else this.screenMode = "normal";
    },
  },

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
