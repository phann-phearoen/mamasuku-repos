<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>

      <q-video :src="clip" alt="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

      <q-card-section class="q-pt-none">
        {{ description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
    props: ['title', 'clip', 'description'],
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
</style>
