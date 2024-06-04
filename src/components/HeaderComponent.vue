
<template>
 <header class="container-fluid bg-primary">
  <div class=" row d-flex ">
    <div class="col-2 navbar" >
      <img src="@/assets/logo.png" alt="logotipo" class="nav-brand">
    </div>
    <div class="col-10 d-flex align-items-center">
      <p class=" h1 display-2 w-100 text-center">{{pageTitle}}</p>
    </div>
  </div>
 </header>
</template>

<script setup>
import { watch, ref } from 'vue'
import {useRouter} from 'vue-router'

const pageTitles = {
    Home: 'Inicio',
    Dialisis: 'Dialisis',
    Nutricion: 'Nutricion',
    Consejos: 'Preguntas',
    Con_Potasio: 'Potasio en alimentos',
    Con_Fosforo: 'Fosforo en alimentos',
    avisoLegal: 'Aviso Legal',
    cookies: 'Cookies',
    privacidad:'Privacidad'
  }
const router = useRouter()
const pageTitle = ref('')


watch(
  () => router.currentRoute.value.name,
  (name) => {
    pageTitle.value = pageTitles[name] || "Inicio"
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
header{
  font-family: $titleFont;
  background: $headerColor;
  text-shadow: $titleColor;
  color: white;
  h1{
    font-size: $titleFontSize;
  }
}
</style>