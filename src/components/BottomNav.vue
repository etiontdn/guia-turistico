<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()

const navigateTo = (path) => router.push({ path: path })
</script>

<template>
  <v-bottom-navigation grow="true">
    <v-btn @click="navigateTo('/')" value="inicio" class="mr-8 rounded p-4">
      <v-icon>mdi-home-outline</v-icon>

      <span>Inicio</span>
    </v-btn>

    <v-btn @click="navigateTo('/favoritos')" value="favoritos" class="rounded p-4">
      <v-icon>mdi-heart-outline</v-icon>

      <span>Favoritos</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped></style>
