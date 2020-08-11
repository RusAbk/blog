<template>
    <router-link :to="href" class="btn">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    name: "Btn",
    props: ['href']
}
</script>

<style scoped>
    .btn{
        display: inline-block;
        border:1px solid #3eaf7c;
        color: #3eaf7c;
        padding: 10px 25px;
        border-radius: 5px;
        transition: .3s;
        font-weight: 700;
        line-height: 1;
    }
    .btn:hover{
        text-decoration: none !important;
        color: #fff;
        background-color: #3eaf7c;
    }
</style>