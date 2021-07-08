<template>
    <div class="container containerTablet">
        <div class="row">
            <div class="wrapperTablet" >
                <img class="img-fluidTablet" src="../../assets/parts02.png" alt="part02">
                <p class="plus-textTablet">{{ welcomeTexts }}</p>
            </div>
        </div>
        <div class="row lowerContainer q-mt-md q-mb-xl">
            <div class="col">
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
.lowerContainer{
    border: solid 1.5px pink;
}

.btnMore{
    width: 20em;
    height: 1.9em;
}
.viewMore{
    color: grey;
    font-size: 1.4em;
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

.containerTablet{
    margin-left: 2.5em;
    width: 100%;
    margin-top: 3.5em;
    height: auto;
}
.wrapperTablet{
    position: relative;
    background-color: #f9f5ed;
    height: 200px
}
.img-fluidTablet{
    width: 100%;
    margin-top: -4em;
    margin-left: 2em;
}
.plus-textTablet{
    left: 12%;
    top: 40%;
    position: absolute;
    width: 75%;
    font-size: 1rem;
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 500;
}
</style>
