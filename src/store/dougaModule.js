import { createStore } from "vuex";

const douga = createStore({
    namespaced: true,
    state() {
        return {
            dougaMama: [ 
                {  
                    title: 'タイトルタイトルタイトルタイトル', 
                    clip: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0',
                    description: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。`
                },
            ],
        }
    },
});

export default douga;
