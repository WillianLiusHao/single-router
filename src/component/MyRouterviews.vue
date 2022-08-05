<script lang='ts'>
import { watch, shallowRef } from 'vue'
import { useRouter } from '../plugins/index.js';
</script>
<script lang='ts' setup>
const router = useRouter()
console.log(router.currentRoute)
const component = shallowRef<any>()
watch(
  router.currentRoute,
  (nVal, oVal) => {
    component.value = nVal?.component
  },
  {
    immediate: true,
    deep: true
  }
)
</script>

<template>
  <div class="my-routerviews bg-teal5 border">
    <p>这里是router-views</p>
    <template v-if="component">  
      <component :is="component"></component>
    </template>
    <template v-else>
      404
    </template>
  </div>
</template>

<style lang='scss' scoped>
</style>
