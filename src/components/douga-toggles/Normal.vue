<template>
    <div class="container containerNormal">
        <div class="row">
            <div class="wrapper">
                <img class="img-fluid img-fluidNormal" src="../../assets/parts01.png" alt="part01">
                <p class="plus-text">{{ welcomeTexts }}</p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="title-wrapper">
                <h3 class="title">動画を視聴する</h3>
                <img src="../../assets/parts03.png" alt="parts03" class="img-fluid parts03">
            </div>
        </div>
        <div class="row">
            <ul>
                <douga-card
                v-for="(mama, i) in dougaMama"
                :key="i"
                :title="mama.title"
                :clip="mama.clip"
                :description="mama.description"
                ></douga-card>
            </ul>
        </div>
    </div>
</template>

<script>
import DougaCard from './DougaCard.vue';
export default {
    components: { DougaCard },
    computed: {
        welcomeTexts() {
            return this.$store.getters.welcomeTexts;
        },
        dougaMama() {
            return this.$store.getters['dougaModule/dougaMama'];
        }
    }
}
</script>

<style scoped>
.title{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 600;
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