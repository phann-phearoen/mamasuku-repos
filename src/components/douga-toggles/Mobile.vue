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

                <slot></slot>
            
            </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        welcomeTexts() {
            return this.$store.getters.welcomeTexts;
        },
    }
}
</script>

<style scoped>
.lowerContainer{
    border: solid 1px pink;
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
    top: 30%;
    position: absolute;
    width: 80%;
    font-size: .7em;
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
}
</style>
