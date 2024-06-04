<template>
    <aside ref="asideNav" @mouseover="mostrarEnlaces = true" @mouseleave="mostrarEnlaces = false"  class=" text-white col-11 col-lg-2 d-flex flex-column p-3" :class="{'show': mostrar}">&#x27AB; Menu
        <div v-if="mostrarEnlaces" class="row">
            <a v-for="elm in content" :key="elm.nombre" class="text-white text-center btn btn-warning mt-1 " :href="elm.ancla" :name="elm.nombre">{{ elm.nombre }}</a>
        </div>
        
    </aside>
</template>

<script setup>
import {  ref, onMounted } from "vue";


//Recogemos las anclas que mandan las views para que el aside sea dinámico
// eslint-disable-next-line no-unused-vars, no-undef
const props = defineProps({
 
 content: Array

})

const mostrar=ref(false);
const mostrarEnlaces = ref(false);
const asideNav=ref(null);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (window.scrollY > 200) {
    mostrar.value = true;
  } else {
    mostrar.value = false;
    mostrarEnlaces.value = false;
  }
};


</script>

<style scoped lang="scss">
aside{
    background: $redBlueGradientTrans;
    border-radius: 20px;
    border-style: solid;
    top:5vh;
    position: fixed;
    z-index: 10;
    visibility:hidden ;
    transition: 0.3s;
    
}
.show{

    visibility: visible;
}
</style>