<template>
<div class="root">
  <div class="row ms-auto">
      <div class="col-lg-2 col-md-3 column justify-center">
          第一希望
      </div>
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        v-model="date1.day.value" mask="date" 
        :rules="['date']" 
        no-error-icon 
        bottom-slots 
        :error="date1.day.isValid===false"
        @focus="validateDay"
        >
          <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="date1.day.value">
                  <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                  </q-date>
              </q-popup-proxy>
              </q-icon>
          </template>
        </q-input>
        
      </div>
      <div class="col-lg-2 col-md-3">

        <q-input outlined 
        v-model="date1.timeStart.value" 
        mask="time" 
        :rules="['time']" 
        no-error-icon 
        :error="date1.timeStart.isValid===false"
        @focus="validateTimeStart"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date1.timeStart.value" >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      <div class="col column justify-center">
        <div class="row wave">～</div>
      </div>
      <div class="col-lg-2 col-md-3 q-ml-xs">

        <q-input outlined 
        v-model="date1.timeEnd.value" 
        mask="time" 
        :rules="['time']" 
        no-error-icon 
        :error="date1.timeEnd.isValid===false"
        @focus="validateTimeEnd"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date1.timeEnd.value">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      <div class="col-lg-2 col-md-3 column justify-center">
          の間に開始
      </div>
  </div>

  <div class="row ms-auto">
      <div class="col-lg-2 col-md-3 column justify-center">
          第二希望
      </div>
      <div class="col-lg-3 col-md-4">

        <q-input outlined v-model="date2.day" mask="date" :rules="['date']" no-error-icon bottom-slots>
          <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="date2.day">
                  <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                  </q-date>
              </q-popup-proxy>
              </q-icon>
          </template>
        </q-input>
      
      </div>
      <div class="col-lg-2 col-md-3">

        <q-input outlined v-model="date2.timeStart" mask="time" :rules="['time']" no-error-icon>
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date2.timeStart" >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      <div class="col column justify-center">
        <div class="row wave">～</div>
      </div>
      <div class="col-lg-2 col-md-3 q-ml-xs">

        <q-input outlined v-model="date2.timeEnd" mask="time" :rules="['time']" no-error-icon>
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date2.timeEnd">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      <div class="col-lg-2 col-md-3 column justify-center">
          の間に開始
      </div>
  </div>

  <div class="row ms-auto">
      <div class="col-lg-2 col-md-3 column justify-center">
          第三希望
      </div>
      <div class="col-lg-3 col-md-4">

        <q-input outlined v-model="date3.day" mask="date" :rules="['date']" no-error-icon bottom-slots>
          <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="date3.day">
                  <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                  </q-date>
              </q-popup-proxy>
              </q-icon>
          </template>
        </q-input>
    
      </div>
      <div class="col-lg-2 col-md-3">

        <q-input outlined v-model="date3.timeStart" mask="time" :rules="['time']" no-error-icon>
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date3.timeStart" >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      <div class="col column justify-center">
        <div class="row wave">～</div>
      </div>
      <div class="col-lg-2 col-md-3 q-ml-xs">

        <q-input outlined v-model="date3.timeEnd" mask="time" :rules="['time']" no-error-icon>
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date3.timeEnd">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      <div class="col-lg-2 col-md-3 column justify-center">
          の間に開始
      </div>
  </div>
</div>
</template>

<script>

export default {
  computed: {
    date1: {
      set(value) {
        this.$store.commit('yoyakuInfo/setDate1', value);
      },
      get() {
        return this.$store.getters['yoyakuInfo/getDate1'];
      }
    },
    date2: {
      set(value) {
        this.$store.commit('yoyakuInfo/setDate2', value);
      },
      get() {
        return this.$store.getters['yoyakuInfo/getDate2'];
      }
    },
    date3: {
      set(value) {
        this.$store.commit('yoyakuInfo/setDate3', value);
      },
      get() {
        return this.$store.getters['yoyakuInfo/getDate3'];
      }
    },
    dateIsValid(){
      return this.$store.getters['yoyakuInfo/getDateIsValid'];
    },
  },
  methods: {
    validateDay() {
      this.$store.commit('yoyakuInfo/validateDay');
    },
    validateTimeStart() {
      this.$store.commit('yoyakuInfo/validateTimeStart');
    },
    validateTimeEnd() {
      this.$store.commit('yoyakuInfo/validateTimeEnd');
    },
  }
}
</script>

<style scoped>
.q-time{
    width: 100px;
}
.q-time:deep().q-time__link{
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 10px;
}
.q-time:deep().q-time__header-label div{
    width: 10px;
}
.q-time:deep().q-time__header-ampm{
    margin-left: 50px;
    width: 20px;
}

.q-date{
  width: 100px;
}
.q-date:deep().q-date__navigation{
    margin-left: 1em;
    padding-right: 1em;
    width: 95px; 
}
.wave{
  margin-left: auto;
  margin-right: 30px;
}
.q-input :deep().q-field__append{
  padding: 0;
  margin: 0;
  width: 30px;
}

.ms-2{
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
.column{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
    font-size: 1em;
}
.field-error{
    border: solid 2px red;
}
.hint{
    color: grey;
    font-size: .8em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
.error-state{
    color: red;
    font-size: .8em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
.correct-state{
    color: blue;
    font-size: .8em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>