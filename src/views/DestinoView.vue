<script setup>
import CambioSheet from '../components/CambioSheet.vue'
import ClimaTempoSheet from '../components/ClimaTempoSheet.vue'
import TurismoSheet from '../components/TurismoSheet.vue'
import ImageSheet from '../components/ImageSheet.vue'
</script>

<template>
  <div class="destino">
    <v-row class="ma-0 pa-0 center-limited" justify="center">
      <v-col>
        <ImageSheet class="image sheet"></ImageSheet>
      </v-col>
      <v-col>
        <v-container justify="space-between" class="ma-0 pa-0 space" height="100%" fluid>
          <ClimaTempoSheet class="clima sheet"></ClimaTempoSheet>
          <CambioSheet class="cambio sheet"></CambioSheet>
        </v-container>
      </v-col>
      <v-col cols="12">
        <TurismoSheet class="turismo sheet"></TurismoSheet>
      </v-col>
    </v-row>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .destino {
    min-height: 100vh;
    display: flex;
    align-items: start;
  }
}

.space {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 16px;
}

.image {
  height: 100%;
}

.center-limited {
  max-width: 1024px;
}

.destino {
  display: flex;
  justify-content: center;
}

@keyframes fadeFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sheet {
  margin: 2px;
  animation: fadeFromBottom 0.5s ease-out;
}
</style>
