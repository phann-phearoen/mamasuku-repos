<template>
<div class="mb-5">
    <base-title :title="title" class="q-mt-md"></base-title>
    <div class="row">

        <form class="form" @submit.prevent="sendEmail">
            <div class="form-group from-control">
                <label class="label" for="name">お名前</label><span class="required" v-if="!nameValid">（必須）</span>
                <input type="text" class="form-control" id="name" v-model.trim="name" @blur="validateName">
            </div>

            <div class="form-group from-control">
                <label class="label" for="email">アドレス</label><span class="required" v-if="!emailValid">（必須）</span>
                <input type="email" class="form-control" id="email" v-model.trim="email" @blur="validateEmail">
            </div>
                
            <div class="form-group from-control">
                <label class="label" for="textarea">お問い合わせ内容</label><span class="required" v-if="!messageValid">（必須）</span>
                <textarea class="form-control" id="textarea" rows="3" v-model.trim="message" @blur="validateMessage"></textarea>
            </div>
            
            <div class="row mt-5 form-group from-control">
                <q-btn type="submit" outline rounded color="grey" class="btnMore">
                    <div class="row items-center no-wrap" >
                        <div class="text-center viewMore">送信</div>
                    </div>
                </q-btn>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            title: 'お問い合わせ',
            name: '', nameValid: true,
            email: '', emailValid: true,
            message: '', messageValid: true
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
</style>
