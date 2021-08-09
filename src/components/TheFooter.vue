<template>
  <div class="container-fluid px-0">
    <div class="row footer">
      <footer>
          <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 ms-auto">

            <ul class="list-unstyled ms-3">
              <li class="mb-2 mt-1">
                <a href="https://wannagrow.co.jp" >運営会社</a>
              </li>

              <ul class="list-unstyled" v-scroll-spy-active v-scroll-spy-link>
                <li class="mb-2">
                <a href="#!" >学べる動画一覧</a>
                </li>
                <li class="mb-2">
                  <a href="#!" >在宅で働くママに相当する</a>
                </li>
                <li>
                  <a href="#!" >お問い合わせ</a>
                </li>
              </ul>

            </ul>
          </div>
          
          <div class="text-center p-3 text-light copyright" >
            Copyright © 2016 - 2021 WANNAGROW Inc. All Rights Reserved
          </div> 

      </footer>
    </div>
  </div>
    
    
</template>

<style scoped>

.footer{
  background-color: grey;
  padding-top: 1em;
  height: 190px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
a:hover{
  font-weight: 400;
  font-size: .83em;
}
a{
  color: white;
  font-size: .8em;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 300;
  text-decoration: none;
}
.copyright{
  font-size: .8em;
  font-family: sans-serif;
  font-weight: 300;
}
</style>