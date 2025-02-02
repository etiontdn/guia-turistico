<script setup>
import { inject, ref } from 'vue';
import { useRoute } from 'vue-router';

// Função para corrigir nome da cidade
function capitalizeFirstLetter(string) {
  let str = string.charAt(0).toUpperCase() + string.slice(1);
  str = str.replace(/-/g, ' ');
  return str;
}


const clima = inject('clima');
const exchange_rate = inject('exchange_rate');
const coordenadas = ref(clima.coordenadas[useRoute().params.cidade]);
const pais = ref(exchange_rate.paises[useRoute().params.cidade]);
const tempo = ref();

let date = ref(new Date());
const horas = ref();
date.value.setTime(date.value.getTime() + date.value.getTimezoneOffset() * 60 * 1000);
const icon = ref();

function getIcon() {
  const w = tempo.value.weather[0];
  if (w.id >= 800) {
    icon.value = 'mdi-weather-sunny';
  } else if (w.id >= 700) {
    icon.value = 'mdi-weather-fog';
  } else if (w.id >= 600) {
    icon.value = 'mdi-weather-snowy';
  } else if (w.id >= 500) {
    icon.value = 'mdi-weather-rainy';
  } else if (w.id >= 300) {
    icon.value = 'mdi-weather-partly-rainy';
  } else if (w.id >= 200) {
    icon.value = 'mdi-weather-lightning-rainy';
  }
}

clima.getTempo(coordenadas.value.latitude, coordenadas.value.longitude).then((response) => {
  tempo.value = response;
  console.log(tempo.value);
  date.value.setTime(date.value.getTime() + tempo.value.timezone * 1000);
  horas.value = date.value.toTimeString().slice(0, 5);
  getIcon();
});



</script>

<template>
  <v-sheet max-width="90vw" class="fundo-gradiente" rounded="lg">
    <v-container min-width="320" class="pa-6 pt-8 pb-8" fluid>
      <v-row v-if="tempo" align="center">
        <v-col align="start">
          <v-row class="mb-4 ml-0" align="start" justify="space-between">
            <v-col class="ma-0 pa-0">
              <h2 class="text-h6 text-grey-darken-3 font-weight-regular">Clima e Hora Local</h2>
              <h4 class="text-subtitle-1 text-grey-darken-2">{{ capitalizeFirstLetter($route.params.cidade) }}, {{ pais
                }}</h4>
            </v-col>
            <v-icon size="32" class="mr-2 text-grey-darken-3">{{ icon }}</v-icon>
          </v-row>
          <v-row class="ml-0">
            <v-col class="ma-0 pa-0" cols="12" lg="6">
              <h3 class="text-h4 mb-2 text-grey-darken-3 font-weight-regular">{{ tempo.main.temp.toFixed(0) }} ºC</h3>
              <h5 class="text-subtitle-1 mt-1 text-grey-darken-1 font-weight-regular">{{ tempo.weather[0].description }}
              </h5>
            </v-col>
            <v-col class="ma-0 pa-0 text-right" cols="12" lg="6">
              <h3 class="text-h4 mb-2 text-grey-darken-3 font-weight-regular">{{ horas }}</h3>
              <h5 class="text-subtitle-1 mt-1 text-grey-darken-1 font-weight-regular">GMT {{ tempo.timezone > 0 ? "+" :
                "" }}{{ tempo.timezone != 0 ? tempo.timezone / 3600 : '' }}</h5>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.text-subtitle-1 {
  letter-spacing: 0.07em !important;
}

.text-h6,
.text-h4 {
  letter-spacing: -0.025em !important;
}

.fundo-gradiente {
  background: linear-gradient(to bottom right, rgba(186, 230, 253, 0.8), rgba(219, 234, 254, 0.7));
}

h5 {
  margin-top: -8px;
}
</style>
