export default {
    namespaced: true,
    state() {
        return {
            dougaMama: [ 
                {   
                    id: '4XWf4r418aY',
                    clip: 'https://www.youtube.com/embed/4XWf4r418aY?rel=0',
                },
                {  
                    id: 'qfhuzJoaaCQ', 
                    clip: 'https://www.youtube.com/embed/qfhuzJoaaCQ?rel=0',
                },
                {  
                    id: 'Zw_mjGm1XmA', 
                    clip: 'https://www.youtube.com/embed/Zw_mjGm1XmA?rel=0',
                },
                {  
                    id: 'BsxLVxlLoCA', 
                    clip: 'https://www.youtube.com/embed/BsxLVxlLoCA?rel=0',
                },
                {  
                    id: '2iaDXJrbsEk', 
                    clip: 'https://www.youtube.com/embed/2iaDXJrbsEk?rel=0',
                },
            ],
        }
    },
    getters: {
        dougaMama(state) {
            return state.dougaMama;
        }
    }
};

