<script setup lang="ts">
// defineProps({
//     msg: {
//         type: String,
//         required: true,
//         default: "hello"
//     },
//     ageList:Array
// })
// defineProps<{
//     msg: string,
//     ageList: Array<number>
// }>()
const props = withDefaults(
    defineProps<{
        msg: string,
        ageList: Array<number>
    }>(), {
    msg: "hello",
    ageList: () => [1, 2]
}
)

</script>
<template>
    <h1>{{ msg }}</h1>
    <div v-for="(item, index) in ageList" :key="index">
        <li>{{ item }}</li>
    </div>
</template>
<style></style>