<template>
   <main class="container-fluid h-100 mb-3">
    <section
      class="row d-flex flex-column flex-sm-row align-items-center justify-content-around text-white mt-5"
    >
      <article class="col col-sm-5 ">
        <h1 class="mb-3 titulos">Preguntas y consejos para la dialisis</h1>
        <ol>
                <li>Puedes usar <span>tu almohada</span> . El tratamiento de Hemodialisis
                    dura 4 horas generalmente, por lo que estar cómodo es fundamental.
                </li><br>
                <li>Utiliza <span> ropa cómoda</span>. A ser posible la misma para cuando toque tratamiento
                    Esto evita discrepancias en tu peso. Puedes llevar tu <span>pijama</span>  
                    incluso. Lo normal es que tengas vestuario a tu disposición.
                </li><br>
                <li>Lleva algo de <span> entretenimiento</span>. Si bien es cierto
                    que con fístula estás mas limitado en movimiento, 
                    los pacientes se suelen apañar bien con diferentes dispositivos para anclar el movil
                    o la tablet a la cama o sillón y así manejarse con la 
                    mano libre. 
                </li><br>
                <li>Un <span>libro o revista</span>  nunca es mala opción</li><br><br>
                <li><span> Utiliza el baño antes</span> de pasar a la sala de tratamiento.
                    Desconectarte del monitor durante el tratamiento no es la 
                    mejor opción. <br>
                    No obstante, como una emergencia la tenemos cualquiera,
                    no dudes en <span>avisar con tiempo</span>  a tu Enfermera, ya que la desconexión lleva
                    unos minutos.
                </li>
              </ol>
      </article>
      <article class="col col-sm-5 noVisible">
        <img
          class="img-fluid"
          src="../assets/comodidad.png"
          alt="caricatura de riñon"
        />
      </article>
    </section>
    <PreguntasComponent/>
    <CookiesComponent/>
   </main>
</template>

<script setup>
import PreguntasComponent from '@/components/PreguntasComponent.vue';
import CookiesComponent from '@/components/CookiesComponent.vue';
import { onBeforeRouteUpdate } from 'vue-router';

const pageMeta = {
  title: 'Consejos para diálisis',
  description: 'Aprende sobre la diálisis y sus diferentes formas, incluyendo la diálisis peritoneal. Encuentra información sobre síntomas, opciones de tratamiento y consejos de alimentación',
  keywords: 'dialisis, dialisis peritoneal, sintomas, tratamientos, nutricion, hiperpotasemia, que es la dialisis, sodio, fosforo'
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
</style>