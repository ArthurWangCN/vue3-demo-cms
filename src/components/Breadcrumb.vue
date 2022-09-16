<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import {useRoute} from 'vue-router'

const breadcrumbList = ref([])

const route = useRoute()

const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
  console.log(breadcrumbList.value);
}

watch(
  route,
  () => {
    initBreadcrumbList()
  },
  {deep: true, immediate: true}
)

</script>

<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>

