<template>
    <div class="row clipGrid" v-if="moreClicked">
        <douga-card class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
        v-for="(mama, index) in dougaMama"
        :key="index"
        :title="mama.title"
        :clip="mama.clip"
        :description="mama.description"
        ></douga-card>
    </div>
    <div class="row clipGrid" v-else>
        <douga-card class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
        v-for="(mama, index) in shortDougaMamaList"
        :key="index"
        :title="mama.title"
        :clip="mama.clip"
        :description="mama.description"
        ></douga-card>
    </div>
    <toggle-more @toggle-more="toggleMore" :moreClicked="moreClicked"></toggle-more>
    
</template>

<script>
import DougaCard from './DougaCard.vue';
export default {
    components: { DougaCard, },
    data() {
        return{
            moreClicked: false,
        }
    },
    computed: {
        dougaMama() {
            return this.$store.getters['dougaInfo/dougaMama'];
        },
        shortDougaMamaList() {
            const mamaList = [];
            for(let i = 0; i < 4; i++){
                mamaList.push(this.dougaMama[i]);
            }
            return mamaList;
        },
    },
    methods: {
        toggleMore() {
            this.moreClicked = !this.moreClicked
        },
    }

}
</script>