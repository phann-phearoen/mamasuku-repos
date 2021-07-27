<template>
<div class="row">
    <div class="col-lg-2 col-md-3 column justify-center">
        第一希望
    </div>
    <div class="col-lg-3 col-md-4">

        <q-input outlined v-model="date1.day" mask="date" :rules="['date']" no-error-icon bottom-slots>
        <template v-slot:prepend v-if="date1.day===''">
            <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="date1.day">
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

        <q-input outlined v-model="date1.timeStart" mask="time" :rules="['time']" no-error-icon>
        <template v-slot:prepend v-if="date1.timeStart===''">
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="date1.timeStart" >
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
        ～
    </div>
    <div class="col-lg-2 col-md-3 q-ml-xs">

        <q-input outlined v-model="date1.timeEnd" mask="time" :rules="['time']" no-error-icon>
        <template v-slot:prepend v-if="date1.timeEnd===''">
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="date1.timeEnd">
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

<div class="row">
    <div class="col-lg-2 col-md-3 column justify-center">
        第二希望
    </div>
    <div class="col-lg-3 col-md-4">

        <q-input outlined v-model="date2.day" mask="date" :rules="['date']" no-error-icon bottom-slots>
        <template v-slot:prepend v-if="date2.day===''">
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
        <template v-slot:prepend v-if="date2.timeStart===''">
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
        ～
    </div>
    <div class="col-lg-2 col-md-3 q-ml-xs">

        <q-input outlined v-model="date2.timeEnd" mask="time" :rules="['time']" no-error-icon>
        <template v-slot:prepend v-if="date2.timeEnd===''">
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

<div class="row">
    <div class="col-lg-2 col-md-3 column justify-center">
        第三希望
    </div>
    <div class="col-lg-3 col-md-4">

        <q-input outlined v-model="date3.day" mask="date" :rules="['date']" no-error-icon bottom-slots>
        <template v-slot:prepend v-if="date3.day===''">
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
        <template v-slot:prepend v-if="date3.timeStart===''">
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
        ～
    </div>
    <div class="col-lg-2 col-md-3 q-ml-xs">

        <q-input outlined v-model="date3.timeEnd" mask="time" :rules="['time']" no-error-icon>
        <template v-slot:prepend v-if="date3.timeEnd===''">
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
</template>

<script>

export default {
    data() {
        return {
            date1: {day: '', timeStart: '', timeEnd: ''},
            date2: {day: '', timeStart: '', timeEnd: ''},
            date3: {day: '', timeStart: '', timeEnd: ''},
        }
    },
   
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