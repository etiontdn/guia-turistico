<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()

const navigateTo = (path) => router.push({ path: path })
</script>

<template>
  <v-bottom-navigation>
    <v-btn @click="navigateTo('/')" value="inicio">
      <v-icon>mdi-home</v-icon>

      <span>Inicio</span>
    </v-btn>

    <v-btn @click="navigateTo('/favoritos')" value="favoritos">
      <v-icon>mdi-heart</v-icon>

      <span>Favoritos</span>
    </v-btn>
  </v-bottom-navigation>
</template>
