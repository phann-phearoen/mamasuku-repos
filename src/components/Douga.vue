<template>
    <normal :welcomeTexts="welcomeTexts" v-if="screenMode === 'normal'"></normal>
    <tablet :welcomeTexts="welcomeTexts" v-else-if="screenMode === 'tablet'"></tablet>
    <mobile :welcomeTexts="welcomeTexts" v-else></mobile>
</template>

<script>
import Mobile from './douga-toggles/Mobile.vue';
import Normal from './douga-toggles/Normal.vue';
import Tablet from './douga-toggles/Tablet.vue';

export default {
  components: { Normal, Tablet, Mobile },
    data() {
        return {
        screenMode: null,
        screenWidth: 0,
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        }    
    },
    watch: {
        screenWidth(val){
        if(val > 960){
            this.screenMode = 'normal';
        }
        else if(val > 500){
            this.screenMode = 'tablet';
        }
        else
            this.screenMode = 'mobile';
        }
    }
}
</script>

<style scoped>

</style>TabletMobile