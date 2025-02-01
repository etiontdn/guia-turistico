<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let cidades = ref([
  "Paris", "Roma", "Londres", "Nova York", "Tóquio", "Dubai", "Barcelona", "Bangkok",
  "Rio de Janeiro", "Sidney", "Istambul", "Hong Kong", "Los Angeles", "Berlim", "Amsterdã",
  "Veneza", "Buenos Aires", "Las Vegas", "Santorini", "Edimburgo", "Cidade do México",
  "Seul", "Moscou", "Xangai", "Florença", "Praga", "Toronto", "Cingapura", "Viena",
  "Atenas", "Madri", "Dublin", "São Francisco", "Marrakech", "Munique", "Cairo",
  "Havana", "Capetown", "Bali", "Hongdae", "Cartagena", "Quioto", "Osaka", "Manila",
  "Kuala Lumpur", "Doha", "Salvador", "Cusco", "Bogotá", "Varsóvia", "Amã"
]
)

let router = useRouter()

let cidade = ref();
function transformaCidade(cidade) {
  return cidade.value.toLowerCase().replace(/ /g, "-")
}
const navigateTo = () => router.push({ path: "/destino/" + transformaCidade(cidade) })

</script>

<template>
  <v-container height="100%" fluid>
    <v-row height="100%" class="fill-height above" align="center" justify="center">
      <v-col max-width="400px">
        <h1 class="text-h2 font-weight-bold text-center mb-2">Para onde quer ir?</h1>
        <p class="text-h6 text-grey text-center mb-8">Descubra seu próximo destino dos sonhos</p>
        <v-row width="80%" align="start" justify="center">
          <v-autocomplete class="autocomplete" v-model="cidade" :items="cidades" max-height="20px" max-width="35%"
            min-width="300px" prepend-inner-icon="mdi-magnify" variant="solo"
            label="Insira um destino"></v-autocomplete>
          <v-btn @click="navigateTo()" theme="dark" base-color="primary" class="btn ml-4" height="56px"
            prepend-icon="mdi-airplane">Ver
            Destino</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-icon class="clouds cloud-1" color="primary">mdi-cloud-outline</v-icon>
    <v-icon class="clouds cloud-2" color="primary">mdi-cloud-outline</v-icon>
    <v-icon class="clouds cloud-3" color="primary">mdi-cloud-outline</v-icon>
  </v-container>

</template>

<style scoped>
.btn {
  animation: fadeFromRight 0.5s ease-out;
}

.autocomplete {
  animation: fadeFromLeft 0.5s ease-out;
}

.text-h2 {
  letter-spacing: -0.04em !important;
  animation: fadeFromTop 0.5s ease-out;
}

.text-h6 {
  letter-spacing: -0.03em !important;
  animation: fadeFromLeft 0.5s ease-out;
}

.clouds {
  opacity: 33%;
  position: absolute;
  z-index: 5;
  font-size: 84px;
}

.cloud-1 {
  top: 20%;
  left: 10%;
}

.cloud-2 {
  top: 29%;
  right: 29%;
}

.cloud-3 {
  top: 64%;
  right: 64%;
}

.above {
  z-index: 10;
  position: relative;
}

@keyframes fadeFromTop {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeFromLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeFromRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);

  }
}
</style>
