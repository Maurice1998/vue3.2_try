<script setup lang="ts">
import { reactive, ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import DefineProps from '@/components/defineProps.vue'
import DefineEmits from '@/components/defineEmits.vue'
// const ageList = reactive([1,2,3])
const ageList = ref([1, 2, 5])
const parentClick = (msg: string) => {
  alert(msg)
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <DefineProps msg="Hello Vue 3" :ageList="ageList"></DefineProps>
  <DefineEmits @parentClick="parentClick"></DefineEmits>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
