<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <header>
    <div class="wrapper">
      <el-tabs
        v-model="activeName"
        type="card"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane label="User" name="first">
          <template #label>
            <RouterLink to="/">Users</RouterLink>
          </template>
        </el-tab-pane>
        <el-tab-pane label="User" name="first">
          <template #label>
            <RouterLink to="/roles">Roles</RouterLink>
          </template>
        </el-tab-pane>
        <el-tab-pane label="User" name="first">
          <template #label>
            <RouterLink to="/authorization">Authorization</RouterLink>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>

