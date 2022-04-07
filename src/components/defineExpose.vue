<script setup lang="ts">
//setup语法糖中的内容默认无法从外部获取 需要暴露出去
import {ref} from 'vue'
const msg = ref('child msg')
const num = ref(123)
const handler = ()=>{
    console.log("暴露的子组件")
}
defineExpose({
    msg,num,handler
})
</script>
<template>
<h1>{{msg}}</h1>
<h2>{{num}}</h2>
</template>
<style>
</style>