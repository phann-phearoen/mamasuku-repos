<template>
<div class="container-fluid my-5">
  <div class="row">

    <div class="col-12 px-0 pink">  

      <div class="col-10 column items-center white-wrapper">
        <div class="container pink-wrapper">
          <base-title :title="title"></base-title>

          <div class="row soudan-cards" v-if="moreClicked">
              <base-card
              class="col-md-4 col-sm-6 col-xs-12 mx-auto"
              v-for="(mama, index) in soudanMama"
              :key="index"
              :src="mama.src"
              :name="mama.name"
              :description="mama.description"
              ></base-card>
          </div>
          <div class="row soudan-cards" v-else>
              <base-card
              class="col-md-4 col-sm-6 col-xs-12 mx-auto"
              v-for="(mama, index) in shortSoudanMamaList"
              :key="index"
              :src="mama.src"
              :name="mama.name"
              :description="mama.description"
              ></base-card>
          </div>

          <toggle-more @toggle-more="toggleMore" :moreClicked="moreClicked"></toggle-more>

        </div>
      </div> 

    </div>
  </div>
</div>
</template>

<script>
import BaseCard from './base/BaseCard.vue';

export default {
  components: { BaseCard },
  data() {
    return {
      moreClicked:false,
      title: '在宅で働いているママへ相談する',
    }
  },
  computed: {
    soudanMama() {
      return this.$store.getters['soudanInfo/soudanMama'];
    },
    shortSoudanMamaList() {
      return this.$store.getters['soudanInfo/shortSoudanMamaList'];
    }
  },
  methods: {
    toggleMore() {
      this.moreClicked = !this.moreClicked;
      console.log(this.soudanMama);
    },
  },
  
}
</script>

<style scoped>

.pink{
  background-color: #fff1f4;
}
.btnMore{
    width: 18em;
    height: 1.9em;
}
.viewMore{
    color: grey;
    font-size: 1.5em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
}
.soudan-cards{
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

.white-wrapper{
  background-color: white;
  margin: 4em auto;
}
.pink-wrapper{
  border: solid 1.5px pink;
  margin: 1em auto;
  width: 96%;
}

</style>
