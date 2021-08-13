<template>
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
                        @keyup="validateName"
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
                        @keyup="validateMessage"
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
init("user_elZx1Ntipum7lqX2uA316");

export default {
    data() {
        return {
            title: 'お問い合わせ',
            name: '', nameIsValid: 'pending',
            email: '', emailIsValid: 'pending',
            message: '', messageIsValid: 'pending',
            screenMode: null,
            screenWidth: 0,
        }
    },
    
    methods: {
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
                emailjs.sendForm('service_fGmail', 'template_lo25zih', e.target, 'user_elZx1Ntipum7lqX2uA316')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                        alert('Your mail has been sent!');
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
