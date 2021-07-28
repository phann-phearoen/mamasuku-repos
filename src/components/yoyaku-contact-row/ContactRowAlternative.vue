<template>
<div class="row">
    <div class="col-lg-2 col-md-3 column justify-center">
        第一希望
    </div>
    <div class="col-lg-3 col-md-4">

        <q-input label="年月日" outlined v-model="date1.day" mask="date" :rules="['date']" no-error-icon bottom-slots></q-input>
    
    </div>
    <div class="col-lg-2 col-md-3">

        <q-input label="始時間" outlined v-model="date1.timeStart" mask="time" :rules="['time']" no-error-icon>
        </q-input>

    </div>
    <div class="col column justify-center">
        ～
    </div>
    <div class="col-lg-2 col-md-3 q-ml-xs">

        <q-input label="終時間" outlined v-model="date1.timeEnd" mask="time" :rules="['time']" no-error-icon>
        </q-input>

    </div>
    <div class="col-lg-2 col-md-3 column justify-center">
        の間に開始
    </div>
</div>

<div class="row">
    <div class="col-lg-2 col-md-3 column justify-center">
        第二希望
    </div>
    <div class="col-lg-3 col-md-4">

        <q-input label="年月日" outlined v-model="date2.day" mask="date" :rules="['date']" no-error-icon bottom-slots></q-input>

    </div>
    <div class="col-lg-2 col-md-3">

        <q-input label="始時間" outlined v-model="date2.timeStart" mask="time" :rules="['time']" no-error-icon></q-input>

    </div>
    <div class="col column justify-center">
        ～
    </div>
    <div class="col-lg-2 col-md-3 q-ml-xs">

        <q-input label="終時間" outlined v-model="date2.timeEnd" mask="time" :rules="['time']" no-error-icon></q-input>

    </div>
    <div class="col-lg-2 col-md-3 column justify-center">
        の間に開始
    </div>
</div>

<div class="row">
    <div class="col-lg-2 col-md-3 column justify-center">
        第三希望
    </div>
    <div class="col-lg-3 col-md-4">

        <q-input label="年月日" outlined v-model="date3.day" mask="date" :rules="['date']" no-error-icon bottom-slots></q-input>

    </div>
    <div class="col-lg-2 col-md-3">

        <q-input label="始時間" outlined v-model="date3.timeStart" mask="time" :rules="['time']" no-error-icon></q-input>

    </div>
    <div class="col column justify-center">
        ～
    </div>
    <div class="col-lg-2 col-md-3 q-ml-xs">

        <q-input label="終時間" outlined v-model="date3.timeEnd" mask="time" :rules="['time']" no-error-icon></q-input>

    </div>
    <div class="col-lg-2 col-md-3 column justify-center">
        の間に開始
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
  }
   
}
</script>

<style scoped>
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