<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section style="height: 90px">
        <div class="text-h6" :class="{'text-h6-mobile': screenWidth < 500 }">{{ title }}</div>
      </q-card-section>

      <div class="q-video"> 
        <iframe
          :src="clip"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
    props: ['clip', 'id'],
    data() {
        return {
        screenMode: null,
        screenWidth: 0,
        title: '',
        }
    },
    beforeCreate() {
      const ytApiKey = "AIzaSyDTIaZPJJjMWiJ5a81Ze50vLcpLVwYJaYU";
      fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + this.id + "&fields=items(id%2Csnippet)" + "&key=" + ytApiKey)
      .then(
        (response) => {
          if(response.ok) {
            return response.json();
          }
        }
      ).then(
        (data) => {
          this.title = data.items[0].snippet.title;
        }).catch((error) => {
          console.log(error);
      });
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
