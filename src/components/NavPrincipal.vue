<template>
  <div class="container mt-3 ">
    <div class="row">
      <div class="col-sm-12 ">
        <nav class="navbar navbar-expand-sm d-flex rounded shadow">
          <button
            class="navbar-toggler mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse flex-column flex-sm-row navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li v-for="(link, index) in rutasUtiles" :key="index" class="nav-item ">
                <router-link
                  :to="{ name: link.name }"
                  class="nav-link btn btn-primary  m-2 text-white" :tabindex="index" :name="link.name"
                  >{{ link.name }}</router-link
                >
              </li>
              <li>
                <div class="dropdown d-flex justify-content-center mt-2">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Alimentos...
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><router-link
                        :to="{ name: 'Con_Potasio' }"
                        class="btn btn-warning  m-2 text-white" 
                        >... con potasio</router-link>
                      </li>
                      <li><router-link
                        :to="{ name: 'Con_Fosforo' }"
                        class="btn btn-warning  m-2 text-white" 
                        >... con fósforo</router-link>
                      </li>
                    </ul>
                  </div>
              </li>
            
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>

import routes from '../router/routes'

//Cogemos las rutas que nos interesan para el nav que son todas menos las 3 ultimas correspondientes a legalidad
const rutasUtiles= routes.slice(0,-5);

document.addEventListener('DOMContentLoaded', function(){
  const myNavEl = document.getElementsByClassName('nav-link');


for (let i = 0; i < myNavEl.length; i++) {
  myNavEl[i].addEventListener('click', function() {
    // eliminar la clase "active" de todos los elementos
    for (let j = 0; j < myNavEl.length; j++) {
      myNavEl[j].classList.remove('active'); 
         
      

    }
    // agregar la clase "active" solo al elemento clicado
    this.classList.add('active');
    
  });
   
}
});
</script>

<style scoped lang="scss">
.navbar{
  background:$redBlueGradient;
}

.nav-link:hover{color:white;}


</style>
