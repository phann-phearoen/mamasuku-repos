<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 d-flex align-items-center left" :class="{'left-sm': toggleBorder}">
                <div class="label">{{ label }}</div><slot name="required"></slot>
            </div>
            
            <div class="col-lg-9 col-md-9 right" :class="{'right-sm': toggleBorder}">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', ],

    data() {
        return {
        toggleBorder: false,
        screenWidth: 0,
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        }    
    },
    watch: {
        screenWidth(val){
            if(val < 500)
                this.toggleBorder = true;
            else
                this.toggleBorder = false
        }
    }
}
</script>

<style scoped>
.left{
    background-color: #f9f5ed;
    border: solid 1px grey;
    justify-content: flex-end;
}
.left-sm{
    background-color: #f9f5ed;
    border: none;
    justify-content: flex-start;
}
.label{
    color: grey;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 400;
    font-size: 1em;
}
.right{
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: solid 1px grey;
    border-right: solid 1px grey;
    border-bottom: solid 1px grey;
}
.right-sm{
    padding-top: 1em;
    padding-bottom: 1em;
    border: none;
}

.container{
    width: 70%;
}

</style>