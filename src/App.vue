<template>
<div class="root">
  <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#theNavbar" aria-controls="theNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      
        <router-link class="navbar-brand" to="/" :class="{'ml': screenWidth > 1025}">
          <img class="img-fluid logo" 
          :class="{'logo-mobile': screenMode === 'mobile'}" 
          src="./assets/logo.png" alt="logo"
        ></router-link>
      
        <div class="collapse navbar-collapse" id="theNavbar">
          <ul class="navbar-nav mr ms-auto mt-4" v-scroll-spy-active v-scroll-spy-link>
            <li class="nav-item me-4">
              <a class="nav-link" href="#douga"><img src="./assets/icon01.png" class="img" alt="icon01">学べる動画一覧</a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#soudan"><img src="./assets/icon02.png" class="img" alt="icon02">在宅で働くママに相談する</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#toi-awase"><img src="./assets/icon03.png" class="img" alt="icon03">お問い合わせ</a>
            </li>
          </ul>
        </div>

      </div>
  </nav>

  <router-view></router-view>

  <the-footer></the-footer>
</div>
</template>

<script>
import TheFooter from './components/TheFooter.vue';

export default {
  components: { TheFooter, },
  name: 'LayoutDefault',
  
  data() {
        return {
        screenMode: null,
        screenWidth: 0,
        }
    },
    created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
      console.log(Function.screenMode);
    },
    unmounted() {
            window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
        this.screenWidth = window.innerWidth;
        }    
    },
    watch: {
        screenWidth(val){
        if(val > 960){
            this.screenMode = 'normal';
        }
        else if(val > 500){
            this.screenMode = 'tablet';
        }
        else
            this.screenMode = 'mobile';
        }
    }
}
</script>

<style scoped>
.active{
font-weight: 600;
}
.root{
  margin-bottom: 190px;
}
@media (max-width: 100vw) {
  .navbar-collapse
    {
      background-color:white;
    }
}
.navbar{
  height: 90px;
}
.img{
  height: 20px;
}
.mr{
  margin-right: 9em;
}
.ml{ 
  margin-left: 9em;
}
.nav-link{
  font-size: .95em;
}
.logo{
  height: 60px;
}

.logo-mobile{
  height: 45px;
}
</style>
