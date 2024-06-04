<template>
  <div class="container">
    <div class="row justify-content-center align-items-center mt-5">
      <div class="col col-md-4 mt-5">
        <div class="card-body">
          <h4 class="card-title titulos text-white">observaciones</h4>
          <p class="text-white">
            Puede que algunos alimentos no estén o se encuentren por su
            singular. Ejemplo <br />
            Lentejas => Lenteja
          </p>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <div class="card mt-4">
          <div class="card-body">
            <h4 class="card-title">Potasio por 100g</h4>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="searchTerm"
                placeholder="Ingrese el nombre del alimento"
              />
            </div>
            <button
              class="btn btn-primary mt-3"
              @click="search"
              :disabled="searchTerm === ''"
            >
              Buscar
            </button>
          </div>
          <ul class="list-group">
            <li class="list-group-item bg-danger text-white">
             &#10008; &#62; 300 peligro 
            </li>
            <li class="list-group-item bg-warning text-white">
             &#9888; 151-299 moderación 
            </li>
            <li class="list-group-item bg-success text-white">✔ 0-150 bien </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="row justify-content-center mt-5"
      v-if="filteredFoods.length > 0"
    >
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Alimentos encontrados:</h4>
            <div v-for="food in filteredFoods" :key="food['N° de']">
              <h5 class="card-subtitle mb-2">{{ food.Nombre }}</h5>
              <p class="card-text mb-3">Potasio: {{ food["Potasio mg"] }} mg</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-5" v-else>
      <div class="col-md-6">
        <div class="alert alert-info" role="alert">
          No se encontraron alimentos.
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col mt-5">
        <div class="card-body">
          <h4 class="card-title titulos text-white">Valores de referencia</h4>
          <p class="text-white">
            La ingesta diaria de potasio recomendada en insuficiencia renal es
            2000 mg (1)
          </p>
          <cite>
            <p class="blockquote">
              (1) NATIONAL KIDNEY FOUNDATION <br />
              <a
                href="https://www.kidney.org/atoz/content/potassium "
                title="NATIONAL KIDNEY FOUNDATION"
                >https://www.kidney.org/atoz/content/potassium
              </a>
            </p>
          </cite>
        </div>
      </div>
    </div>
    <CookiesComponent/>

  </div>
</template>

<script setup>
import CookiesComponent from '@/components/CookiesComponent.vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { ref } from "vue";
import diacritic from "diacritic";

const searchTerm = ref("");
const filteredFoods = ref([]);

const search = async () => {
  if (searchTerm.value === "") {
    return; // No hacer nada si el campo está vacío
  }
  try {
    const response = await fetch("/tablaAlimentos.json");
    const data = await response.json();
    console.log(data);

    if (Array.isArray(data)) {
      const normalizedSearchTerm = diacritic.clean(
        searchTerm.value.toLowerCase()
      );
      filteredFoods.value = data.filter(
        (food) =>
          food &&
          food.Nombre &&
          diacritic
            .clean(food.Nombre.toLowerCase())
            .includes(normalizedSearchTerm)
      );
    } else {
      console.error("El archivo JSON no contiene un arreglo válido.");
    }
  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
  }
};

const pageMeta = {
  title: 'Potasio en los alimentos',
  description: 'Busca que cantidad de potasio tienen los alimentos y niveles saludables para paciente renal crónico',
  keywords: 'dialisis, dialisis peritoneal, sintomas, tratamientos, nutricion, hiperpotasemia, que es la dialisis, sodio, fosforo, potasio en alimentos,potasio'
};

// Actualizar las metaetiquetas y el título antes de cambiar de ruta
onBeforeRouteUpdate((to, from, next) => {
  updatePageMeta(to.meta);
  next();
});

// Función para actualizar las metaetiquetas y el título
function updatePageMeta(meta) {
  const head = document.head || document.getElementsByTagName('head')[0];

  // Actualizar el título
  const title = document.title;
  document.title = meta.title || title;

  // Actualizar las metaetiquetas
  const metaTags = head.getElementsByTagName('meta');
  for (let i = 0; i < metaTags.length; i++) {
    const tag = metaTags[i];
    if (tag.getAttribute('name') === 'description') {
      tag.content = meta.description || '';
    }
    if (tag.getAttribute('name') === 'keywords') {
      tag.content = meta.keywords || '';
    }
  }
}

// Configurar las metaetiquetas y el título inicialmente
updatePageMeta(pageMeta);
</script>

<style scoped>
.card {
  border: none;
}

.card-title {
  font-size: 1.5rem;
}

.card-subtitle {
  font-size: 1.25rem;
}

.card-text {
  font-size: 1rem;
}
cite p {
  font-size: 0.9em;
  color: white;
}
cite a {
  text-decoration: none;
  color: white;
}
</style>
