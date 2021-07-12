<template>
    <div class="row mt-3">
        <div class="col column items-center">
            <div class="col column items-center">
                <h6 class="title">{{ title }}</h6>
            </div>
            <img src="../../assets/parts03.png" alt="parts03" class="img-fluid parts03" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>

.title{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 600;
    font-size: 2.1vw;
}
.parts03{
    width: 60%;
    margin-top: -4vh;
}
</style>
