<script setup>
import { RouterView } from 'vue-router'
import BottomNav from './components/BottomNav.vue'
</script>

<template>
  <v-app class="v-app">
    <RouterView />
    <BottomNav></BottomNav>
  </v-app>
</template>

<style scoped></style>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}
</style>
