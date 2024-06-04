<template>
   <section class="container mt-5">
    <div class="parrafos row d-flex flex-column justify-content-center align-items-center" id="presentacion">
      <div class="col">
         <h1 class="text-center text-white">Bienvenido a la Web sobre Diálisis</h1>
      </div>
      <div class="col text-center contenidoMain">
          <p>Quiero que conozcas los aspectos más relevantes sobre la diálisis y su importancia, 
        y ayudarte a llevarlo de la mejor forma posible aclarando dudas y 
        ofreciéndote mis consejos, basados en años de experiencia como enfermero
        especializado.</p>
      </div>
    </div>
    <div class="row  d-flex flex-column flex-sm-row mt-5 contenidos rounded align-items-center ">
      <div class="col col-sm-6 text-center">
        <img class="img-fluid w-50 h-70" src="@/assets/rinon.png" id="rinon" alt="riñon dibujado">
      </div>

      <article class="col col-sm-6 ">
        <p>Los riñones repercuten directa o indirectamente en diversos <span>procesos
        fisiológicos</span> en nuestro organismo. Están encargados de funciones tan importantes
        como; <span>limpiar</span> la sangre de desechos metabólicos, <span>eliminar o retener agua</span>, <span>regular
        el PH</span> ... <br><br>
        También destaca su <span>papel endocrino</span>, produciendo Eritropoyetina, necesaria en la médula osea para
        fabricar sangre,
        Renina, necesaria en la regulación de la tensión arterial,
        y tienen un papel importante en la activación de la vitamina D.<br><br>
        Por todo ello, no es dificil entender la importancia y repercusiones que pueden suceder, debido a un
        mal funcionamiento de ellos.
        </p>
      </article>

    </div>

    <div class="row d-flex flex-column-reverse flex-sm-row mt-5 contenidos rounded align-items-center ">
      
      <article class="col col-sm-6 ">
        <p >Cuando los riñones fallan definitivamente, la muerte del organismo
          es inevitable y
          es necesario sustituir sus funciones.
          Esto es posible mediante el <span>transplante</span> renal, o bien,
          tratamiento sustitutivo mediante <span>hemodiálisis</span>
          Mediante la Hemodialisis se limpia tu sangre de moleculas de desecho
          y tambien extraemos líquido. La parte endocrina se sustituye con fármacos
          específicos
        </p>
      </article>
      <div class="col col-sm-6 text-center">
        <img class="img-fluid w-50 h-70" src="@/assets/gotasSangre.png" id="rinon" alt="riñon dibujado">
      </div>

    </div>
    <CookiesComponent/>
  </section>
</template>

<script setup>
import CookiesComponent from '@/components/CookiesComponent.vue';
import { onBeforeRouteUpdate } from 'vue-router';

const pageMeta = {
  title: 'Inicio a la diálisis',
  description: 'Bienvenido a la web sobre dialisis. Quiero que conozcas los aspectos mas relevantes y su importancia para ayudarte a llevarlo de la mejor forma posible ',
  keywords: 'dialisis, dialisis peritoneal, sintomas, tratamientos, nutricion en dialisis, hiperpotasemia, ¿que es la dialisis?, sodio, fosforo'
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

<style scoped lang="scss">

.contenidoMain{

  color: rgb(249, 253, 254);
  font-size: calc(1em + 5px);
  font-family: "sans-serif";
  
}
#presentacion{
 border-radius: 10px;
 background:$redBlueGradient;
 
}
  
.contenidos{

  font-family: sans-serif;
  font-weight: bold;
  color: white;
}


</style>