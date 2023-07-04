<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Users</RouterLink>
        <RouterLink to="/roles">Roles</RouterLink>
        <RouterLink to="/authorization">Authorization</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>

