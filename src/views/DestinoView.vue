<script setup>
import { inject, ref } from 'vue';
import { useRoute } from 'vue-router'

const gemini = inject('gemini');
const unsplash = inject('unsplash');

const image = ref({});

unsplash.getFotos(useRoute().params.cidade).then((response) => {
  image.value.url = response.results[0].urls.regular;
  image.value.autor = response.results[0].user.name;
  image.value.autor_url = response.results[0].user.links.html;
});

const turismo = ref([]);

gemini.getPontosTuristicos(useRoute().params.cidade).then((response) => {
  console.log(response)
  turismo.value = response;
});
</script>

<template>
  <div class="about" v-if="turismo.length > 0">
    <!-- <img :src="image.url" alt="">
    <p>Foto por <a :href="image.autor_url + '?utm_source=guia_turistico&utm_medium=referral'">{{ image.autor }}</a></p>
    <h1>{{ $route.params.cidade }}</h1>
    <div v-for="item in turismo" :key="item.id">
      <h2>{{ item.nome }}</h2>
      <p>{{ item.pequena_descricao }}</p>
      <p>{{ item.local }} <a
          :href="'https://www.google.com/maps/search/' + item.nome + ' ' + $route.params.cidade">Ir</a>
      </p>
    </div> -->

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
