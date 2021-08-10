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
            `テレワーク先駆者としてWANNAGROWが培ってきた
            在宅ワークのノウハウを惜しみなく提供します。
            初めてのチャレンジ・・わからないこと、不安なことがたくさんありますよね。
            在宅ワークに取り組むうえで、役に立つ情報を動画にまとめました!`,
        }
    },
    getters: {
        welcomeTexts (state) {
            return state.welcomeTexts;
        }
        
    }
});

export default store;
