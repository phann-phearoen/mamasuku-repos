<template>
    <div class="q-pa-md items-start q-gutter-md">
        <q-card class="my-card">

            <q-avatar>
                <img :src="src">
            </q-avatar>
            
            <q-card-section>
                <div class="text-h6 name">{{ name }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none description">
                {{ description }}
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
    props: ['src', 'name', 'description'],
}
</script>

<style scoped>
.name{
   color: #eb7fa2;
   font-family: 'M PLUS Rounded 1c', sans-serif;
   font-weight: 600;
   font-size: 1.5em;
}
.description{
  color: #787878;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 400;
  font-size: 1em;
}
</style>