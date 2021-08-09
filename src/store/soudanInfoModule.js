export default {
    namespaced: true,
    state() {
        return {
            soudanMama: [
                { 
                    src: require('@/assets/ひがりな-transparent.jpg'),
                    name: 'ひがりなさん', 
                    description: {
                        line1: '3,000円/30分',
                        line2: 'LINEオープンチャットでの相談',
                        line3: '1児の母です。WEBメディアの執筆や記事チェック、スタッフ管理などの業務を行っています。お気軽にご相談ください。'
                    }
                },
                { 
                    src: require('@/assets/nekonote-transparent.jpg'),
                    name: 'nekonoteさん', 
                    description: {
                        line1: '3,000円/30分',
                        line2: 'LINEオープンチャットでの相談',
                        
                        line3: `娘1人、息子1人をもつ2児の母です。
                        WEBメディアの執筆・編集、企業との交渉などいろいろな業務に携わっているので、
                        気になることがあればお気軽にご相談ください。`
                    }
                },
                { 
                    src: require('@/assets/kuratae-transparent.jpg'),
                    name: 'kurataeさん', 
                    description: {
                        line1: '3,000円/30分',
                        line2: 'LINEオープンチャットでの相談',
                        
                        line3: `お片付け・お掃除インストラクター。双子の小学生をワンオペ育児中です。
                        家事・育児・仕事のやりくりに日々工夫しながら取り組んでいます。`
                    }
                },
                { 
                    src: require('@/assets/ichinoki-transparent.jpg'),
                    name: 'ichinokiさん', 
                    description: {
                        line1: '3,000円/30分',
                        line2: 'LINEオープンチャットでの相談',

                        line3: `地方在住、3児の母です。
                        特別な経験も資格もない超・普通の主婦ですが、ママライターとして活動しています。`
                    }
                },
                { 
                    src: require('@/assets/yamanaka-transparent.jpg'),
                    name: 'yamanakaさん', 
                    description: {
                        line1: '3,000円/30分',
                        line2: 'LINEオープンチャットでの相談 / zoomでの相談',
                        
                        line3: `4歳と1歳のママ。上の子は保育園に通園中。現在は夜をメインに活動しています。`
                    }
                },
                { 
                    src: require('@/assets/まおにゃん-transparent.jpg'),
                    name: 'まおにゃんさん', 
                    description: {
                        line1: '3,000円/30分',
                        line2: 'LINEオープンチャットでの相談 / zoomでの相談',

                        line3: `1児の母です。
                        WEBメディアの執筆、記事チェックなどの業務を行っております。小さなことでもお気軽にご相談ください。`
                    }
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