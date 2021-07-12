<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 left d-flex align-items-center justify-content-end">
                <div class="label">{{ label }}</div><slot name="required"></slot>
            </div>
            
            <div class="col-lg-9 col-md-9 right">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', ],
}
</script>

<style scoped>
.left{
    background-color: #f9f5ed;
    border: solid 1px grey;
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
.container{
    width: 70%;
}

</style>