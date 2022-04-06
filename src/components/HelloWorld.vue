<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue'
const count = ref(1)
const obj = reactive({
  a: 1,
  b: 2
})
const sum = computed(() => {
  return count.value + obj.b
})
defineProps<{
  msg?:String
}>()
// const count = ref(0)
</script>

<template>
  <h1>{{ count }}</h1>
  <h1>{{ obj.a }}</h1>
  <h1>{{ sum }}</h1>
</template>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
