<template>
  <div class="row outter">
    <div class="col-10 column items-center white-wrapper">
      <div class="row pink-wrapper">
        <base-title :title="title"></base-title>

        <div class="row">
            <base-card
            class="col-4 mx-auto"
            v-for="(mama, index) in soudanMama"
            :key="index"
            :src="mama.src"
            :name="mama.name"
            :description="mama.description"
            ></base-card>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: { BaseCard },
  data() {
    return {
        title: '在宅で働いているママへ相談する',
        soudanMama: [
            { 
                src: '../assets/soudan-mama.png', 
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: '../assets/soudan-mama.png', 
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: '../assets/soudan-mama.png', 
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: '../assets/soudan-mama.png', 
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: '../assets/soudan-mama.png', 
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
            { 
                src: '../assets/soudan-mama.png', 
                name: 'R.H さん', 
                description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
            },
        ]
    }
  }
}
</script>

<style scoped>
.outter{
  background-color: #fff1f4;
}
.white-wrapper{
  background-color: white;
  margin: 4em auto 4em auto;
}
.pink-wrapper{
  border: solid 1.5px pink;
  margin: 2em auto 2em auto;
  width: 96%;
}
</style>