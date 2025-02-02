<script setup>
import { inject, ref } from 'vue'
import { useRoute } from 'vue-router'

const unsplash = inject('unsplash')
const exchange_rate = inject('exchange_rate')

// Função para corrigir nome da cidade
function capitalizeFirstLetter(string) {
  let str = string.charAt(0).toUpperCase() + string.slice(1)
  str = str.replace(/-/g, ' ')
  return str
}
const pais = ref(exchange_rate.paises[useRoute().params.cidade])
const cidade = ref(capitalizeFirstLetter(useRoute().params.cidade))

const image = ref({})

unsplash.getFotos(useRoute().params.cidade).then((response) => {
  image.value.url = response.results[0].urls.regular
  image.value.autor = response.results[0].user.name
  image.value.autor_url = response.results[0].user.links.html
})
</script>

<template>
  <v-sheet v-if="image != {}" max-width="90vw" rounded="lg">
    <v-container min-width="300" class="pa-3 pl-0 ml-1 pt-4 pb-4" fluid>
      <v-row>
        <v-col align="start">
          <v-row class="mb-4 ml-0" align="center">
            <v-icon class="mr-2 text-grey-darken-2">mdi-map-marker</v-icon>
            <h4 class="text-subtitle-1 text-grey-darken-3 mt-1">{{ pais }}</h4>
          </v-row>
          <h2 class="text-h3 text-grey-darken-3 mt-1 font-weight-regular">{{ cidade }}</h2>
          <figure class="mt-4">
            <img
              :src="image.url"
              :alt="'Foto de' + $route.params.cidade"
              style="width: 100%; border-radius: 8px"
            />
            <figcaption class="text-caption text-grey-darken-1 font-weight-light">
              Foto por <a :href="image.autor_url" target="_blank">{{ image.autor }}</a>
            </figcaption>
          </figure>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.text-h6,
.text-h4 {
  letter-spacing: -0.025em !important;
}

h5 {
  margin-top: -8px;
}
</style>
