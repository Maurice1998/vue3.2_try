<script setup lang="ts">
import { onMounted, useSlots, useAttrs } from 'vue';
defineProps<{
    msg:string
}>()
const slots = useSlots()
const attrs = useAttrs()
onMounted(()=>{
    // console.log(slots.header&&slots.header())
    console.log(attrs) //除了props传的参数
})
</script>
<template>
<h1>子组件引用slot</h1>
<slot name="header"/>
</template>
<style></style> 