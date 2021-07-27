<template>
    <div class="container containerNormal">
        <div class="row">
            <div class="wrapper">
                <img class="img-fluid img-fluidNormal" src="../../assets/parts01.png" alt="part01">
                <p class="plus-text">{{ welcomeTexts }}</p>
            </div>
        </div>

        <slot></slot>
        
    </div>
</template>

<script>

export default {
    props: ['welcomeTexts']
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
