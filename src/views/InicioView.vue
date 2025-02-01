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

let cidade = ref("");
function transformaCidade(cidade) {
  return cidade.value.toLowerCase().replace(/ /g, "-")
}
const navigateTo = () => router.push({ path: "/destino/" + transformaCidade(cidade) })

</script>

<template>
  <v-container height="100%" fluid>
    <v-row height="100%" class="fill-height" align="center" justify="center">
      <v-sheet max-width="500" max-height="300px" rounded elevation="10" class="mx-auto p-4 mb-16" width="100%">
        <v-col align="center" justify="center">
          <v-autocomplete v-model="cidade" label="Insira uma cidade" :items="cidades"></v-autocomplete>
          <v-btn append-icon="mdi-chevron-right-circle-outline" :disabled="cidade == ''"
            @click="cidade != '' ? navigateTo() : ''">Ver Destino
            <template v-slot:append>
              <v-icon color="primary"></v-icon>
            </template>
          </v-btn>
        </v-col>
      </v-sheet>
    </v-row>
  </v-container>
</template>
