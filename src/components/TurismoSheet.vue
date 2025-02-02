<script setup>
import { inject, ref } from 'vue';
import { useRoute } from 'vue-router';
const gemini = inject('gemini');

const turismo = ref([]);

gemini.getPontosTuristicos(useRoute().params.cidade).then((response) => {
  console.log(response)
  turismo.value = response;
});

</script>

<template>
  <v-sheet max-width="min(380px, 90vw)" border rounded="lg">
    <v-container min-width="300" class="pa-6 pt-8 pb-8" fluid>
      <v-row>
        <v-col align="start">
          <v-row class="mb-4 ml-0" align="center">
            <v-icon class="mr-2 text-grey-darken-2">mdi-bank-outline</v-icon>
            <h2 class="text-h6 text-grey-darken-3 mt-1 font-weight-regular">Pontos Turísticos</h2>
          </v-row>
          <div class="mt-2" v-for="item in turismo" :key="item.id">
            <h3 class="text-h6 text-grey-darken-3 font-weight-regular">{{ item.nome }}</h3>
            <p class="text-subtitle-2 text-grey-darken-1 font-weight-light">{{ item.pequena_descricao }}</p>
            <p class="text-caption text-grey-darken-1 font-weight-light">{{ item.local }} <a
                :href="'https://www.google.com/maps/search/' + item.nome + ' ' + $route.params.cidade"><v-icon
                  size="sm">mdi-chevron-right-circle-outline</v-icon></a>
            </p>
          </div>
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
