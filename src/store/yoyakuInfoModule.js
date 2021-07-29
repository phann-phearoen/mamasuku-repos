export default {
    namespaced: true,
    state() {
        return {
            formwarn1: 'フォームからのお申し込みだけでは、ご予約は成立しておりません。',
            formwarn2: `弊社スタッフより日時の調整やご確認のために、必ずメールまたはお電話をさせていただきます。
                最終的にこちらより確定メールを送らせていただいてから成立となります。
                万が一 24 時間以上経っても連絡がない場合はテキストテキストテキストテキストテキストテキスト。`,
            name: { value: '', isValid: null, errMsg: '' },
            phone: { value: '', isValid: null, errMsg: '' },
            email: { value: '', isValid: null, errMsg: '' },

            apo: [],

            day: { value: '', isValid: null, errMsg: '' },
            startTime: { value: '', isValid: null, errMsg: '' },
            endTime: { value: '', isValid: null, errMsg: '' },
            
            question: '',
        }
    },
    mutations: {
        setName(state, payload) {
            state.name.value = payload;
        },
        setPhone(state, payload) {
            state.phone.value = payload;
        },
        setEmail(state, payload) {
            state.phone.value = payload;
        },
        setQuestion(state, payload) {
            state.question = payload;
        },
        setDay(state, payload) {
            state.day.value = payload;
        },
        setStartTime(state, payload) {
            state.startTime.value = payload;
        },
        setEndTime(state, payload) {
            state.endTime.value = payload;
        },

        validateName(state) {
            if(state.name.value !== '') {
                state.name.isValid = true;
            }
            else{
                state.name.isValid = false;
                state.name.errMsg = 'お名前を入力してください！';
            }
        },
        nameValidation(state, val) {
            state.name.isValid = val;
        },

        validatePhone(state) {
            if(state.phone.value.match(/^\d{10}$/))
                state.phone.isValid = true;
            else {
                state.phone.isValid = false;
                state.phone.errMsg = '正しい番号を入力してください！'
            }
        },
        phoneValidation(state, val) {
            state.phone.isValid = val;
        },

        validateEmail(state) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email.value))
                state.email.isValid = true;
            else{
                state.email.isValid = false;
                state.email.errMsg = '正しいメールアドレスを入力してください！'; 
            }
        },
        emailValidation(state, val) {
            state.email.isValid = val;
        },

        validateDay(state) {
            const reg = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
            if(state.day.value=== '' || !state.day.value.match(reg)){
                state.day.isValid = false;
                state.day.errMsg = '違っています';
            }
            else{
                state.day.isValid = true;
                state.day.errMsg = '正解'
            }
        },
        dayValidation(state, val) {
            state.day.isValid = val;
        },

        validateStartTime(state){
            const reg = /^\d{1,2}:\d{2}([ap]m)?$/;
            if(state.startTime.value === '' || !state.startTime.value.match(reg)){
                state.startTime.isValid = false;
                state.startTime.errMsg = '違っています'
            }
            else{
                state.startTime.isValid = true;
                state.startTime.errMsg = '正解'
            }
        },
        startTimeValidation(state, val) {
            state.startTime.isValid = val;
        },

        validateEndTime(state){
            const reg = /^\d{1,2}:\d{2}([ap]m)?$/;
            if(state.endTime.value === '' || !state.endTime.value.match(reg)){
                state.endTime.isValid = false;
                state.endTime.errMsg = '違っています';
            }
            else{
                state.endTime.isValid = true;
                state.endTime.errMsg = '正解';
            }
        },
        endTimeValidation(state, val) {
            state.endTime.isValid = val;
        },
        
    },

    getters: {
        formwarn1 (state) {
            return state.formwarn1;
        },
        formwarn2 (state) {
            return state.formwarn2;
        },
        getName(state) {
            return state.name;
        },
        getPhone(state) {
            return state.phone;
        },
        getEmail(state) {
            return state.email;
        },
        getQuestion(state) {
            return state.question;
        },
        getDay(state) {
            return state.day;
        },
        getStartTime(state) {
            return state.startTime;
        },
        getEndTime(state) {
            return state.endTime;
        },

    }
};
