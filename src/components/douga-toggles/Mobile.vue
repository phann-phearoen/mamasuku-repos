<template>
    <div class="container containerMobile">
        <div class="row">
            <div class="wrapperMobile" >
                <img class="img-fluidMobile" src="../../assets/parts02.png" alt="part02">
                <p class="plus-textMobile">{{ welcomeTexts }}</p>
            </div>
        </div>
        <div class="row lowerContainer q-mt-md q-mb-md">
            <div class="col">
                <div class="row">
                    <base-title :title="title"></base-title>
                </div>

                <div class="row clipGrid" v-if="moreClicked">
                    <douga-card class="col-sm-12"
                    v-for="(mama, index) in dougaMama"
                    :key="index"
                    :title="mama.title"
                    :clip="mama.clip"
                    :description="mama.description"
                    ></douga-card><br>
                </div>
                <div class="row clipGrid" v-else>
                    <douga-card class="col-sm-12"
                    v-for="(mama, index) in shortDougaMamaList"
                    :key="index"
                    :title="mama.title"
                    :clip="mama.clip"
                    :description="mama.description"
                    ></douga-card><br>
                </div>
                
                <toggle-more @toggle-more="toggleMore" :moreClicked="moreClicked"></toggle-more>

            </div>
        </div>
    </div>
</template>

<script>
import DougaCard from './DougaCard.vue';
import BaseTitle from '../base/BaseTitle.vue';

export default {
    components: { DougaCard, BaseTitle },
    data() {
        return {
            title: '動画を視聴する',
            moreClicked: false,
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
        }
    },
    methods: {
        toggleMore() {
            this.moreClicked = !this.moreClicked
        }
    }
}
</script>

<style scoped>
.btnMore{
    width: 13em;
    height: 1em;
}
.viewMore{
    color: grey;
    font-size: 1em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
}

.lowerContainer{
    border: solid 1px pink;
}
.title{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 600;
    font-size: 1em;
}
.parts03{
    width: 60%;
    margin-top: -3em;
}

.containerMobile{
    margin-top: 2.5em;
    margin-left: .8em;
    width: 95%;
    height: auto;
}
.wrapperMobile{
    position: relative;
    background-color: #f9f5ed;
    height: 160px
}
.img-fluidMobile{
    width: 96%;
    margin-top: -2em;
    margin-left: 2em;
}
.plus-textMobile{
    left: 10%;
    top: 37%;
    position: absolute;
    width: 80%;
    font-size: .7em;
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
}
</style>
