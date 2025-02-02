<script setup>
import { useRouter } from 'vue-router'

let router = useRouter()

const navigateTo = (path) => router.push({ path: path })
</script>

<template>
  <v-bottom-navigation class="bottomnav" rounded="t-lg">
    <v-btn @click="navigateTo('/')" value="inicio" class="rounded p-4">
      <v-icon color="grey-darken-3">mdi-home-outline</v-icon>
      <span class="text-grey-darken-3">Inicio</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.bottomnav {
  max-width: 150px;
  display: flex;
  justify-content: center;
  left: calc(50vw - 75px) !important;
}
</style>
