<template>
  <div class="row outter">
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

        <div class="row q-mt-xl q-mb-xl">
            <div class="col column items-center">
                <q-btn outline rounded color="grey" class="btnMore" @click="toggleMore">
                    <div class="row items-center no-wrap" v-if="moreClicked === false">
                        <div class="text-center viewMore">
                            もっと見る
                        </div>
                    </div>
                    <div class="row items-center no-wrap" v-else>
                        <div class="text-center viewMore">
                            表示を減らす
                        </div>
                    </div>
                </q-btn>
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
        soudanMama: [
            { 
                src: require('@/assets/soudan-mama.png'),
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: require('@/assets/soudan-mama.png'),
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: require('@/assets/soudan-mama.png'),
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: require('@/assets/soudan-mama.png'),
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: require('@/assets/soudan-mama.png'),
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: require('@/assets/soudan-mama.png'),
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
        ]
    }
  },
  computed: {
    shortSoudanMamaList() {
            const mamaList = [];
            for(let i = 0; i < 3; i++){
                mamaList.push(this.soudanMama[i]);
            }
            return mamaList;
        }
  },
  methods: {
    toggleMore() {
      this.moreClicked = !this.moreClicked
    }
  }
}
</script>

<style scoped>
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

.outter{
  background-color: #fff1f4;
}
.white-wrapper{
  background-color: white;
  margin: 4em auto 4em auto;
}
.pink-wrapper{
  border: solid 1.5px pink;
  margin: 2em auto;
  width: 96%;
}
</style>
