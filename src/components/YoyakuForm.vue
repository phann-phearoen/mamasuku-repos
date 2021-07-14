<template>
<div class="contact">
    <base-title :title="'ご予約フォーム'" class="mb-4"></base-title>
    
    <form @submit.prevent="submitForm">
            <form-slot :label="'お名前'">
                <template v-slot:required><span style="color: red" v-if="!nameIsValid">（必須）</span></template>
                <input type="text" class="form-control field" v-model.trim="name" @blur="validateName">
            </form-slot>

            <form-slot :label="'電話番号'">
                <template v-slot:required><span style="color: red" v-if="!phoneIsValid">（必須）</span></template>
                <input type="phone" class="form-control field" v-model.trim="phone" @blur="validatePhone">
            </form-slot>

            <form-slot :label="'メールアドレス'">
                <template v-slot:required><span style="color: red" v-if="!emailIsValid">（必須）</span></template>
                <input type="email" class="form-control field" v-model.trim="email" @blur="validateEmail">
            </form-slot>

            <form-slot :label="'ご希望の日時'">
                <template v-slot:required><span style="color: red" v-if="!apoIsValid">（必須）</span></template>
                <div class="container overflow-hidden">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 d-flex align-items-center mx-0">
                            <label class="label ">第一希望</label>
                        </div>
                        <div class="col-lg-3 col-md-3 mx-0 mb-1">
                            <input type="text" class="form-control field " v-model.trim="apo.intend1.purpose" @blur="validateApo">
                        </div>
                        <div class="col-lg-2 col-md-2 mx-0">
                            <input type="text" class="form-control field " v-model.trim="apo.intend1.timeStart" @blur="validateApo">
                        </div>
                        <div class="col-lg-1 col-md-1 d-flex align-items-center"><div class="">～</div></div>
                        <div class="col-lg-2 col-md-2">
                            <input type="text" class="form-control field " v-model.trim="apo.intend1.timeEnd" @blur="validateApo">
                        </div>
                        <div class="col-lg-2 col-md-2 d-flex align-items-center">
                            <label class="label ">の間に開始</label>
                        </div>
                    </div>
                </div>

                <div class="container overflow-hidden">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 d-flex align-items-center mx-0">
                            <label class="label ">第二希望</label>
                        </div>
                        <div class="col-lg-3 col-md-3 mx-0 mb-1">
                            <input type="text" class="form-control field">
                        </div>
                        <div class="col-lg-2 col-md-2 mx-0">
                            <input type="text" class="form-control field">
                        </div>
                        <div class="col-lg-1 col-md-1 d-flex align-items-center"><div class="">～</div></div>
                        <div class="col-lg-2 col-md-2">
                            <input type="text" class="form-control field">
                        </div>
                        <div class="col-lg-2 col-md-2 d-flex align-items-center">
                            <label class="label ">の間に開始</label>
                        </div>
                    </div>
                </div>

                <div class="container overflow-hidden">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 d-flex align-items-center mx-0">
                            <label class="label ">第三希望</label>
                        </div>
                        <div class="col-lg-3 col-md-3 mx-0 mb-1">
                            <input type="text" class="form-control field">
                        </div>
                        <div class="col-lg-2 col-md-2 mx-0">
                            <input type="text" class="form-control field">
                        </div>
                        <div class="col-lg-1 col-md-1 d-flex align-items-center"><div class="">～</div></div>
                        <div class="col-lg-2 col-md-2">
                            <input type="text" class="form-control field">
                        </div>
                        <div class="col-lg-2 col-md-2 d-flex align-items-center">
                            <label class="label ">の間に開始</label>
                        </div>
                    </div>
                </div>
                
            </form-slot>

            <form-slot :label="'その他ご質問等'">
                <template v-slot:required><span style="color: red" v-if="!questionIsValid">（必須）</span></template>
                <textarea name="" class="form-control textarea" rows="3" v-model.trim="question" @blur="validateQuestion"></textarea>
            </form-slot>

            <div class="container">
                <div class="row my-4">
                    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 ms-auto">
                        <div class="col-3 d-flex align-items-center badge rounded-pill py-2">
                            <div class="mx-auto">ご注意ください！</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 ms-auto">
                        <div class="row warning" style="color: red">{{ formwarn1 }}</div>
                        <div class="row warning">{{ formwarn2 }}</div>
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
export default {
    components: { FormSlot, BtnSend, },

    data() {
        return {
            name: '', nameIsValid: true,
            phone: '', phoneIsValid: true,
            email: '', emailIsValid: true,
            apo: {
                intend1: { purpose: '', timeStart: '', timeEnd: ''}
            }, apoIsValid: true,
            question: '', questionIsValid: true,
            formwarn1: 'フォームからのお申し込みだけでは、ご予約は成立しておりません。',
            formwarn2: `弊社スタッフより日時の調整やご確認のために、必ずメールまたはお電話をさせていただきます。
                最終的にこちらより確定メールを送らせていただいてから成立となります。
                万が一 24 時間以上経っても連絡がない場合はテキストテキストテキストテキストテキストテキスト。`,
        }
    },
    
    methods: {
        validateName() {
            if(this.name === '')
                this.nameIsValid = false;
            else
                this.nameIsValid = true;
        },
        validatePhone() {
            if(this.phone === '')
                this.phoneIsValid = false;
            else 
                this.phoneIsValid = true;
        },
        validateEmail() {
            if(this.email === '')
                this.emailIsValid = false;
            else 
                this.emailIsValid = true;
        },
        validateApo() {
            if(this.apo.intend1.purpose === '' || this.apo.intend1.timeStart === '' || this.apo.intend1.timeEnd === '')
                this.apoIsValid = false;
            else 
                this.apoIsValid = true;
        },
        validateQuestion() {
            if(this.question === '')
                this.questionIsValid = false;
            else
                this.questionIsValid = true;
        },

        submitForm() {
            if(this.nameIsValid && this.phoneIsValid && this.emailIsValid && this.apoIsValid && this.questionIsValid){
                try{
                    /*some action*/
                    console.log('success');
                    this.name = ''; this.phone = ''; this.email = ''; this.apo.intend1.purpose = '';
                    this.apo.intend1.timeStart = ''; this.apo.intend1.timeEnd = ''; this.question = '';
                }
                catch{
                    /*some action*/
                }
            }
            else{
                /*some action*/
            }
        }
    },
}
</script>

<style scoped>
.contact{
    margin-top: 100px;
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
.label{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
    font-size: 1em;
}
.warning{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
    font-size: 1em;
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
</style>
