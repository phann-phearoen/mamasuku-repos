<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6" :class="{'text-h6-mobile': screenWidth < 500 }">{{ title }}</div>
      </q-card-section>

      <q-video :src="clip" alt="" />

      <q-card-section class="q-pt-none" :class="{'des-mobile': screenWidth < 500}">
        {{ description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
    props: ['title', 'clip', 'description'],
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
}
</script>

<style scoped>
.text-h6{
   color: #eb7fa2;
   font-family: 'M PLUS Rounded 1c', sans-serif;
   font-weight: 600;
   font-size: 1.5em;
}
.q-pt-none{
  color: #787878;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 400;
  font-size: 1em;
}

.text-h6-mobile{
   color: #eb7fa2;
   font-family: 'M PLUS Rounded 1c', sans-serif;
   font-weight: 600;
   font-size: 1em;
}
.des-mobile{
  color: #787878;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 400;
  font-size: .75em;
}
</style>
