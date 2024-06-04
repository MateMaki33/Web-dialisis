<template>
    <div class="container-fluid h-100 noVisible">
        <div class="row mt-5">
        <div class="col-12"><h2 class="titulos mb-5 text-center">¿Qué parametros debería conocer?</h2></div>
        <div v-for="parametro in parametros" :key="parametro.nombre"  
                @mouseover="mostrarDetalle(parametro)" 
                :id="parametro.nombre" 
                class="col-4 col-sm-2 text-center" 
                :class="{'hover-shadow': sombrear === parametro.nombre}">
            <img class="img-fluid" :src="parametro.ruta" :alt="parametro.nombre">
        </div>
    </div>

    <div class="row d-flex mt-5">
        <div class="col-9 detallesParametro text-white text-center mx-auto" v-html="detallesParametro">
            
        </div>
    </div>
    </div>
    
</template>

<script setup>
import parametros from '@/services/parametrosDialisis.js'
import { ref } from 'vue';

let detallesParametro=ref("");
var sombrear=ref("");

const mostrarDetalle =(parametro)=>{
detallesParametro.value = parametro.descripcion;
sombrear = parametro.nombre;


};

</script>

<style scoped lang="scss">
.hover-shadow{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: $redBlueGradient;
}
.titulos {
  
  font-family: $titleFont;
  text-shadow: $titleColor;
  color: white;
}
</style>