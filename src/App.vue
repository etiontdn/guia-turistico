<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BottomNav from './components/BottomNav.vue'
</script>

<template>
  <v-app>
    <RouterView />
    <BottomNav></BottomNav>
  </v-app>
</template>

<style scoped></style>
