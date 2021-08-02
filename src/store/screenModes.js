export default {
    namespaced: true,
    state() {
        return {
            screenMode: null,
            screenWidth: 0,
        }
    },
    mutations: {
        setScreenMode(state, payload) {
            if(payload > 960){
                state.screenMode = 'normal';
            }
            else if(payload > 500){
                state.screenMode = 'tablet';
            }
            else
                payload = 'mobile';
        },
    },

    getters: {
        getScreenMode(state) {
            return state.screenMode;
        },
    }
}