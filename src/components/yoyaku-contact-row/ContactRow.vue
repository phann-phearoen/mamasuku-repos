<template>
    <div class="container overflow-hidden">
        <div class="row mt-1">
            <div class="col-lg-2 col-md-2 col-sm-3 d-flex align-items-center mx-0">
                <label class="label ">{{ title }}</label>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-5 mx-0 mb-1 form-floating">
                <input type="text" 
                id="day"
                class="form-control"
                :class="{'field-error': day.isValid===false}" 
                placeholder="年月日"
                v-model.trim="day.value" 
                @blur="validateDay" 
                @focus="dayValidation(null)"
                >
                <label for="day" class="ms-2">年月日</label>
                <div v-if="day.isValid===null" class="hint mt-1">例：2021/01/01</div>
                <div v-else-if="!day.isValid" class="error-state mt-1">{{ day.errMsg }}</div>
                <div v-else class="correct-state mt-1">{{ day.errMsg }}</div>

            </div>
            <div class="col-lg-2 col-md-2 col-sm-3 mx-0 form-floating">
                <input type="text" 
                id="time-start"
                class="form-control" 
                :class="{'field-error': startTime.isValid===false}"
                placeholder="始時間"
                v-model.trim="startTime.value" 
                @blur="validateStartTime"
                @focus="startTimeValidation(null)"
                >
                <label for="time-start" class="ms-2">始時間</label>
                <div v-if="startTime.isValid===null" class="hint mt-1">例：13:00</div>
                <div v-else-if="!startTime.isValid" class="error-state mt-1">{{ startTime.errMsg }}</div>
                <div v-else class="correct-state mt-1">{{ startTime.errMsg }}</div>                            

            </div>
            <div class="col-1 d-flex align-items-center"><div>～</div></div>

            <div class="col-lg-2 col-md-2 col-sm-3 mx-0 form-floating">
                <input type="text" 
                id="time-end"
                class="form-control"
                :class="{'field-error': endTime.isValid===false}"
                placeholder="終時間"
                v-model.trim="endTime.value" 
                @blur="validateEndTime"
                @focus="endTimeValidation(null)"
                >
                <label for="time-end" class="ms-2">終時間</label>
                <div v-if="endTime.isValid===null" class="hint mt-1">例：13:30</div>
                <div v-else-if="!endTime.isValid" class="error-state mt-1">{{ endTime.errMsg }}</div>
                <div v-else class="correct-state mt-1">{{ endTime.errMsg }}</div>                            

            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 d-flex align-items-center">
                <label class="label ">の間に開始</label>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['title', 'apo'],
    computed: {
        day: {
            set(value) {
                this.$store.commit('yoyakuInfo/setDay', value);
            },
            get() {
                return this.$store.getters['yoyakuInfo/getDay'];
            }
        },
        startTime: {
            set(value) {
                this.$store.commit('yoyakuInfo/setStartTime', value);
            },
            get() {
                return this.$store.getters['yoyakuInfo/getStartTime'];
            }
        },
        endTime: {
            set(value) {
                this.$store.commit('yoyakuInfo/setEndTime', value);
            },
            get() {
                return this.$store.getters['yoyakuInfo/getEndTime'];
            }
        }
    },
    methods:{
        validateDay() {
            this.$store.commit('yoyakuInfo/validateDay');
        },
        dayValidation(val) {
            this.$store.commit('yoyakuInfo/dayValidation', val);
        },

        validateStartTime(){
            this.$store.commit('yoyakuInfo/validateStartTime');
        },
        startTimeValidation(val) {
            this.$store.commit('yoyakuInfo/startTimeValidation', val);
        },

        validateEndTime(){
            this.$store.commit('yoyakuInfo/validateEndTime');
        },
        endTimeValidation(val) {
            this.$store.commit('yoyakuInfo/endTimeValidation', val);
        },
    },

}
</script>

<style scoped>
.ms-2{
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
.label{
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