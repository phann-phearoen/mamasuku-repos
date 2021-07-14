<template>
<div class="container-fluid px-0 my-5">
    <div class="row root">
        <div class="col-12 mb-5 mt-5">
            <base-title :title="title" class="my-3"></base-title>
            <div class="row mr-auto ml-auto"><div v-if="formError" class="col-12 text-center" style="color: red">{{ inputErrorMsg }}</div></div>
            <div class="row">

                <form class="form" @submit.prevent="sendEmail" :class="{'form-mobile': screenMode === 'mobile'}">
                    <div class="form-group from-control mb-3">
                        <label class="label" for="name">お名前</label><span class="required" v-if="!nameValid">（必須）</span>
                        <input type="text" class="form-control field" 
                        id="name" v-model.trim="name" 
                        @blur="validateName"
                        :class="{}"
                        >
                    </div>

                    <div class="form-group from-control mb-3">
                        <label class="label" for="email">アドレス</label><span class="required" v-if="!emailValid">（必須）</span>
                        <input type="email" class="form-control field" 
                        id="email" v-model.trim="email" 
                        @blur="validateEmail"
                        :class="{}"
                        >
                    </div>
                        
                    <div class="form-group from-control">
                        <label class="label" for="textarea">お問い合わせ内容</label><span class="required" v-if="!messageValid">（必須）</span>
                        <textarea class="form-control textarea" 
                        id="textarea" rows="3" v-model.trim="message" 
                        @blur="validateMessage"
                        :class="{}"
                        ></textarea>
                    </div>

                    <btn-send></btn-send>

                </form>
            </div> 
        </div>
    </div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';
import BtnSend from './base/BtnSend.vue';

export default {
  components: { BtnSend },
    data() {
        return {
            title: 'お問い合わせ',
            name: '', nameValid: true,
            email: '', emailValid: true,
            message: '', messageValid: true,
            inputErrorMsg: '',
            formError: false,
            screenMode: null,
            screenWidth: 0,
        }
    },
    methods: {
        validateName () {
            if(this.name === '')
                this.nameValid = false;
            else
                this.nameValid = true;
        },
        validateEmail () {
            if(this.email === '')
                this.emailValid = false;
            else 
                this.emailValid = true; 
        },
        validateMessage () {
            if(this.email === '')
                this.messageValid = false;
            else
                this.messageValid = true;
        },

        sendEmail (e)  {
            if(this.name !== '' || this.email !== '' || this.message !== ''){
                this.formError = false;
                emailjs.sendForm('service_0ogcavi', 'template_ocjzofy', e.target, 'user_ffqgAlHexE8z9VT8h4DXL',
                {
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    alert('Success!')
                }, (error) => {
                    console.log('FAILED...', error);
                    alert('Failed!')
                });
                this.name = '';
                this.email = '';
                this.message = '';
            }
            else{
                this.inputErrorMsg = 'Please input all the fields!';
                this.formError = true;
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
    }
}
</script>

<style scoped>

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

.field{
    height: 1.5em;
    border: solid 1px black;
    border-radius: 2px;
}
.textarea{
    border: solid 1px black;
    border-radius: 2px;
}

.button-mobile{
    border: solid 1px grey;
    color: grey;
    width: 70%;
    font-size: .8em;
}
.form-mobile{
    width:80%;
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
