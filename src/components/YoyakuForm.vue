<template>
<q-dialog v-model="alert">
      <q-card style="width: 300px">
        <q-card-section class="q-pt-none alert q-mt-md" >
          メールを送信しました
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="閉じる" color="primary" v-close-popup @click="toTop"/>
        </q-card-actions>
      </q-card>
</q-dialog>

<div class="contact">
    <div class="container">
        <base-title :title="'ご予約フォーム'" class="q-mb-md"></base-title>
    </div>
        <form @submit.prevent="submitForm">
            <form-slot :label="'お名前'">
                <template v-slot:required><span style="color: red" v-if="!name.isValid">（必須）</span></template>
                
                <q-input :class="[{'ml-mobile':screenMode==='mobile'}, 'ml']"
                    name="user_name"
                    outlined
                    v-model.trim="name.value"
                    no-error-icon
                    bottom-slots
                    label="お名前を入力してください"
                    @focus="nameValidation('pending')"
                    @keyup="validateName"
                    @blur="validateName"
                    :error="!name.isValid"
                >
                    <template v-slot:error>
                        お名前を入力してください。
                    </template>
                </q-input>
            
            </form-slot>

            <form-slot :label="'電話番号'">
                <template v-slot:required><span style="color: red" v-if="!phone.isValid">（必須）</span></template>
                
                <q-input :class="[{'ml-mobile':screenMode==='mobile'}, 'ml']"
                    name="user_phone"
                    outlined
                    no-error-icon
                    bottom-slots
                    v-model.trim="phone.value" 
                    label="電話番号を入力してください ( 例 : 070-1234-5678)"
                    @focus="phoneValidation('pending')" 
                    @keyup="validatePhone"
                    @blur="validatePhone"
                    :error="!phone.isValid"
                >
                    <template v-slot:error>
                        正しい番号を入力してください。
                    </template>
                </q-input>
            
            </form-slot>

            <form-slot :label="'メールアドレス'">
                <template v-slot:required><span style="color: red" v-if="!email.isValid">（必須）</span></template>
                
                <q-input :class="[{'ml-mobile':screenMode==='mobile'}, 'ml']"
                    name="user_mail"
                    outlined
                    no-error-icon
                    bottom-slots
                    v-model.trim="email.value" 
                    label="メールアドレスを入力してください"
                    @focus="emailValidation('pending')"
                    @blur="validateEmail"
                    :error="!email.isValid"
                >
                    <template v-slot:error>
                        正しいアドレスを入力してください。
                    </template>
                </q-input>

            </form-slot>

            <form-slot :label="'ご希望の日時'">
                <template v-slot:required><span style="color: red" v-if="!dateIsValid">（必須）</span></template>
                
                <contact-row></contact-row>

            </form-slot>

            <form-slot :label="'その他ご質問等'" style="border-bottom: solid 1px grey">
                <template v-slot:required></template>
                <q-input 
                name="inquiry"
                :class="[{'ml-mobile':screenMode==='mobile'}, 'ml']"
                label="その他ご質問等を入力してください"
                type="textarea"
                outlined
                v-model.trim="question" 
                ></q-input>
            </form-slot>
            <div class="container">
                <div class="row my-4">
                    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-5 ms-5">
                        <div class="d-flex align-items-center badge rounded-pill py-2">
                            <div class="mx-auto warn">ご注意ください！</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 mx-auto">
                        <div class="row warning" style="color: red">{{ warn1 }}</div>
                        <div class="row warning">{{ warn2 }}</div>
                    </div>
                </div>
            </div>

            <div class="container">
                <btn-send></btn-send>
            </div>

        </form>
</div>
    
</template>

<script>
import BtnSend from './base/BtnSend.vue';
import FormSlot from './base/FormSlot.vue';
import ContactRow from './yoyaku-contact-row/ContactRow.vue';

import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_VtX1Olx5DpcWVsjca1cFM");

export default {
    components: { FormSlot, BtnSend, ContactRow },
    data() {
        return {
            screenMode: null,
            screenWidth: 0,
            alert: false,
        }
    },
    computed: {
        warn1(){
            return this.$store.getters['yoyakuInfo/formwarn1'];
        },
        warn2(){
            return this.$store.getters['yoyakuInfo/formwarn2'];
        },
        name: {
            set(value) {
                this.$store.commit('yoyakuInfo/setName', value);
            },
            get() {
                return this.$store.getters['yoyakuInfo/getName'];
            }
        },
        phone: {
            set(value) {
                this.$store.commit('yoyakuInfo/setPhone', value);
            },
            get() {
                return this.$store.getters['yoyakuInfo/getPhone'];
            }
        },
        email: {
            set(value) {
                this.$store.commit('yoyakuInfo/setEmail', value);
            },
            get() {
                return this.$store.getters['yoyakuInfo/getEmail'];
            }
        },
        question: {
            set(value) {
                this.$store.commit('yoyakuInfo/setQuestion', value);
            },
            get() {
                return this.$store.getters['yoyakuInfo/getQuestion'];
            }
        },
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
        dateIsValid() {
            if(this.date1.day.isValid===false || this.date1.timeStart.isValid===false || this.date1.timeEnd.isValid===false){
                return false;
            }
            else
                return true;
        },

    },
    
    methods: {

        validateName() {
            this.$store.commit('yoyakuInfo/validateName');
        },
        nameValidation(val) {
            this.$store.commit('yoyakuInfo/nameValidation', val);
        },

        validatePhone() {
            this.$store.commit('yoyakuInfo/validatePhone');
        },
        phoneValidation(val) {
            this.$store.commit('yoyakuInfo/phoneValidation', val);
        },

        validateEmail() {
            this.$store.commit('yoyakuInfo/validateEmail');
        },
        emailValidation(val) {
            this.$store.commit('yoyakuInfo/emailValidation', val);
        },
        validateDate(){
            this.$store.dispatch('yoyakuInfo/validateDate');
        },
        setDateValidation() {
            this.$store.commit('yoyakuInfo/setDateIsValid');
        },
        submitForm(e) {
            if(this.name.isValid===true && this.phone.isValid===true && this.email.isValid===true && this.date1){
                
                emailjs.sendForm('service-mamasuku', 'template-yoyaku', e.target, 'user_VtX1Olx5DpcWVsjca1cFM')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                        this.alert = true;
                    }, (error) => {
                        console.log('FAILED...', error);
                });
                
                e.target.reset();
                
            }
            else{
                this.validateName();
                this.validateEmail();
                this.validatePhone();
                this.validateDate();
            }
        },
        toTop() {
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant'});
            }, 5);
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
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
    },
}
</script>

<style scoped>
.alert{
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: grey;
}

.ml{
    margin-left: 8px;
}
.ml-mobile{
    margin-left: 0px
}

.field-error{
    border: solid 2px red;
}

.error-state{
    color: red;
    font-size: .8em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
}

.contact{
    margin-top: 125px;
}
.button{
    border: solid 1px grey;
    color: grey;
    width: 25%;
    font-size: 1.3vw;
}
.badge{
    background-color: #eb7fa2;
    color: white;
    font-size: 1.7vw;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
}

.warning{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
    font-size: 1em;
}
.textarea{
    border-radius: 2px;
}
.warn{
    color: white;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
    font-size: .9rem;
}
</style>
