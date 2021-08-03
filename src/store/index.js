import { createStore } from "vuex";
import dougaInfo from "./dougaModule";
import yoyakuInfo from "./yoyakuInfoModule";
import soudanInfo from "./soudanInfoModule";
const store = createStore({
    modules: { 
        dougaInfo,
        yoyakuInfo,
        soudanInfo,
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
