<template>
<div class="contact">
    <base-title></base-title>
    
    <form action="">
            <form-slot :label="'お名前'">
                <template v-slot:required></template>
                <input type="text" class="form-control" >
            </form-slot>

            <form-slot :label="'電話番号'">
                <template v-slot:required></template>
                <input type="phone" class="form-control" >
            </form-slot>

            <form-slot :label="'メールアドレス'">
                <template v-slot:required></template>
                <input type="email" class="form-control" >
            </form-slot>

            <form-slot :label="'ご希望の日時'">
                <template v-slot:required></template>
                <div class="container overflow-hidden">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 d-flex align-items-center mx-0">
                            <label class="label ">第一希望</label>
                        </div>
                        <div class="col-lg-3 col-md-3 mx-0">
                            <input type="text" class="form-control ">
                        </div>
                        <div class="col-lg-2 col-md-2 mx-0">
                            <input type="text" class="form-control ">
                        </div>
                        <div class="col-lg-1 col-md-1 d-flex align-items-center"><div class="">～</div></div>
                        <div class="col-lg-2 col-md-2">
                            <input type="text" class="form-control ">
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
                        <div class="col-lg-3 col-md-3 mx-0">
                            <input type="text" class="form-control ">
                        </div>
                        <div class="col-lg-2 col-md-2 mx-0">
                            <input type="text" class="form-control ">
                        </div>
                        <div class="col-lg-1 col-md-1 d-flex align-items-center"><div class="">～</div></div>
                        <div class="col-lg-2 col-md-2">
                            <input type="text" class="form-control ">
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
                        <div class="col-lg-3 col-md-3 mx-0">
                            <input type="text" class="form-control ">
                        </div>
                        <div class="col-lg-2 col-md-2 mx-0">
                            <input type="text" class="form-control ">
                        </div>
                        <div class="col-lg-1 col-md-1 d-flex align-items-center"><div class="">～</div></div>
                        <div class="col-lg-2 col-md-2">
                            <input type="text" class="form-control ">
                        </div>
                        <div class="col-lg-2 col-md-2 d-flex align-items-center">
                            <label class="label ">の間に開始</label>
                        </div>
                    </div>
                </div>
                
            </form-slot>

            <form-slot :label="'その他ご質問等'">
                <template v-slot:required></template>
                <textarea name="" class="form-control" rows="3"></textarea>
            </form-slot>

            <div class="container">
                <div class="row my-4">
                    <div class="col-lg-11 col-md-11 col-sm-12 ml-auto">
                        <div class="col-3 d-flex align-items-center badge rounded-pill py-2">
                            <div class="mx-auto">ご注意ください！</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 col-md-10 col-sm-12 ml-auto">
                        <div class="row warning" style="color: red">{{ formwarn1 }}</div>
                        <div class="row warning">{{ formwarn2 }}</div>
                    </div>
                </div>
            </div>
            <div class="container my-4">
                <div class="column items-center">
                    <q-btn type="button" unelevated rounded class="button items-center" label="送信" />
                </div>
            </div>
    </form>
</div>
    
</template>

<script>
import FormSlot from './base/FormSlot.vue';

export default {
    components: { FormSlot, },

    data() {
        return {
            formwarn1: 'フォームからのお申し込みだけでは、ご予約は成立しておりません。',
            formwarn2: `弊社スタッフより日時の調整やご確認のために、必ずメールまたはお電話をさせていただきます。
最終的にこちらより確定メールを送らせていただいてから成立となります。
万が一 24 時間以上経っても連絡がない場合はテキストテキストテキストテキストテキストテキスト。`
        }
    }
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
    white-space: pre;
}
input{
    height: 80%;
}
</style>
