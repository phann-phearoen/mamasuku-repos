<template>
<q-dialog v-model="alert">
      <q-card style="width: 300px" >
        <q-card-section class="q-pt-none alert q-mt-md">
          メールを送信しました
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="閉じる" color="primary" v-close-popup @click="toTop"/>
        </q-card-actions>
      </q-card>
</q-dialog>

<div class="container-fluid">
    <div class="row">
        <div class="mt-5">
            <div class="container">
                <base-title :title="title" class="my-3"></base-title>
            </div>
            
            <form class="form" @submit.prevent="sendEmail" :class="{'form-mobile': screenMode === 'mobile'}">
                
                <label class="ms-4 label" for="name">お名前</label><span style="color: red" v-if="name === ''">（必須）</span>
                
                <div class="ms-4 q-mb-md">
                    <q-input
                        id="name"
                        name="user_name"
                        outlined
                        v-model.trim="name"
                        no-error-icon
                        bottom-slots
                        @focus="nameValidation('pending')"
                        @blur="validateName"
                        :error="!nameIsValid"
                    >
                        <template v-slot:error>
                            お名前を入力してください。
                        </template>
                    </q-input>
                </div>
                
                <label class="ms-4 label" for="email">アドレス</label><span style="color: red" v-if="email === ''">（必須）</span>

                <div class="ms-4 q-mb-md">
                    <q-input
                        id="email"
                        name="user_mail"
                        outlined
                        v-model.trim="email"
                        no-error-icon
                        bottom-slots
                        @focus="emailValidation('pending')"
                        @keyup="validateEmail"
                        @blur="validateEmail"
                        :error="!emailIsValid"
                    >
                        <template v-slot:error>
                            正しいアドレスを入力してください。
                        </template>
                    </q-input>
                </div>
                    
                <label class="ms-4 label" for="message">お問い合わせ内容</label><span style="color: red" v-if="message === ''">（必須）</span>
                <div class="ms-4 q-ml-sm">
                    <q-input
                        type="textarea"
                        name="message"
                        id="message"
                        outlined
                        v-model.trim="message"
                        no-error-icon
                        bottom-slots
                        @focus="messageValidation('pending')"
                        @blur="validateMessage"
                        :error="!messageIsValid"
                    >
                        <template v-slot:error>
                            お問い合わせ内容を入力してください。
                        </template>
                    </q-input>
                
                </div>

                <btn-send></btn-send>

            </form>
            
        </div>
    </div>
</div>

</template>

<script>
import emailjs from 'emailjs-com';

import{ init } from 'emailjs-com';
init("user_VtX1Olx5DpcWVsjca1cFM");

export default {
    data() {
        return {
            title: 'お問い合わせ',
            name: '', nameIsValid: 'pending',
            email: '', emailIsValid: 'pending',
            message: '', messageIsValid: 'pending',
            screenMode: null,
            screenWidth: 0,
            alert: false,
        }
    },
    
    methods: {
        nameValidation(val) {
            this.nameIsValid = val;
        },
        emailValidation(val) {
            this.emailIsValid = val;
        },
        messageValidation(val) {
            this.messageIsValid = val;
        },
        validateName(){
            if(this.name !== '')
                this.nameIsValid = true;
            else
                this.nameIsValid = false;
        },
        validateEmail() {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email))
                this.emailIsValid = true;
            else
                this.emailIsValid = false;
        },
        validateMessage(){
            if(this.message !== '')
                this.messageIsValid = true;
            else
                this.messageIsValid = false;
        },

        sendEmail (e) {
            if(this.nameIsValid === true && this.emailIsValid === true && this.messageIsValid === true){
                emailjs.sendForm('service-mamasuku', 'template-toiawase', e.target, 'user_VtX1Olx5DpcWVsjca1cFM')
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
                this.validateMessage();
            }
        },
        toTop() {
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant'});
            }, 5);
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
        }   
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

<style>
.alert{
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: grey;
}
.q-card__actions{
    width: 300px;
}
.btnMore{
    width: 20em;
    height: 1.9em;
    margin: 0 auto;
}

.label{
  color: #787878;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 400;
  font-size: 1em;
}
.required{
  color: red;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 400;
  font-size: .8em;
}
.viewMore{
    color: grey;
    font-size: 20px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
}

.form{
    width: 50%;
    margin: 0 auto;
}

.button-mobile{
    border: solid 1px grey;
    color: grey;
    width: 70%;
    font-size: .8em;
}
.form-mobile{
    width: 85%;
    margin: 0 auto;
}

.button-tablet{
    border: solid 1px grey;
    color: grey;
    width: 70%;
    font-size: 1em;
}

.button-normal{
    border: solid 1px grey;
    color: grey;
    width: 50%;
    font-size: 1.3em;
}
</style>
