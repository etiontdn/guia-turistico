<script setup>
import { inject, ref } from 'vue';
import { useRoute } from 'vue-router';
const exchange_rate = inject('exchange_rate');
const taxa_de_cambio = ref(0);

const moedaInicial = "BRL";
const moedaFinal = exchange_rate.moedas[useRoute().params.cidade];

exchange_rate.par(moedaInicial, moedaFinal).then((response) => {
  taxa_de_cambio.value = response;
});
</script>

<template>
  <v-sheet max-width="90vw" border rounded="lg">
    <v-container min-width="300" class="pa-6 pt-8 pb-8" fluid>
      <v-row>
        <v-col align="start">
          <v-row class="mb-4 ml-0" align="center">
            <v-icon class="mr-2 text-grey-darken-2">mdi-hand-coin-outline</v-icon>
            <h2 class="text-h6 text-grey-darken-3 mt-1 font-weight-regular">Câmbio</h2>
          </v-row>
          <div v-if="taxa_de_cambio > 0">
            <h3 class="text-h4 text-grey-darken-3 font-weight-regular">{{ taxa_de_cambio.toFixed(2) }} {{
              moedaFinal }}
            </h3>
            <h5 class="text-subtitle-1 text-grey-darken-1 font-weight-light">1 {{ moedaFinal }} = {{ (1 /
              taxa_de_cambio).toFixed(2)
              }} {{ moedaInicial }}
            </h5>
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
