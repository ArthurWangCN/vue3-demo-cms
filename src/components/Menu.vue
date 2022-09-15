<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-sub-menu :index="item.id" v-for="(item, index) in menus" :key="item.id">
      <template #title>
        <el-icon><component :is="iconList[index]"></component></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item-group v-for="submenu in item.children" :key="submenu.id">
        <el-menu-item :index="'/'+submenu.path" @click="savePath(submenu.path)">{{submenu.authName}}</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from "@/api/menu.js";
import { onMounted, ref } from "vue";

const menus = ref([])
const defaultActive = ref(sessionStorage.getItem('activeMenu') || '/users')

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'PieChart'])

const initMenuList = async () => {
  const res = await menuList();
  console.log(res);
  menus.value = res;
};

onMounted(() => {
  initMenuList();
});

const savePath = path => {
  sessionStorage.setItem('activeMenu', `/${path}`);
}
</script>
