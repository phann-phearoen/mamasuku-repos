<template>
    <div :class="{'wrapperMobile': screenMode === 'mobile', 'wrapperTablet': screenMode === 'tablet', 'wrapper': screenMode ==='normal'}" >
        <img :class="{'img-fluidMobile': screenMode === 'mobile', 'img-fluidTablet': screenMode === 'tablet', 'img-fluidNormal': screenMode === 'normal'}" :src="img-src" alt="part02">
        <p :class="{'plus-textMobile': screenMode === 'mobile', 'plus-textTablet': screenMode === 'tablet', 'plus-text': screenMode === 'normal'}">{{ welcomeTexts }}</p>
    </div>
</template>

<script>
export default {
    props: ['screenMode', 'img-src'],
    computed: {
        welcomeTexts() {
            return this.$store.getters.welcomeTexts;
        },
    }
}
</script>

<style scoped>
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