export default {
    namespaced: true,
    state() {
        return {
            formwarn1: 'フォームからのお申し込みだけでは、ご予約は成立しておりません。',
            formwarn2: `弊社スタッフより日時の調整やご確認のために、必ずメールまたはお電話をさせていただきます。
                最終的にこちらより確定メールを送らせていただいてから成立となります。
                3日以上経過しても連絡がない場合、何らかのトラブルにより
                こちらにメールが届いていない可能性がございます。
                その際は、お手数をおかけしますが再度ご連絡いただけますと幸いです。`,
            name: { value: '', isValid: 'pending', errMsg: '' },
            phone: { value: '', isValid: 'pending', errMsg: '' },
            email: { value: '', isValid: 'pending', errMsg: '' },

            date1: {
                day: { value: '', isValid: null}, 
                timeStart: { value: '', isValid: null}, 
                timeEnd: { value: '', isValid: null}
            },
            date2: {day: '', 
                timeStart: {value: '', isValid: null}, 
                timeEnd: {value: '', isValid: null},
            },
            date3: {day: '', 
                timeStart: {value: '', isValid: null}, 
                timeEnd: {value: '', isValid: null},
            },   
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
        
        setDate1(state, payload) {
            state.date1 = payload;
        },
        setDate2(state, payload) {
            state.date2 = payload;
        },
        setDate3(state, payload) {
            state.date3 = payload;
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
        
        
        validateDay(state){
            state.date1.day.value ? state.date1.day.isValid = true : state.date1.day.isValid = false;
        },
        validateTimeStart(state) {
            state.date1.timeStart.value ? state.date1.timeStart.isValid = true : state.date1.timeStart.isValid = false;
        },
        validateTimeEnd(state) {
            if(state.date1.timeEnd.value !== '' && state.date1.timeEnd.value > state.date1.timeStart.value){
                state.date1.timeEnd.isValid = true;
            }
            else{
                state.date1.timeEnd.isValid = false;
            }
        },
        
        validateTimeEnd2(state) {
            if(state.date2.timeEnd.value !== '' && state.date2.timeEnd.value > state.date2.timeStart.value){
                state.date2.timeEnd.isValid = true;
            }
            else{
                state.date2.timeEnd.isValid = false;
            }
        },
        validateTimeEnd3(state) {
            if(state.date3.timeEnd.value !== '' && state.date3.timeEnd.value > state.date3.timeStart.value){
                state.date3.timeEnd.isValid = true;
            }
            else{
                state.date3.timeEnd.isValid = false;
            }
        }
    },
    actions:{
        validateDate(context,) {
            context.commit('validateDay');
            context.commit('validateTimeStart');
            context.commit('validateTimeEnd');
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

        getDate1(state) {
            return state.date1;
        },
        getDate2(state) {
            return state.date2;
        },
        getDate3(state) {
            return state.date3;
        },
    }
};
