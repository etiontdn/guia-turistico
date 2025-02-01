<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router'

const gemini = inject('gemini');
gemini.getPontosTuristicos(useRoute().params.cidade).then((response) => {
  console.log(response);
});
</script>

<template>
  <div class="about">
    <h1>{{ $route.params.cidade }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
