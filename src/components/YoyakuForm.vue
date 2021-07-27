<template>
<div class="contact">
    <base-title :title="'ご予約フォーム'" class="q-mb-md"></base-title>

    <form @submit.prevent="submitForm">
        <form-slot :label="'お名前'">
            <template v-slot:required><span style="color: red" v-if="!name.isValid">（必須）</span></template>
            <input 
            type="text" 
            class="form-control"
            :class="{'field-error': name.isValid===false}"
            v-model.trim="name.value" 
            @focus="nameValidation(null)" 
            @blur="validateName"
            >
            <div v-if="name.isValid === false" class="error-state mt-1">{{ name.errMsg }}</div>
        </form-slot>

        <form-slot :label="'電話番号'">
            <template v-slot:required><span style="color: red" v-if="!phone.isValid">（必須）</span></template>
            <input 
            type="phone" 
            class="form-control"
            :class="{'field-error': phone.isValid===false}"
            v-model.trim="phone.value" 
            @focus="phoneValidation(null)" 
            @blur="validatePhone"
            >
            <div v-if="phone.isValid === false" class="error-state mt-1">{{ phone.errMsg }}</div>
        </form-slot>

        <form-slot :label="'メールアドレス'">
            <template v-slot:required><span style="color: red" v-if="!email.isValid">（必須）</span></template>
            <input 
            type="email" 
            class="form-control" 
            :class="{'field-error': email.isValid===false}"
            v-model.trim="email.value" 
            @focus="emailValidation(null)"
            @blur="validateEmail"
            >
            <div v-if="email.isValid === false" class="error-state mt-1">{{ email.errMsg }}</div>
        </form-slot>

        <form-slot :label="'ご希望の日時'">
            <template v-slot:required><span style="color: red" v-if="!apoIsValid">（必須）</span></template>
            
            <contact-row></contact-row>

        </form-slot>

        <form-slot :label="'ご希望の日時'">
            <template v-slot:required><span style="color: red" v-if="!apoIsValid">（別）</span></template>
            
           <contact-alt></contact-alt>

        </form-slot>

        <form-slot :label="'その他ご質問等'" style="border-bottom: solid 1px grey">
            <template v-slot:required></template>
            <textarea 
            class="form-control textarea" 
            rows="3" 
            v-model.trim="question" 
            ></textarea>
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
                <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 ms-auto">
                    <div class="row warning" style="color: red">{{ warn1 }}</div>
                    <div class="row warning">{{ warn2 }}</div>
                </div>
            </div>
        </div>

        <btn-send></btn-send>

    </form>
</div>
    
</template>

<script>
import BtnSend from './base/BtnSend.vue';
import FormSlot from './base/FormSlot.vue';
import ContactRow from './yoyaku-contact-row/ContactRow.vue';
import ContactAlt from './yoyaku-contact-row/ContactRowAlternative.vue';

export default {
    components: { FormSlot, BtnSend, ContactRow, ContactAlt},

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

        submitForm() {
            if(this.nameIsValid && this.phoneIsValid && this.emailIsValid){
                try{
                    /*some action*/
                    alert('success');
                    this.name = ''; this.phone = ''; this.email = '';
                    this.question = '';
                    console.log(this.apo);
                }
                catch{
                    /*some action*/
                }
            }
            else{
                this.validateName();
                this.validateEmail();
                this.validatePhone();
                this.validateApo();
            }
        }
    },
}
</script>

<style scoped>
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
