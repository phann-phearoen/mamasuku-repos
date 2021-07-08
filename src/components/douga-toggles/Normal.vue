<template>
    <div class="container containerNormal">
        <div class="row">
            <div class="wrapper">
                <img class="img-fluid img-fluidNormal" src="../../assets/parts01.png" alt="part01">
                <p class="plus-text">{{ welcomeTexts }}</p>
            </div>
        </div>

        <base-title :title="title"></base-title>

        <div class="row clipGrid" v-if="moreClicked">
            <douga-card class="col-6"
            v-for="(mama, index) in dougaMama"
            :key="index"
            :title="mama.title"
            :clip="mama.clip"
            :description="mama.description"
            ></douga-card>
        </div>
        <div class="row clipGrid" v-else>
            <douga-card class="col-6"
            v-for="(mama, index) in shortDougaMamaList"
            :key="index"
            :title="mama.title"
            :clip="mama.clip"
            :description="mama.description"
            ></douga-card>
        </div>
        
        <div class="row q-mt-xl q-mb-xl">
            <div class="col column items-center">
                <q-btn outline rounded color="grey" class="btnMore" @click="toggleMore">
                    <div class="row items-center no-wrap" v-if="moreClicked === false">
                        <div class="text-center viewMore">
                            もっと見る
                        </div>
                    </div>
                    <div class="row items-center no-wrap" v-else>
                        <div class="text-center viewMore">
                            表示を減らす
                        </div>
                    </div>
                </q-btn>
            </div>
        </div>
    </div>
</template>

<script>
import DougaCard from './DougaCard.vue';

export default {
    components: { DougaCard, },
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
    width: 20em;
    height: 1.9em;
}
.viewMore{
    color: grey;
    font-size: 20px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
}

.title{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 600;
    font-size: 2em;
}
.parts03{
    width: 60%;
    margin-top: -4em;
}
.title-wrapper{
    text-align: center;
}

.containerNormal{
    border: 1.5px solid pink;
    width: 67%;
    margin-top: 6em;
    margin-bottom: 6em;
}
.img-fluidNormal{
    width: 96%;
    margin-top: -5em;
    margin-left: 2em;
}
.wrapper{
    position: relative;
    display: block;
    height: auto;
}
.plus-text{
    left: 19%;
    top: 30%;
    position: absolute;
    width: 60%;
    font-size: 1em;
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 600;
}

</style>
