import { createStore } from "vuex";
import douga from "./dougaModule";

const store = createStore({
    modules: { 
        dougaModule: douga 
    },
    state() {
        return {
            welcomeTexts: 
            '在宅で働くにあたり、色々と学べる動画をご用意しました！' + '\n' +
            'そしてなんと！\n' +
            '動画に加えて、在宅で働いている現役ママにも相談できちゃいますよ！\n' + 
            'テキストテキストテキストテキストテキストテキストテキストテキストテキス\n' + 
            'トテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        }
    },
    getters: {
        welcomeTexts (state) {
            return state.welcomeTexts;
        }
    }
});

export default store;