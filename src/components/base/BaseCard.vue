<template>
    <div class="q-pa-md">

        <q-card class="my-card items-center">

            <div class="col column items-center">
                <q-img :src="src" style="width: 50%" ratio="1" class="q-mt-md"/>
            </div>
           
            <q-card-section>
                <div class="text-h6 name" :class="{'name-mobile': screenWidth < 500}">{{ name }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none description" 
            :class="{'description-mobile': screenWidth < 500}"
            :style="{ height: height + 'em' }"
            >
                <ul>
                    <li  v-for="line in description" :key="line" class="des">
                        {{ line }}
                    </li>
                </ul>
            </q-card-section>

            <router-link class="column items-center link" to="/vue-pages/contact">
                    <q-btn unelevated rounded class="button items-center" label="相談する" style="margin-bottom: 3vh"/>
            </router-link>
            
        </q-card>
    </div>
</template>

<script>
export default {
    props: ['src', 'name', 'description'],
    data() {
        return {
            screenWidth: 0,
            height: 0
        }
    },
    watch: {
        screenWidth(val){
            if(val < 500)
                this.height = null;
            else if(val < 960)
                this.height = 13;
            else if(val < 1030)
                this.height = 16;
            else if(val < 1400)
                this.height = 13;
            else
                this.height = 10; 
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
}
</script>

<style scoped>
.des{
    list-style-type: none;
    margin-left: -2em;
}
.link{
    text-decoration: none;
}
.button{
    background-color: #eb7fa2;
    color: white;
    width: 50%;
    margin-bottom: .5em;
}
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
.name-mobile{
   color: #eb7fa2;
   font-family: 'M PLUS Rounded 1c', sans-serif;
   font-weight: 600;
   font-size: 1em;
}
.description-mobile{
  color: #787878;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 400;
  font-size: .75em;
}
</style>
