<template>
    <div class="container-fluid px-0 my-5">
        <div class="column items-center">
            <q-btn type="submit" unelevated rounded class="items-center" :class="{'button-mobile': screenMode === 'mobile',
            'button-tablet': screenMode === 'tablet', 'button-normal': screenMode === 'normal'}" label="もっと見る" 
             @click="toggleMore" v-if="moreClicked === false"/>

            <q-btn type="submit" unelevated rounded class="items-center" :class="{'button-mobile': screenMode === 'mobile',
            'button-tablet': screenMode === 'tablet', 'button-normal': screenMode === 'normal'}" label="閉じる" 
            @click="toggleMore" v-else/>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['moreClicked'],
    data() {
        return {
            screenMode: null,
            screenWidth: 0,
        }
    },
    methods: {
        toggleMore() {
            this.$emit('toggleMore');
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
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
.button-mobile{
    border: solid 1px grey;
    color: grey;
    width: 150px;
    font-size: .8em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
}
.button-tablet{
    border: solid 1px grey;
    color: grey;
    width: 250px;
    font-size: 1em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
}
.button-normal{
    border: solid 1px grey;
    color: grey;
    width: 300px;
    font-size: 1.3em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 500;
}
</style>