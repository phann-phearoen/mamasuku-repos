import { createStore } from "vuex";

const douga = createStore({
    namespaced: true,
    state() {
        return {
            dougaMama: {   
                title: 'タイトルタイトルタイトルタイトル', 
                clip: '../assets/clip.png',
                description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。`
            },
        }
    },
    
});

export default douga;