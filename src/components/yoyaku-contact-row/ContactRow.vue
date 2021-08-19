<template>
<div class="root">
  <div class="row ms-auto">
      <div class="col-lg-2 col-md-3 column justify-center">
          第一希望
      </div>
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        name="date1"
        v-model="date1.day.value" mask="date" 
        :rules="['date']" 
        no-error-icon 
        bottom-slots 
        :error="date1.day.isValid===false"
        label="年月日"
        >
          <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="date1.day.value" name="date1">
                  <div class="row items-center justify-end">
                      <q-btn v-close-popup label="閉じる" color="primary" flat />
                  </div>
                  </q-date>
              </q-popup-proxy>
              </q-icon>
          </template>
        </q-input>
        
      </div>
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        name="time_start1"
        v-model="date1.timeStart.value" 
        mask="time" 
        :rules="['time']" 
        no-error-icon 
        :error="date1.timeStart.isValid===false"
        @focus="validateTimeStart"
        label="開始時刻"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date1.timeStart.value" name="time_start1">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="閉じる" color="primary" flat />
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
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        name="time_end1"
        v-model="date1.timeEnd.value" 
        mask="time" 
        :rules="['time']" 
        no-error-icon 
        :error="date1.timeEnd.isValid===false"
        @focus="validateTimeEnd"
        label="終了時刻"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date1.timeEnd.value" name="time_end1">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="閉じる" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      
  </div>

  <div class="row ms-auto">
      <div class="col-lg-2 col-md-3 column justify-center">
          第二希望
      </div>
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        name="date2"
        v-model="date2.day" 
        mask="date" :rules="['date']" 
        no-error-icon bottom-slots label="年月日">
          <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="date2.day" name="date2">
                  <div class="row items-center justify-end">
                      <q-btn v-close-popup label="閉じる" color="primary" flat />
                  </div>
                  </q-date>
              </q-popup-proxy>
              </q-icon>

          </template>
        </q-input>
      
      </div>
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        name="time_start2"
        v-model="date2.timeStart.value" mask="time" :rules="['time']" 
        no-error-icon label="開始時刻"
        @focus="validateTimeStart2"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date2.timeStart.value" name="time_start2">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="閉じる" color="primary" flat />
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
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        name="time_end2"
        v-model="date2.timeEnd.value" mask="time" :rules="['time']" 
        no-error-icon label="終了時刻"
        :error="date2.timeEnd.isValid===false"
        @focus="validateTimeEnd2"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date2.timeEnd.value" name="time_end2">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="閉じる" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      
  </div>

  <div class="row ms-auto">
      <div class="col-lg-2 col-md-3 column justify-center">
          第三希望
      </div>
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        name="date3"
        v-model="date3.day" 
        mask="date" :rules="['date']" 
        no-error-icon bottom-slots label="年月日">
          <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="date3.day" name="date3">
                  <div class="row items-center justify-end">
                      <q-btn v-close-popup label="閉じる" color="primary" flat />
                  </div>
                  </q-date>
              </q-popup-proxy>
              </q-icon>
          </template>
        </q-input>
    
      </div>
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        name="time_start3"
        v-model="date3.timeStart.value" mask="time" :rules="['time']" 
        no-error-icon label="開始時刻"
        :error="date3.timeStart.isValid===false"
        @focus="validateTimeStart3"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date3.timeStart.value" name="time_start3">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="閉じる" color="primary" flat />
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
      <div class="col-lg-3 col-md-4">

        <q-input outlined 
        name="time_end3"
        v-model="date3.timeEnd.value" mask="time" :rules="['time']" 
        no-error-icon label="終了時刻"
        :error="date3.timeEnd.isValid===false"
        @focus="validateTimeEnd3"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date3.timeEnd.value" name="time_end3">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="閉じる" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

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
      if(this.date1.timeEnd.value !== ''){
        this.validateTimeEnd();
      }
      else{
        this.$store.commit('yoyakuInfo/validateTimeStart');
      }
    },
    validateTimeEnd() {
      this.$store.commit('yoyakuInfo/validateTimeEnd');
    },

    validateTimeStart2() {
      if(this.date2.timeEnd.value !== ''){
        this.validateTimeEnd2();
      }
    },
    validateTimeEnd2() {
      this.$store.commit('yoyakuInfo/validateTimeEnd2');
    },
    validateTimeStart3() {
      if(this.date3.timeEnd.value !== ''){
        this.validateTimeEnd3();
      }
    },
    validateTimeEnd3() {
      this.$store.commit('yoyakuInfo/validateTimeEnd3');
    },
  }
}
</script>

<style scoped>
.q-time:deep().q-time__header{
    background-color: #eb7fa2;
}
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

.q-date:deep().q-date__header{
    background-color: #eb7fa2;
}
.q-date:deep().q-date__navigation{
    width: 100%;
    margin: 0;
    padding: 0;
}
.q-date:deep().q-date__arrow{
    display: inline-block;
    width: fit-content;
    margin: 0;
    padding: 0;
}
.q-date:deep() .relative-position.overflow-hidden.flex{
    width: fit-content;
    margin: 0;
    padding: 0px;
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