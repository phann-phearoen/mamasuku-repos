<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#"><img src="../assets/logo.png" height="50" alt="logo"></a>
  
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
}
</script>

<style scoped>
.img{
  height: 20px;
}
.mr{
  margin-right: 150px;
}
.nav-link{
  font-size: 95%;
}
</style>
