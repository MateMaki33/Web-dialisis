<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-8">
        <div v-for="(cancion, index) in cancionesMapeadas" :key="index" class="card mb-4">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="cancion.imgUrl" class="img-fluid rounded-start" alt="Imagen de la canción">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ cancion.name }}</h5>
                <p class="card-text">{{ cancion.type }}</p>
                <button class="btn btn-primary me-2" @click="reproducir(cancion)">Play</button>
                <button class="btn btn-danger" @click="detener">Stop</button>
              </div>
              <div class="row text-center">
                 <div v-if="cancion.sonando" class="estado-sonando col-4">📀</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import canciones from '@/services/music';

let cancionesMapeadas = reactive(canciones.map(cancion => ({...cancion, sonando: false})));
let audio = ref(null);

const reproducir = (cancion) => {
  // Detener la reproducción de todas las canciones excepto la actual
  detener();

  audio.value = new Audio(cancion.url);
  audio.value.play();
  cancion.sonando = true;

  audio.value.onended = () => {
    cancion.sonando = false;
  };
}

const detener = () => {
  if (audio.value) {
    audio.value.pause();
    audio.value.currentTime = 0;
    audio.value = null;
  }
  cancionesMapeadas.forEach(c => c.sonando = false);
}

</script>

<style scoped>
.container {
  margin-top: 50px;
}

.estado-sonando {
  
  width: 100px;
  height: 100px;
  font-size: 3rem;
  border-radius: 50%;
  animation: pulsar 1s infinite forwards;
  opacity:0;
  transition: opacity 1s;
}

@keyframes pulsar {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2)
               rotate(360deg);
    opacity: 1;
  }
}
</style>
