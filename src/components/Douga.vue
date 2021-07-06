<template>
    <div class="container">
        <div class="wrapper">
            <img class="img-fluid" src="../assets/parts01.png" alt="part01">
            <p class="plus-text">{{ welcomeTexts }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        welcomeTexts: 
        `在宅で働くにあたり、色々と学べる動画をご用意しました！
そしてなんと！
動画に加えて、在宅で働いている現役ママにも相談できちゃいますよ！
テキストテキストテキストテキストテキストテキストテキストテキストテキスト
テキストテキストテキストテキストテキストテキストテキストテキストテキスト`,
        }
    }
}
</script>

<style scoped>
.container{
    border: 1.5px solid pink;
    width: 67%;
    height: 1000px;
    margin-top: 6em;
}
.img-fluid{
    width: 96%;
    margin-top: -5em;
    margin-left: 2em;
}
.wrapper{
    position: relative;
    display: block;
}
.plus-text{
    left: 19%;
    top: 30%;
    position: absolute;
    width: 60%;
    font-size: 1em;
    color: grey;
    white-space: pre;
}
</style>