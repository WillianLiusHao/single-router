<script lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from '../src/plugins'
</script>
<script setup lang="ts">
const router = useRouter()
const active = ref('history')

const curRouter: any = ref('')

watch(
  router.currentRoute,
  (nVal, oVal) => {
    console.log(nVal)
    curRouter.value = nVal?.path || '/404'
  },
  {
    immediate: true,
    deep: true
  }
)

</script>

<template>
  <div class="mb-10">
    <span>跳转路由：</span>
    <button :class="['mx-6', curRouter==='/home' ? 'bg-teal5' : '']" @click="router.push('/home')">/home</button>
    <button :class="['mx-6', curRouter==='/mine' ? 'bg-teal5' : '']" @click="router.push('/mine')">/mine</button>
    <button :class="['mx-6', curRouter==='/mine/detail' ? 'bg-teal5' : '']" @click="router.push('/mine/detail')">/mine/detail</button>
  </div>
  <div>
    <span>API：</span>
    <button class="mx-6 hover:bg-green-200" @click="router.forward()">forward()</button>
    <button class="mx-6 hover:bg-green-200" @click="router.back()">back()</button>
    <button class="mx-6 hover:bg-green-200" @click="router.go(-1)">go(-1)</button>
  </div>
  <!-- 渲染对应组件 -->
  <my-routerviews class="mt-8"></my-routerviews>
</template>

<style scoped>

</style>
