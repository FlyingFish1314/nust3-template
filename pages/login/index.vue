<template>
  <div>
    {{ test }}
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/global'
import { getHomeInfo } from '@/service/home'

const globalStore = useGlobalStore()
const { test } = storeToRefs(globalStore)
definePageMeta({
  layout: 'custom-layout'
})

const result = await getHomeInfo()
if (process.client) {
  console.log(result.data.value?.data)
}
</script>
<style scoped></style>
