<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let cidades = ref(["Juiz de Fora", "Rio de Janeiro", "São Paulo", "Belo Horizonte"])

let router = useRouter()

let cidade = "";
function transformaCidade(cidade) {
  return cidade.toLowerCase().replace(/ /g, "-")
}
const navigateTo = () => router.push({ path: "/destino/" + transformaCidade(cidade) })

</script>

<template>
  <v-container height="100%" fluid>
    <v-row height="100%" class="fill-height" align="center" justify="center">
      <v-sheet max-width="500" max-height="300px" rounded elevation="10" class="mx-auto p-4 mb-16" width="100%">
        <v-col align="center" justify="center">
          <v-autocomplete v-model="cidade" label="Insira uma cidade" :items="cidades"></v-autocomplete>
          <v-btn append-icon="mdi-chevron-right-circle-outline" @click="navigateTo()">Ver Destino
            <template v-slot:append>
              <v-icon color="primary"></v-icon>
            </template>
          </v-btn>
        </v-col>
      </v-sheet>
    </v-row>
  </v-container>
</template>
