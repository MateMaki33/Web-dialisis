<template>
    <div class="accordion mt-5 noVisible" id="accordionExample">
        
        <div v-for="pregunta in preguntas" :key="pregunta.h2id" class="accordion-item">
            <h2 class="accordion-header" :id="pregunta.h2id">
            <button :class="pregunta.buttonClass" type="button" data-bs-toggle="collapse" :data-bs-target="pregunta.dataTarget" :aria-expanded="pregunta.ariaExpanded"  :aria-controls="pregunta.h2id">
                {{ pregunta.question }}
            </button>
            </h2>
            <div :id="pregunta.divIdCollapse" :class="pregunta.divCollapseClass"  :aria-labelledby="pregunta.h2id" data-bs-parent="#accordionExample">
            <div class="accordion-body" v-html="pregunta.respuesta">
            
            </div>
            </div>
        </div>
  
    </div>
</template>

<script setup>
import preguntas from "@/services/preguntasFrecuentes.js"
import routes from "@/router/routes";

// eslint-disable-next-line no-unused-vars
const rutaDialisis = routes[1].path;

</script>

<style scoped>
</style>