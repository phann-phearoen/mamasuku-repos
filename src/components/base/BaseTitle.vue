<template>
    <div class="row mt-3">
        <div class="col column items-center">
            <div class="col column items-center me-3">
                <h6 
                :class="{'title-mobile': screenMode === 'mobile', 
                'title-tablet': screenMode === 'tablet',
                'title-normal': screenMode === 'normal',
                }">{{ title }}</h6>
            </div>
            <img src="../../assets/parts03.png" alt="parts03" class="img-fluid ms-3" 
                :class="{'parts03-mobile': screenMode === 'mobile',
                'parts03-tablet': screenMode === 'tablet',
                'parts03-normal': screenMode === 'normal',
                }" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['title'],

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

.title-mobile{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 600;
    font-size: .89em;
}
.parts03-mobile{
    width: 300px;
    margin-top: -3.1em;
}

.title-tablet{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 600;
    font-size: 1.5em;
}
.parts03-tablet{
    width: 500px;
    margin-top: -4.4em;
}

.title-normal{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 600;
    font-size: 1.8em;
}
.parts03-normal{
    width: 550px;
    margin-top: -5em;
}
</style>
