<template>
    <div class="container containerNormal">
        <div class="row">
            <div class="wrapper">
                <img class="img-fluid img-fluidNormal" src="../../assets/parts01.png" alt="part01">
                <p class="plus-text" :style="{ top: top + 'vw'}">{{ welcomeTexts }}</p>
            </div>
        </div>
        <slot></slot>
        
    </div>
</template>

<script>

export default {
    computed: {
        welcomeTexts() {
            return this.$store.getters.welcomeTexts;
        },
    },
    data() {
        return {
            screenWidth: 0,
            top: 0,
        }
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
            if(val > 1600)
                this.top = 9.8;
            else if(val > 1400)
                this.top = 8.8;
            else if(val > 1200)
                this.top = 7.8;
            else
                this.top = 6.8;
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

.containerNormal{
    border: 1.5px solid pink;
    width: 67%;
    margin-top: 6em;
    margin-bottom: 6em;
}
.img-fluidNormal{
    width: 96%;
    margin-top: -5.5em;
    margin-left: 2em;
}
.wrapper{
    position: relative;
    display: block;
    height: auto;
}
.plus-text{
    left: 12vw;
    position: absolute;
    width: 60%;
    font-size: 1.3vw;
    line-height: 200%;
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 600;
}

</style>
