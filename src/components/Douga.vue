<template>
    <div class="container-fluid px-0 my-5">
        <div class="row">
            <div class="col-12 px-0">
                <normal :welcomeTexts="welcomeTexts" v-if="screenMode === 'normal'">
                    <div class="row"><base-title :title="title"></base-title></div>
                    <douga-grid :dougaMama="dougaMama" ></douga-grid>
                </normal>

                <tablet :welcomeTexts="welcomeTexts" v-else-if="screenMode === 'tablet'">
                    <div class="row"><base-title :title="title"></base-title></div>
                    <douga-grid :dougaMama="dougaMama" ></douga-grid>
                </tablet>

                <mobile :welcomeTexts="welcomeTexts" v-else>
                    <div class="row"><base-title :title="title"></base-title></div>
                    <douga-grid :dougaMama="dougaMama" ></douga-grid>
                </mobile>
            </div>
        </div>
    </div>
    
    
</template>

<script>
import Mobile from './douga-toggles/Mobile.vue';
import Normal from './douga-toggles/Normal.vue';
import Tablet from './douga-toggles/Tablet.vue';
import DougaGrid from './douga-toggles/DougaGrid.vue';
import BaseTitle from './base/BaseTitle.vue';

export default {
    components: { Normal, Tablet, Mobile, DougaGrid, BaseTitle },
  
    data() {
        return {
            screenMode: null,
            screenWidth: 0,
            title: '動画を視聴する',
            dougaMama: [ 
                {  
                    title: 'タイトルタイトルタイトルタイトル', 
                    clip: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0',
                    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。`
                },
                {  
                    title: 'タイトルタイトルタイトルタイトル', 
                    clip: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0',
                    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。`
                },
                {  
                    title: 'タイトルタイトルタイトルタイトル', 
                    clip: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0',
                    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。`
                },
                {  
                    title: 'タイトルタイトルタイトルタイトル', 
                    clip: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0',
                    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。`
                },
                {  
                    title: 'タイトルタイトルタイトルタイトル', 
                    clip: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0',
                    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。`
                },
                {  
                    title: 'タイトルタイトルタイトルタイトル', 
                    clip: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0',
                    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。`
                },
            ],
        }
    },
    
    computed: {
        welcomeTexts() {
            return this.$store.getters.welcomeTexts;
        },
        shortDougaMamaList() {
            const mamaList = [];
            for(let i = 0; i < 4; i++){
                mamaList.push(this.dougaMama[i]);
            }
            return mamaList;
        },
     },
    methods: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
        toggleMore() {
            this.moreClicked = !this.moreClicked
        },
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
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>

<style scoped>
</style>
