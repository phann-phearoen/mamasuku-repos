<template>
    <li class="col-lg-6">
        <h4 class="title">{{ title }}</h4>
        <img :src="clip" alt="" class="img-fluid clip">
        <p class="description">{{ description }}</p>
    </li>
</template>

<script>
export default {
    props: ['title', 'clip', 'description'],
}
</script>

<style scoped>
.title{
   color: #eb7fa2;
   font-family: 'M PLUS Rounded 1c', sans-serif;
   font-weight: 500;
   font-size: 24px;
}
.description{
    color: #787878;
    font-family: 'M PLUS Rounded 1c', sans-serif;
   font-weight: 400;
   font-size: 18px;
}
</style>