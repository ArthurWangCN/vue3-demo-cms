<template>
  <el-container class="app-wrapper">
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  .el-aside {
    background-color: #545c64;
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
