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

                <slot></slot>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['welcomeTexts']
}
</script>

<style scoped>
.lowerContainer{
    border: solid 1.5px pink;
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
    margin-top: -4.5em;
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
