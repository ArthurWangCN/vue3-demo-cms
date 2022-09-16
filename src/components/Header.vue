<template>
  <div class="navbar">
    <Breadcrumb />
    <div class="navbar-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Breadcrumb from "./Breadcrumb.vue";
import { useStore } from 'vuex'

const squareUrl = ref('https://img0.baidu.com/it/u=1056811702,4111096278&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500')

const store = useStore()

const logout = () => {
  store.dispatch('logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::v-deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>