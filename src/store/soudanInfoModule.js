export default {
    namespaced: true,
    state() {
        return {
            soudanMama: [
                { 
                    src: require('@/assets/soudan-mama.png'),
                    name: 'R.H さん', 
                    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
                },
                { 
                    src: require('@/assets/soudan-mama.png'),
                    name: 'R.H さん', 
                    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
                },
                { 
                    src: require('@/assets/soudan-mama.png'),
                    name: 'R.H さん', 
                    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
                },
                { 
                    src: require('@/assets/soudan-mama.png'),
                    name: 'R.H さん', 
                    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
                },
                { 
                    src: require('@/assets/soudan-mama.png'),
                    name: 'R.H さん', 
                    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
                },
                { 
                    src: require('@/assets/soudan-mama.png'),
                    name: 'R.H さん', 
                    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
                },
            ],
        }
    },
    getters: {
        soudanMama(state) {
            return state.soudanMama;
        },
        shortSoudanMamaList(state) {
            const mamaList = [];
            for(let i = 0; i < 3; i++){
                mamaList.push(state.soudanMama[i]);
            }
            return mamaList;
        }
    }
}