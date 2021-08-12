<template>
    <div class="container-fluid my-3">
        <div class="column items-center">
            <q-btn type="submit" unelevated rounded 
                class="items-center" 
                :class="{'button-mobile': screenMode === 'mobile',
                'button-tablet': screenMode === 'tablet',
                'button-normal': screenMode === 'normal'
                }"
            label="送信" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            screenMode: null,
            screenWidth: 0,
        }
    },
    methods: {
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
}
.button-tablet{
    border: solid 1px grey;
    color: grey;
    width: 250px;
    font-size: 1em;
}
.button-normal{
    border: solid 1px grey;
    color: grey;
    width: 300px;
    font-size: 1.3em;
}
</style>