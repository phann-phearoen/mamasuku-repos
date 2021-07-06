<template>

  <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" :class="{'ml': pushRight}" href="#"><img class="img-fluid logo" src="../assets/logo.png" alt="logo"></a>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr ml-auto mt-4">
        <li class="nav-item active mr-4">
          <a class="nav-link" href="#"><img src="../assets/icon01.png" class="img" alt="icon01">学べる動画一覧<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mr-4">
          <a class="nav-link" href="#"><img src="../assets/icon02.png" class="img" alt="icon02">在宅で働くママに相談する</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#"><img src="../assets/icon03.png" class="img" alt="icon03">お問い合わせ</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  
  data() {
    return {
      pushRight: true,
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
  watch: {
    screenWidth(val){
      if(val < 960){
        this.pushRight = false;
      }
      else 
        this.pushRight = true;
    }
  }
  
}

</script>

<style scoped>
.navbar{
  height: 90px;
}
.img{
  height: 20px;
}
.mr{
  margin-right: 150px;
}
.ml{ 
  margin-left: 150px;
}
.nav-link{
  font-size: 95%;
}
.logo{
  height: 60px;
}
</style>
